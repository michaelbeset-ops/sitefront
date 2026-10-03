import { chromium } from 'playwright';
const b = await chromium.launch();
for (const w of [320, 390]) {
  const p = await (await b.newContext({ viewport: { width: w, height: 800 } })).newPage();
  await p.goto('http://localhost:4711/sitefront/wk-rijopleidingen-hia/' + (process.argv[2] || ''), { waitUntil: 'networkidle' });
  const r = await p.evaluate((w) => [...document.querySelectorAll('body *')].filter(e => { const b = e.getBoundingClientRect(); return b.right > w + 0.5 && b.width > 0; }).slice(0, 12).map(e => e.tagName + '.' + String(e.className).slice(0, 70) + ' ' + Math.round(e.getBoundingClientRect().right)), w);
  console.log(w, r);
}
await b.close();
