import { chromium } from 'playwright';
const U = 'http://127.0.0.1:4521/sitefront/tilburg-mobile-bikes/';
const b = await chromium.launch({ channel: 'chrome' });
for (const [w, h] of [[1440, 900], [390, 844]]) {
  const p = await (await b.newContext({ viewport: { width: w, height: h }, isMobile: w < 500, hasTouch: w < 500, deviceScaleFactor: 1 })).newPage();
  await p.goto(U, { waitUntil: 'networkidle' });
  await p.waitForTimeout(800);
  await p.screenshot({ path: `shots/u1-view-${w}.png` });
  await p.evaluate(async () => { for (let y = 0; y < document.body.scrollHeight; y += 500) { scrollTo(0, y); await new Promise(r => setTimeout(r, 200)); } scrollTo(0, 0); });
  await p.evaluate(() => { document.querySelectorAll('.rijs').forEach(e => e.classList.add('in')); document.querySelectorAll('img').forEach(i => i.loading = 'eager'); });
  await p.waitForTimeout(1800);
  await p.screenshot({ path: `shots/u1-full-${w}.png`, fullPage: true });
  console.log(w, await p.evaluate(() => [document.documentElement.scrollWidth, document.body.scrollHeight]));
}
const p = await (await b.newContext({ viewport: { width: 320, height: 640 } })).newPage();
await p.goto(U, { waitUntil: 'networkidle' }); console.log(320, await p.evaluate(() => document.documentElement.scrollWidth));
await b.close();
