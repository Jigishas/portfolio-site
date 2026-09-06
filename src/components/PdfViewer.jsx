import React, { useEffect, useRef, useState } from 'react';

/* ------------------------------------------------------------------ */
/*  pdf.js loader — dynamically imported (code-split) on first use so  */
/*  the pdf.js bundle never touches the initial page load. The worker  */
/*  is bundled locally via Vite's ?url import; cMaps / standard fonts  */
/*  fall back to CDN only when a PDF actually needs them.              */
/* ------------------------------------------------------------------ */
const PDFJS_VERSION = '4.10.38';
let pdfjsPromise = null;

const getPdfjs = () => {
  if (!pdfjsPromise) {
    pdfjsPromise = Promise.all([
      import('pdfjs-dist'),
      import('pdfjs-dist/build/pdf.worker.min.mjs?url'),
    ])
      .then(([pdfjs, worker]) => {
        pdfjs.GlobalWorkerOptions.workerSrc = worker.default;
        return pdfjs;
      })
      .catch((err) => {
        pdfjsPromise = null; // allow a retry on next attempt
        throw err;
      });
  }
  return pdfjsPromise;
};

/* Parsed-document cache — a card thumbnail and its full-screen preview
   share one download/parse instead of fetching the PDF twice. */
const docCache = new Map();

const getDocument = (src) => {
  if (!docCache.has(src)) {
    docCache.set(
      src,
      getPdfjs()
        .then((pdfjs) =>
          pdfjs
            .getDocument({
              url: src,
              cMapUrl: `https://cdn.jsdelivr.net/npm/pdfjs-dist@${PDFJS_VERSION}/cmaps/`,
              cMapPacked: true,
              standardFontDataUrl: `https://cdn.jsdelivr.net/npm/pdfjs-dist@${PDFJS_VERSION}/standard_fonts/`,
            })
            .promise
        )
        .catch((err) => {
          docCache.delete(src); // never cache failures
          throw err;
        })
    );
  }
  return docCache.get(src);
};

/* Small concurrency limiter — keeps memory/CPU predictable on phones
   when many thumbnails enter the viewport at once. */
const MAX_CONCURRENT = 3;
let activeCount = 0;
const waiting = [];

const schedule = (task) =>
  new Promise((resolve, reject) => {
    const run = () => {
      activeCount += 1;
      task()
        .then(resolve, reject)
        .finally(() => {
          activeCount -= 1;
          if (waiting.length > 0) waiting.shift()();
        });
    };
    if (activeCount < MAX_CONCURRENT) run();
    else waiting.push(run);
  });

/* Render one page into a canvas sized for ~targetWidth CSS pixels,
   devicePixelRatio-aware and capped so canvases stay memory-safe. */
const renderPageToCanvas = async (canvas, page, targetWidth) => {
  const base = page.getViewport({ scale: 1 });
  const dpr = Math.min(window.devicePixelRatio || 1, 2);
  const scale = Math.min(Math.max((targetWidth * dpr) / base.width, 0.4), 3);
  const viewport = page.getViewport({ scale });
  canvas.width = Math.floor(viewport.width);
  canvas.height = Math.floor(viewport.height);
  const ctx = canvas.getContext('2d');
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  await page.render({ canvasContext: ctx, viewport }).promise;
};

/* Lazy gate — start loading only when the element nears the viewport. */
const useNearViewport = (ref, rootMargin = '400px') => {
  const [near, setNear] = useState(false);
  useEffect(() => {
    const el = ref.current;
    if (!el || near) return undefined;
    if (typeof IntersectionObserver === 'undefined') {
      setNear(true);
      return undefined;
    }
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries.some((e) => e.isIntersecting)) {
          setNear(true);
          observer.disconnect();
        }
      },
      { rootMargin }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, [ref, near, rootMargin]);
  return near;
};

const Spinner = ({ label = 'Loading…' }) => (
  <div className="flex h-full min-h-[120px] w-full flex-col items-center justify-center gap-2 text-muted-foreground/60">
    <svg className="h-6 w-6 animate-spin" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" aria-hidden="true">
      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.045 1.293 5.854 3.333 7.907l.707-.707z" />
    </svg>
    <span className="text-[11px] font-medium">{label}</span>
  </div>
);

const FileError = () => (
  <div className="flex h-full w-full flex-col items-center justify-center gap-1.5 bg-muted/40 text-muted-foreground/50">
    <svg className="h-7 w-7" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24" aria-hidden="true">
      <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 14.25v-2.625a3.375 3.375 0 00-3.375-3.375h-1.5A1.125 1.125 0 0113.5 7.125v-1.5a3.375 3.375 0 00-3.375-3.375H8.25m0 12.75h7.5m-7.5 3H12M10.5 2.25H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 00-9-9z" />
    </svg>
    <span className="text-[10px] font-semibold uppercase tracking-wider">PDF</span>
  </div>
);

/* ------------------------------------------------------------------ */
/*  PdfThumbnail — canvas render of page 1. Works on every device,     */
/*  including mobile browsers where <iframe>/<embed> PDFs fail.        */
/* ------------------------------------------------------------------ */
export const PdfThumbnail = ({ src, alt, aspect = 'aspect-[16/10]', className = '' }) => {
  const wrapperRef = useRef(null);
  const canvasRef = useRef(null);
  const near = useNearViewport(wrapperRef);
  const [state, setState] = useState('idle'); // idle | loading | done | error

  useEffect(() => {
    if (!near) return undefined;
    let cancelled = false;

    (async () => {
      setState('loading');
      try {
        await schedule(async () => {
          const pdf = await getDocument(src);
          if (cancelled) return;
          const page = await pdf.getPage(1);
          if (cancelled || !canvasRef.current) return;
          const width = Math.max(wrapperRef.current?.clientWidth || 480, 480);
          await renderPageToCanvas(canvasRef.current, page, width);
        });
        if (!cancelled) setState('done');
      } catch {
        if (!cancelled) setState('error');
      }
    })();

    return () => {
      cancelled = true;
    };
  }, [near, src]);

  return (
    <div
      ref={wrapperRef}
      role="img"
      aria-label={alt}
      className={`relative w-full overflow-hidden bg-muted/40 ${aspect} ${className}`}
    >
      {state === 'error' ? (
        <FileError />
      ) : (
        <>
          {state !== 'done' && (
            <div className="absolute inset-0">
              <Spinner label="Loading preview…" />
            </div>
          )}
          <canvas
            ref={canvasRef}
            className={`h-full w-full object-cover object-top transition-opacity duration-300 ${
              state === 'done' ? 'opacity-100' : 'opacity-0'
            }`}
          />
        </>
      )}
    </div>
  );
};

/* ------------------------------------------------------------------ */
/*  PdfPages — full viewer used inside the preview dialog. Renders     */
/*  every page fitted to the container width (mobile-friendly),        */
/*  reusing the document already fetched for the thumbnail.            */
/* ------------------------------------------------------------------ */
export const PdfPages = ({ src, className = '' }) => {
  const containerRef = useRef(null);
  const [state, setState] = useState('loading');

  useEffect(() => {
    let cancelled = false;
    const container = containerRef.current;
    if (!container) return undefined;

    (async () => {
      try {
        const pdf = await getDocument(src);
        if (cancelled || !containerRef.current) return;
        const width = Math.max(Math.min(containerRef.current.clientWidth || 600, 900), 480);
        const fragment = document.createDocumentFragment();

        for (let i = 1; i <= pdf.numPages; i += 1) {
          const page = await pdf.getPage(i);
          if (cancelled) return;
          const canvas = document.createElement('canvas');
          canvas.className =
            'mx-auto block h-auto w-full rounded-md border border-border/40 bg-white shadow-sm';
          await renderPageToCanvas(canvas, page, width);
          if (cancelled) return;
          fragment.appendChild(canvas);
          if (i < pdf.numPages) {
            const gap = document.createElement('div');
            gap.className = 'h-4';
            fragment.appendChild(gap);
          }
        }

        if (!cancelled && containerRef.current) {
          containerRef.current.replaceChildren(fragment);
          setState('done');
        }
      } catch {
        if (!cancelled) setState('error');
      }
    })();

    return () => {
      cancelled = true;
    };
  }, [src]);

  if (state === 'error') {
    return (
      <div
        className={`flex min-h-[320px] flex-col items-center justify-center gap-3 rounded-lg bg-muted/40 p-6 text-center ${className}`}
      >
        <p className="text-sm font-medium text-muted-foreground">Preview could not be displayed.</p>
        <a
          href={src}
          target="_blank"
          rel="noopener noreferrer"
          className="text-sm font-semibold text-primary underline underline-offset-4 hover:text-primary/80"
        >
          Open the certificate directly ↗
        </a>
      </div>
    );
  }

  return (
    <div className={className}>
      <div ref={containerRef}>
        {state === 'loading' && (
          <div className="min-h-[320px]">
            <Spinner label="Loading certificate…" />
          </div>
        )}
      </div>
    </div>
  );
};