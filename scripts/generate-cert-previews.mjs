/**
 * Generate static WebP previews for every certificate PDF in
 * public/Certificates — so the portfolio ships real <img> previews
 * instead of rendering PDFs on the client with pdf.js.
 *
 *   Page 1  →  previews/<name>.webp            900px  (dialog, full quality)
 *   Page n  →  previews/<name>-p<n>.webp       900px  (multi-page certificates)
 *              previews/thumbs/<name>.webp     480px  (grid cards + blur-up placeholder)
 *
 * The grid renders ~280 CSS px wide cards, so shipping the 900px page into
 * a card wasted ~70% of every image byte. Cards now use the 480px thumb;
 * the full 900px page is only fetched for the preview dialog.
 *
 * Also writes src/data/certPreviewManifest.json mapping each PDF
 * filename to its page count.
 *
 * Usage:  npm run previews        (re-render everything from the PDFs)
 *         npm run thumbs          (rebuild only the 480px thumbs from
 *                                  the existing 900px previews — fast)
 */
import { mkdir, readdir, writeFile } from 'node:fs/promises';
import path from 'node:path';
import sharp from 'sharp';

const CERTS_DIR = path.join(process.cwd(), 'public', 'Certificates');
const OUT_DIR = path.join(CERTS_DIR, 'previews');
const THUMB_DIR = path.join(OUT_DIR, 'thumbs');
const MANIFEST = path.join(process.cwd(), 'src', 'data', 'certPreviewManifest.json');
const WIDTH = 900; /* rendered width in px — crisp in the dialog, small file */
const THUMB_WIDTH = 480; /* card thumbnails — grid slots are ~280 CSS px wide */
const THUMB_QUALITY = 74;

const kb = (bytes) => `${Math.round(bytes / 1024)} KB`;

/* Certificates are landscape pages; withoutEnlargement keeps an
   unusually small source page from being upscaled. */
const toThumb = (input) =>
  sharp(input)
    .resize({ width: THUMB_WIDTH, withoutEnlargement: true })
    .webp({ quality: THUMB_QUALITY })
    .toBuffer();

/* Preview filename must match the app-side helper exactly:
   strip .pdf, trim, collapse whitespace to dashes. */
const pdfNameToBase = (name) => name.replace(/\.pdf$/i, '').trim().replace(/\s+/g, '-');

async function renderPdf(pdfPath, baseName) {
  /* Imported lazily so `--thumbs-only` (sharp only) still works on machines
     where the pdf-to-img native canvas binding is unavailable. */
  const { pdf } = await import('pdf-to-img');
  /* scale 2 (~144 dpi) renders ~2× the target width; the sharp resize
     brings every page down to a consistent, crisp 900px WebP. */
  const document = await pdf(pdfPath, { scale: 2 });
  let pageNo = 0;
  for await (const png of document) {
    pageNo += 1;
    const bytes = await sharp(png).resize({ width: WIDTH }).webp({ quality: 82 }).toBuffer();
    const thumbBytes = await toThumb(png);
    const outName = pageNo === 1 ? `${baseName}.webp` : `${baseName}-p${pageNo}.webp`;
    await writeFile(path.join(OUT_DIR, outName), bytes);
    await writeFile(path.join(THUMB_DIR, outName), thumbBytes);
    console.log(`  ✓ ${outName} (${kb(bytes)} full / ${kb(thumbBytes.length)} thumb)`);
  }
  return pageNo;
}

/* Rebuild only the small card thumbs from the existing 900px previews —
   no PDF rendering, so it is fast enough to re-run while tweaking
   THUMB_WIDTH / THUMB_QUALITY. */
async function buildThumbsOnly() {
  const previews = (await readdir(OUT_DIR, { withFileTypes: true })).filter(
    (entry) => entry.isFile() && entry.name.toLowerCase().endsWith('.webp')
  );
  let total = 0;
  for (const entry of previews) {
    const thumbBytes = await toThumb(path.join(OUT_DIR, entry.name));
    await writeFile(path.join(THUMB_DIR, entry.name), thumbBytes);
    total += thumbBytes.length;
    console.log(`  ✓ thumbs/${entry.name} (${kb(thumbBytes.length)})`);
  }
  return { count: previews.length, total };
}

async function main() {
  await mkdir(OUT_DIR, { recursive: true });
  await mkdir(THUMB_DIR, { recursive: true });

  if (process.argv.includes('--thumbs-only')) {
    const { count, total } = await buildThumbsOnly();
    console.log(`\n${count} thumbnails → ${path.relative(process.cwd(), THUMB_DIR)} (${kb(total)} total)`);
    return;
  }

  await mkdir(path.dirname(MANIFEST), { recursive: true });

  const files = (await readdir(CERTS_DIR)).filter((f) => f.toLowerCase().endsWith('.pdf'));
  console.log(`Found ${files.length} certificate PDFs\n`);

  const manifest = {};
  let failed = 0;
  for (const file of files) {
    process.stdout.write(`• ${file} … `);
    try {
      manifest[file] = await renderPdf(path.join(CERTS_DIR, file), pdfNameToBase(file));
    } catch (err) {
      failed += 1;
      console.error(`✗ ${err.message}`);
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