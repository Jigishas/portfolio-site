import React, { useEffect, useRef, useState } from 'react';
import { FileText } from 'lucide-react';

/**
 * LazyPdfPreview
 *
 * Renders a clean, theme-aware placeholder until the element is about to
 * enter the viewport (Intersection Observer). Once intersecting, it attaches
 * the PDF `data` to the <object> element.
 *
 * WHY: Browsers don't rasterize off-screen <object type="application/pdf">
 * content and instead paint it as a solid black rectangle. By deferring the
 * `data` assignment until the element is in view, we eliminate the "black
 * when not in view" artifact entirely. A CSS background on the wrapper also
 * guarantees a clean base in every theme.
 */
const LazyPdfPreview = ({
  src,
  title,
  embed = true,
  className = '',
  renderFallback,
}) => {
  const wrapperRef = useRef(null);
  const [hasIntersected, setHasIntersected] = useState(false);
  const [failed, setFailed] = useState(false);

  useEffect(() => {
    // Bail out gracefully (e.g. SSR / older browsers) — just render eagerly.
    if (!('IntersectionObserver' in window) || !wrapperRef.current) {
      setHasIntersected(true);
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setHasIntersected(true);
            observer.disconnect();
          }
        });
      },
      { rootMargin: '160px' } // start loading a touch before entering view
    );

    observer.observe(wrapperRef.current);
    return () => observer.disconnect();
  }, []);

  const handleObjectError = () => setFailed(true);

  return (
    <div
      ref={wrapperRef}
      className={
        'absolute inset-0 flex items-center justify-center rounded-lg bg-card ' +
        'transition-colors [&>object]:w-full [&>object]:h-full ' +
        className
      }
      style={{ backgroundColor: 'hsl(var(--card))' }}
    >
      {!failed && hasIntersected ? (
        <object
          data={embed ? `${src}#toolbar=0&navpanes=0&scrollbar=0` : src}
          type="application/pdf"
          aria-label={title}
          onError={handleObjectError}
        >
          {renderFallback ? (
            renderFallback()
          ) : (
            <div className="w-full h-full flex flex-col items-center justify-center gap-3 p-6 text-center">
              <FileText className="h-10 w-10 text-muted-foreground/60" />
              <p className="text-sm text-muted-foreground">
                This browser doesn't support inline PDF preview.
              </p>
            </div>
          )}
        </object>
      ) : failed || renderFallback ? (
        renderFallback ? (
          renderFallback()
        ) : (
          <ShimmerPlaceholder title={title} />
        )
      ) : (
        <ShimmerPlaceholder title={title} />
      )}
    </div>
  );
};

const ShimmerPlaceholder = ({ title }) => (
  <div className="w-full h-full flex flex-col items-center justify-center gap-4 p-8 text-center">
    <div className="relative">
      <div className="absolute inset-0 rounded-full blur-2xl bg-gradient-to-br from-primary/30 via-accent/30 to-secondary/20 opacity-60" />
      <div className="relative flex items-center justify-center w-20 h-20 rounded-2xl bg-gradient-to-br from-primary/15 via-accent/15 to-secondary/10 border border-border/40">
        <FileText className="h-10 w-10 text-muted-foreground/50" />
      </div>
    </div>
    <div className="max-w-[80%] space-y-2">
      <p className="text-xs font-semibold text-foreground/70 truncate">
        {title}
      </p>
      <p className="text-xs text-muted-foreground/60">Loading preview…</p>
    </div>
  </div>
);

export default LazyPdfPreview;
