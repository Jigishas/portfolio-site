/**
 * Dev-only visual check helper (not part of the build).
 *
 * Drives a headless Edge/Chrome over the DevTools Protocol so the page can be
 * screenshotted, scrolled, clicked and keyboard-tested with real rendering
 * (and real console/error capture) — no extra npm dependencies.
 *
 *   node scripts/shot.mjs <url> <out.png> [width] [height] [action]
 */
import { writeFileSync } from 'node:fs';

const [, , url = 'http://localhost:5173/', out = 'shot.png', w = '1440', h = '900', action = ''] = process.argv;

const PORT = process.env.CDP_PORT || '9222';
const sleep = (ms) => new Promise((r) => setTimeout(r, ms));

async function main() {
  const target = await (
    await fetch(`http://127.0.0.1:${PORT}/json/new?${encodeURIComponent(url)}`, { method: 'PUT' })
  ).json();

  const ws = new WebSocket(target.webSocketDebuggerUrl);
  let id = 0;
  const pending = new Map();
  const logs = [];

  const send = (method, params = {}) =>
    new Promise((resolve) => {
      const msgId = ++id;
      pending.set(msgId, resolve);
      ws.send(JSON.stringify({ id: msgId, method, params }));
    });

  ws.addEventListener('message', (event) => {
    const msg = JSON.parse(event.data);
    if (msg.id && pending.has(msg.id)) {
      pending.get(msg.id)(msg.result);
      pending.delete(msg.id);
    }
    if (msg.method === 'Runtime.consoleAPICalled' && ['error', 'warning'].includes(msg.params.type)) {
      logs.push(`console.${msg.params.type}: ${msg.params.args.map((a) => a.value ?? a.description).join(' ')}`);
    }
    if (msg.method === 'Runtime.exceptionThrown') {
      logs.push(`exception: ${msg.params.exceptionDetails.text} ${msg.params.exceptionDetails.exception?.description || ''}`);
    }
    if (msg.method === 'Log.entryAdded' && msg.params.entry.level === 'error') {
      logs.push(`log: ${msg.params.entry.text} ${msg.params.entry.url || ''}`);
    }
  });

  await new Promise((r) => ws.addEventListener('open', r));

  await send('Page.enable');
  await send('Runtime.enable');
  await send('Log.enable');
  await send('Emulation.setDeviceMetricsOverride', {
    width: Number(w),
    height: Number(h),
    deviceScaleFactor: 1,
    mobile: Number(w) < 500,
  });
  await send('Page.navigate', { url });
  await send('Page.bringToFront').catch(() => {});
  await sleep(4500);

  if (action === 'keyboard') {
    /* Tab to the first experience header, then activate it with Enter. */
    await send('Runtime.evaluate', {
      expression: `document.querySelector('#experience').scrollIntoView({block:'start'}); document.getElementById('experience-header-plat-del').focus();`,
    });
    await sleep(400);
  }

  if (action === 'open') {
    await send('Runtime.evaluate', {
      expression: `document.getElementById('experience-header-plat-del').click()`,
    });
    await sleep(1200);
  }

  if (action === 'switch') {
    /* Open the first card, then open the third — the first must collapse. */
    await send('Runtime.evaluate', {
      expression: `document.getElementById('experience-header-plat-del').click()`,
    });
    await sleep(900);
    await send('Runtime.evaluate', {
      expression: `document.getElementById('experience-header-independent').click()`,
    });
    await sleep(1200);
  }

  await send('Runtime.evaluate', {
    expression:
      action === 'open' || action === 'panel'
        ? `document.getElementById('experience-panel-plat-del').scrollIntoView({block:'center'})`
        : action === 'top'
          ? `window.scrollTo(0,0)`
          : `document.querySelector('#experience').scrollIntoView({block:'start'})`,
  });
  await sleep(1200);

  const shot = await send('Page.captureScreenshot', { format: 'png' });
  writeFileSync(out, Buffer.from(shot.data, 'base64'));

  const metrics = await send('Runtime.evaluate', {
    expression: `JSON.stringify({
      docWidth: document.documentElement.scrollWidth,
      innerWidth: window.innerWidth,
      heroOpacity: getComputedStyle(document.querySelector('#top h1').parentElement).opacity,
      cards: [...document.querySelectorAll('[id^=experience-header-]')].map(b => b.getAttribute('aria-expanded')),
      hasPanel: !!document.getElementById('experience-panel-plat-del'),
    })`,
    returnByValue: true,
  });

  console.log('METRICS', metrics.result?.value);
  console.log('LOGS', logs.length ? logs.join('\n') : 'clean');

  await fetch(`http://127.0.0.1:${PORT}/json/close/${target.id}`);
  ws.close();
}

main().catch((err) => {
  console.error('FAILED', err);
  process.exit(1);
});