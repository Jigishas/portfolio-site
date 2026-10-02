/**
 * Dev-only a11y / interaction check (not part of the build).
 *
 * Verifies the experience accordion with real keyboard input:
 * Enter + Space activation, Tab order, visible focus rings, per-card
 * expansion, single-open behaviour and prefers-reduced-motion.
 *
 *   node scripts/a11y-check.mjs [url]
 */
import { writeFileSync } from 'node:fs';

const [, , url = 'http://localhost:5173/'] = process.argv;
const PORT = process.env.CDP_PORT || '9222';
const sleep = (ms) => new Promise((r) => setTimeout(r, ms));
const results = [];
const check = (name, pass, info = '') => {
  results.push({ name, pass, info });
  console.log(`${pass ? 'PASS' : 'FAIL'}  ${name}${info ? ` \u2014 ${info}` : ''}`);
};

async function main() {
  const target = await (
    await fetch(`http://127.0.0.1:${PORT}/json/new?${encodeURIComponent(url)}`, { method: 'PUT' })
  ).json();

  const ws = new WebSocket(target.webSocketDebuggerUrl);
  let id = 0;
  const pending = new Map();
  /* Only real errors count — framer-motion emits an informational
     reduced-motion notice as a console *warning*, which is not a defect. */
  const errors = [];

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
    if (msg.method === 'Runtime.consoleAPICalled' && msg.params.type === 'error') {
      errors.push(`console.error: ${msg.params.args.map((a) => a.value ?? a.description).join(' ')}`);
    }
    if (msg.method === 'Runtime.exceptionThrown') {
      errors.push(`exception: ${msg.params.exceptionDetails.text}`);
    }
  });

  await new Promise((r) => ws.addEventListener('open', r));
  await send('Page.enable');
  await send('Runtime.enable');
  await send('Emulation.setDeviceMetricsOverride', { width: 1440, height: 900, deviceScaleFactor: 1, mobile: false });
  await send('Page.navigate', { url });
  await sleep(4500);

  const evalJs = async (expression) => {
    const r = await send('Runtime.evaluate', { expression, returnByValue: true, awaitPromise: true });
    if (r.exceptionDetails) throw new Error(r.exceptionDetails.text + ' :: ' + expression);
    return r.result?.value;
  };

  /* Real key events: Enter activates on keydown, Space on keyup. */
  const dispatch = (params) => send('Input.dispatchKeyEvent', params);
  const pressEnter = async () => {
    await dispatch({ type: 'keyDown', key: 'Enter', code: 'Enter', windowsVirtualKeyCode: 13, nativeVirtualKeyCode: 13, text: '\r', unmodifiedText: '\r' });
    await dispatch({ type: 'keyUp', key: 'Enter', code: 'Enter', windowsVirtualKeyCode: 13, nativeVirtualKeyCode: 13 });
  };
  const pressSpace = async () => {
    await dispatch({ type: 'rawKeyDown', key: ' ', code: 'Space', windowsVirtualKeyCode: 32, nativeVirtualKeyCode: 32 });
    await dispatch({ type: 'keyUp', key: ' ', code: 'Space', windowsVirtualKeyCode: 32, nativeVirtualKeyCode: 32 });
  };
  const pressTab = async () => {
    await dispatch({ type: 'rawKeyDown', key: 'Tab', code: 'Tab', windowsVirtualKeyCode: 9, nativeVirtualKeyCode: 9 });
    await dispatch({ type: 'keyUp', key: 'Tab', code: 'Tab', windowsVirtualKeyCode: 9, nativeVirtualKeyCode: 9 });
  };

  const headers = ['plat-del', 'londiani-hospital', 'independent'];
  const expanded = () =>
    evalJs(`JSON.stringify([...document.querySelectorAll('[id^=experience-header-]')].map(b=>b.getAttribute('aria-expanded')))`);
  const focusId = () => evalJs(`document.activeElement && (document.activeElement.id || document.activeElement.tagName)`);
  /* ---------- 1. Enter activates the first card ---------- */
  await evalJs(`document.getElementById('experience-header-plat-del').focus(); window.scrollTo(0,0);`);
  await sleep(200);
  await pressEnter();
  await sleep(900);
  check('Enter expands card 1', JSON.parse(await expanded())[0] === 'true', await expanded());
  check('aria-controls target exists', await evalJs(`!!document.getElementById('experience-panel-plat-del')`));

  /* ---------- 2. Enter again collapses ---------- */
  await pressEnter();
  await sleep(900);
  check('Enter again collapses card 1', JSON.parse(await expanded())[0] === 'false', await expanded());
  check('Panel removed after collapse', !(await evalJs(`!!document.getElementById('experience-panel-plat-del')`)));

  /* ---------- 3. Space activates card 2 ---------- */
  await evalJs(`document.getElementById('experience-header-londiani-hospital').focus();`);
  await pressSpace();
  await sleep(900);
  const afterSpace = JSON.parse(await expanded());
  check('Space expands card 2', afterSpace[1] === 'true', JSON.stringify(afterSpace));
  check('Only one card open (Space)', afterSpace.filter((v) => v === 'true').length === 1);

  /* ---------- 4. Card 3 by keyboard, card 2 collapses ---------- */
  await evalJs(`document.getElementById('experience-header-independent').focus();`);
  await pressEnter();
  await sleep(900);
  const afterEnter3 = JSON.parse(await expanded());
  check('Card 3 opens via Enter', afterEnter3[2] === 'true', JSON.stringify(afterEnter3));
  check(
    'Card 2 auto-collapsed (single-open)',
    afterEnter3[1] === 'false' && afterEnter3.filter((v) => v === 'true').length === 1
  );

  /* ---------- 5. Every card opens individually by click ---------- */
  for (const [i, hid] of headers.entries()) {
    await evalJs(`document.getElementById('experience-header-${hid}').click();`);
    await sleep(850);
    const ex = JSON.parse(await expanded());
    const only = ex[i] === 'true' && ex.filter((v) => v === 'true').length === 1;
    const panel = await evalJs(
      `(()=>{const p=document.getElementById('experience-panel-${hid}');return p?JSON.stringify({role:p.getAttribute('role'),labelled:p.getAttribute('aria-labelledby'),labels:p.querySelectorAll('h4').length}):'missing';})()`
    );
    check(`Card ${i + 1} opens alone`, only && panel !== 'missing', panel);
  }
  /* ---------- 6. In-panel Collapse button ---------- */
  await evalJs(`document.getElementById('experience-header-plat-del').click();`);
  await sleep(850);
  await evalJs(`document.getElementById('experience-header-independent').click();`);
  await sleep(850);
  const collapseBtn = await evalJs(
    `(()=>{const p=document.getElementById('experience-panel-independent');const b=[...p.querySelectorAll('button')].find(x=>x.textContent.trim()==='Collapse');if(!b)return false;b.click();return true;})()`
  );
  await sleep(850);
  check(
    'In-panel Collapse button closes card',
    collapseBtn === true && JSON.parse(await expanded())[2] === 'false',
    await expanded()
  );

  /* ---------- 7. Tab order through the three headers ---------- */
  /* Seed focus on the last focusable element BEFORE the first card header,
     then tab forward and record every experience header we reach. */
  await evalJs(
    `(()=>{const all=[...document.querySelectorAll('a[href],button:not([disabled])')];const i=all.findIndex(el=>el.id==='experience-header-plat-del');const prev=all[i-1];if(prev)prev.focus();return i;})()`
  );
  await sleep(300);
  const seen = [];
  for (let i = 0; i < 40 && seen.length < 3; i++) {
    await pressTab();
    const f = await focusId();
    if (f && f.startsWith('experience-header-')) seen.push(f);
  }
  check(
    'Tab reaches all 3 headers in DOM order',
    seen.length === 3 &&
      seen[0] === 'experience-header-plat-del' &&
      seen[2] === 'experience-header-independent',
    JSON.stringify(seen)
  );

  /* ---------- 8. Visible focus ring on the card header itself ---------- */
  await evalJs(
    `(()=>{const all=[...document.querySelectorAll('a[href],button:not([disabled])')];const i=all.findIndex(el=>el.id==='experience-header-plat-del');const prev=all[i-1];if(prev)prev.focus();})()`
  );
  await pressTab();
  await sleep(300);
  await evalJs(`document.getElementById('experience-header-plat-del').scrollIntoView({block:'center'});`);
  await sleep(700);
  const ring = await evalJs(
    `(()=>{const el=document.activeElement;const s=getComputedStyle(el);return JSON.stringify({id:el.id,fv:el.matches(':focus-visible'),outline:s.outlineWidth,style:s.outlineStyle});})()`
  );
  const ringObj = JSON.parse(ring);
  check(
    'Focus-visible ring on card header',
    ringObj.id === 'experience-header-plat-del' &&
      ringObj.fv === true &&
      parseFloat(ringObj.outline) > 0 &&
      ringObj.style === 'solid',
    ring
  );
  const shotFocus = await send('Page.captureScreenshot', { format: 'png' });
  writeFileSync('shot-focus.png', Buffer.from(shotFocus.data, 'base64'));
  /* ---------- 9. prefers-reduced-motion ---------- */
  await send('Emulation.setEmulatedMedia', { features: [{ name: 'prefers-reduced-motion', value: 'reduce' }] });
  await send('Page.navigate', { url });
  await sleep(4000);
  check(
    'Reduced-motion media query active',
    (await evalJs(`window.matchMedia('(prefers-reduced-motion: reduce)').matches`)) === true
  );

  await evalJs(
    `document.querySelector('#experience').scrollIntoView(); document.getElementById('experience-header-plat-del').click();`
  );
  await sleep(700);
  const rmPanel = await evalJs(
    `(()=>{const p=document.getElementById('experience-panel-plat-del');if(!p)return 'missing';const r=p.getBoundingClientRect();return JSON.stringify({h:Math.round(r.height),op:getComputedStyle(p).opacity});})()`
  );
  check('Card still expands with reduced motion', rmPanel !== 'missing' && JSON.parse(rmPanel).h > 100, rmPanel);
  check('Reduced-motion aria-expanded correct', JSON.parse(await expanded())[0] === 'true', await expanded());

  const shot = await send('Page.captureScreenshot', { format: 'png' });
  writeFileSync('shot-reduced.png', Buffer.from(shot.data, 'base64'));

  /* ---------- 10. Overflow + console health ---------- */
  const overflow = await evalJs(`JSON.stringify({doc:document.documentElement.scrollWidth,win:window.innerWidth})`);
  const ov = JSON.parse(overflow);
  check('No horizontal overflow', ov.doc <= ov.win + 1, overflow);
  check('No console errors', errors.length === 0, errors.join(' | ') || 'clean');

  const failed = results.filter((r) => !r.pass);
  console.log(`\n${results.length - failed.length}/${results.length} checks passed`);
  if (failed.length) console.log('FAILURES:\n' + failed.map((f) => ` - ${f.name}: ${f.info}`).join('\n'));

  await fetch(`http://127.0.0.1:${PORT}/json/close/${target.id}`);
  ws.close();
  process.exit(failed.length ? 1 : 0);
}

main().catch((err) => {
  console.error('FAILED', err);
  process.exit(1);
});