import { chromium } from 'playwright';
const base = process.argv[2] || 'http://localhost:4407/sitefront/genieten-vianen/';
const b = await chromium.launch();
for (const [path, name] of [['', 'home'], ['privacy/', 'privacy']]) for (const w of [1440, 390, 320]) {
  const ctx = await b.newContext({ viewport: { width: w, height: w > 500 ? 900 : 844 } }); const p = await ctx.newPage();
  await p.goto(base + path, { waitUntil: 'networkidle' });
  if (name === 'home' && w !== 320) await p.screenshot({ path: `shots/view-${w}.png` });
  const h = await p.evaluate(() => document.documentElement.scrollHeight);
  for (let y = 0; y < h; y += 500) { await p.evaluate((y) => window.scrollTo(0, y), y); await p.waitForTimeout(120); }
  await p.waitForTimeout(1300); await p.evaluate(() => window.scrollTo(0, 0)); await p.waitForTimeout(300);
  const sw = await p.evaluate(() => document.documentElement.scrollWidth);
  await p.screenshot({ path: `shots/${name}-${w}.png`, fullPage: true });
  console.log(name, w, 'scrollWidth', sw, 'hoogte', h, sw > w ? 'SCROLLT!' : 'ok');
  await ctx.close();
}
await b.close();
