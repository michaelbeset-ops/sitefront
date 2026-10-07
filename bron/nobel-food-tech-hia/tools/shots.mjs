import { chromium } from 'playwright';
const base = 'http://localhost:4438/sitefront/nobel-food-tech-hia/';
const tag = process.argv[2] || 'r1';
const b = await chromium.launch();
for (const [w, h, n] of [[1440, 900, '1440'], [390, 844, '390'], [320, 640, '320']]) {
  const c = await b.newContext({ viewport: { width: w, height: h }, isMobile: w < 500, hasTouch: w < 500, deviceScaleFactor: 1 });
  const p = await c.newPage();
  await p.goto(base, { waitUntil: 'networkidle' });
  await p.waitForTimeout(800);
  await p.screenshot({ path: `shots/${tag}-view-${n}.png` });
  for (let y = 0; y < 14000; y += 500) { await p.evaluate((y) => scrollTo(0, y), y); await p.waitForTimeout(90); }
  await p.waitForTimeout(1200); await p.evaluate(() => scrollTo(0, 0)); await p.waitForTimeout(300);
  const m = await p.evaluate(() => ({ sw: document.documentElement.scrollWidth, H: document.documentElement.scrollHeight,
    over: [...document.querySelectorAll('body *')].filter(e => { const r = e.getBoundingClientRect(); return r.width && r.right > innerWidth + 1; }).slice(0, 5).map(e => e.tagName + '.' + e.className.toString().slice(0, 40)) }));
  console.log(n, JSON.stringify(m));
  await p.screenshot({ path: `shots/${tag}-full-${n}.png`, fullPage: true });
  await c.close();
}
await b.close();
