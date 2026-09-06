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
import { mkdir, readdir, writeFile } from 'node:fs/promises';
import path from 'node:path';
import sharp from 'sharp';
import { pdf } from 'pdf-to-img';

const CERTS_DIR = path.join(process.cwd(), 'public', 'Certificates');
const OUT_DIR = path.join(CERTS_DIR, 'previews');
const MANIFEST = path.join(process.cwd(), 'src', 'data', 'certPreviewManifest.json');
const WIDTH = 900; /* rendered width in px — crisp in the dialog, small file */


/* Preview filename must match the app-side helper exactly:
   strip .pdf, trim, collapse whitespace to dashes. */
const pdfNameToBase = (name) => name.replace(/\.pdf$/i, '').trim().replace(/\s+/g, '-');

async function renderPdf(pdfPath, baseName) {
  /* scale 2 (~144 dpi) renders ~2× the target width; the sharp resize
     brings every page down to a consistent, crisp 900px WebP. */
  const document = await pdf(pdfPath, { scale: 2 });
  let pageNo = 0;
  for await (const png of document) {
    pageNo += 1;
    const bytes = await sharp(png).resize({ width: WIDTH }).webp({ quality: 82 }).toBuffer();
    const outName = pageNo === 1 ? `${baseName}.webp` : `${baseName}-p${pageNo}.webp`;
    await writeFile(path.join(OUT_DIR, outName), bytes);
    console.log(`  ✓ ${outName} (${Math.round(bytes.length / 1024)} KB)`);
  }
  return pageNo;
}

async function main() {
  await mkdir(OUT_DIR, { recursive: true });
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