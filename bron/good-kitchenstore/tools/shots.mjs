import { chromium } from 'playwright';
const U = 'http://127.0.0.1:4527/sitefront/good-kitchenstore/';
const pre = process.argv[2] || '';
const b = await chromium.launch();
for (const [w, h] of [[1440, 900], [390, 844]]) {
  const p = await (await b.newContext({ viewport: { width: w, height: h }, isMobile: w < 500, hasTouch: w < 500, deviceScaleFactor: 1 })).newPage();
  await p.goto(U, { waitUntil: 'networkidle' });
  await p.waitForTimeout(800);
  await p.screenshot({ path: `shots/${pre}view-${w}.png` });
  await p.evaluate(async () => { for (let y = 0; y < document.body.scrollHeight; y += 400) { scrollTo(0, y); await new Promise(r => setTimeout(r, 250)); } scrollTo(0, 0); });
  await p.evaluate(() => document.querySelectorAll('.rijs').forEach(e => e.classList.add('in')));
  await p.waitForTimeout(3000);
  await p.screenshot({ path: `shots/${pre}full-${w}.png`, fullPage: true });
  console.log(w, await p.evaluate(() => [document.documentElement.scrollWidth, document.body.scrollHeight]));
}
const p = await (await b.newContext({ viewport: { width: 320, height: 640 } })).newPage();
await p.goto(U, { waitUntil: 'networkidle' }); console.log(320, await p.evaluate(() => [document.documentElement.scrollWidth, [...document.querySelectorAll('body *')].filter(e => e.getBoundingClientRect().right > 320.5).slice(0, 5).map(e => e.tagName + '.' + String(e.className).slice(0, 50)).join(' | ')]));
await b.close();
