/**
 * Generate static WebP previews for every certificate PDF in
 * public/Certificates — so the portfolio ships real <img> previews
 * instead of rendering PDFs on the client with pdf.js.
 *
 *   Page 1  →  previews/<name>.webp        (card thumbnails + dialog)
 *   Page n  →  previews/<name>-p<n>.webp   (multi-page certificates)
 *
 * Also writes src/data/certPreviewManifest.json mapping each PDF
 * filename to its page count.
 *
 * Usage:  npm run previews        (re-run after adding a certificate)
 */
import { mkdir, readdir, readFile, writeFile } from 'node:fs/promises';
import path from 'node:path';
import { pathToFileURL } from 'node:url';
import { createCanvas, DOMMatrix, ImageData, Path2D } from '@napi-rs/canvas';
import { getDocument } from 'pdfjs-dist/legacy/build/pdf.mjs';

/* pdf.js legacy build expects these browser globals when rendering. */
globalThis.DOMMatrix = globalThis.DOMMatrix ?? DOMMatrix;
globalThis.Path2D = globalThis.Path2D ?? Path2D;
globalThis.ImageData = globalThis.ImageData ?? ImageData;

const CERTS_DIR = path.join(process.cwd(), 'public', 'Certificates');
const OUT_DIR = path.join(CERTS_DIR, 'previews');
const MANIFEST = path.join(process.cwd(), 'src', 'data', 'certPreviewManifest.json');
const WIDTH = 900; /* rendered width in px — crisp in the dialog, small file */

const FONT_URL =
  pathToFileURL(path.join(process.cwd(), 'node_modules', 'pdfjs-dist', 'standard_fonts')) + '/';
const CMAP_URL =
  pathToFileURL(path.join(process.cwd(), 'node_modules', 'pdfjs-dist', 'cmaps')) + '/';

/* pdf.js needs a canvas factory in Node — back it with @napi-rs/canvas. */
const canvasFactory = {
  create(width, height) {
    const canvas = createCanvas(Math.max(1, width), Math.max(1, height));
    return { canvas, context: canvas.getContext('2d') };
  },
  reset(canvasAndContext, width, height) {
    canvasAndContext.canvas.width = Math.max(1, width);
    canvasAndContext.canvas.height = Math.max(1, height);
  },
  destroy(canvasAndContext) {
    canvasAndContext.canvas = null;
    canvasAndContext.context = null;
  },
};

/* Preview filename must match the app-side helper exactly:
   strip .pdf, trim, collapse whitespace to dashes. */
const pdfNameToBase = (name) => name.replace(/\.pdf$/i, '').trim().replace(/\s+/g, '-');

async function renderPdf(pdfPath, baseName) {
  const data = new Uint8Array(await readFile(pdfPath));
  const pdf = await getDocument({
    data,
    canvasFactory,
    cMapUrl: CMAP_URL,
    cMapPacked: true,
    standardFontDataUrl: FONT_URL,
  }).promise;

  for (let i = 1; i <= pdf.numPages; i += 1) {
    const page = await pdf.getPage(i);
    const baseVp = page.getViewport({ scale: 1 });
    const viewport = page.getViewport({ scale: WIDTH / baseVp.width });
    const canvas = createCanvas(Math.round(viewport.width), Math.round(viewport.height));
    const ctx = canvas.getContext('2d');
    ctx.fillStyle = '#ffffff';
    ctx.fillRect(0, 0, canvas.width, canvas.height);
    await page.render({ canvasContext: ctx, viewport }).promise;

    const outName = i === 1 ? `${baseName}.webp` : `${baseName}-p${i}.webp`;
    const bytes = await canvas.encode('webp', 82);
    await writeFile(path.join(OUT_DIR, outName), bytes);
    console.log(`  ✓ ${outName} (${Math.round(bytes.length / 1024)} KB)`);
  }

  const pages = pdf.numPages;
  await pdf.destroy();
  return pages;
}

async function main() {
  await mkdir(OUT_DIR, { recursive: true });
  await mkdir(path.dirname(MANIFEST), { recursive: true });

  const files = (await readdir(CERTS_DIR)).filter((f) => f.toLowerCase().endsWith('.pdf'));
  console.log(`Found ${files.length} certificate PDFs\n`);

  const manifest = {};
  let failed = 0;
  for (const file of files) {
    try {
      manifest[file] = await renderPdf(path.join(CERTS_DIR, file), pdfNameToBase(file));
    } catch (err) {
      failed += 1;
      console.error(`  ✗ ${file}: ${err.message}`);
    }
  }

  await writeFile(MANIFEST, `${JSON.stringify(manifest, null, 2)}\n`);
  console.log(
    `\nManifest → ${path.relative(process.cwd(), MANIFEST)} (${Object.keys(manifest).length} entries)`
  );
  if (failed > 0) {
    console.error(`${failed} file(s) failed`);
    process.exit(1);
  }
}

main();