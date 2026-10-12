import { chromium } from 'playwright'; import fs from 'node:fs';
const OUT = 'bron/google/';
const PLACE = JSON.parse(fs.readFileSync(OUT + 'place.json')).PLACE;
const b = await chromium.launch({ args: ['--disable-blink-features=AutomationControlled'] });
const q = await (await b.newContext({ locale: 'nl-NL', viewport: { width: 1400, height: 1000 }, userAgent: 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/140.0.0.0 Safari/537.36' })).newPage();
await q.goto(PLACE, { waitUntil: 'domcontentloaded' }); await q.waitForTimeout(2000);
const k2 = q.locator('button:visible:has-text("Alles afwijzen")').first();
if (await k2.count()) { await k2.click(); await q.waitForTimeout(4000); }
await q.waitForSelector('h1'); await q.waitForTimeout(2500);
await q.locator('button:has-text("67 foto")').first().click();
await q.waitForTimeout(4000);
const s = new Map();
for (let i = 0; i < 80; i++) {
  await q.mouse.move(200, 600); await q.mouse.wheel(0, 700); await q.waitForTimeout(600);
  const u = await q.evaluate(() => [...document.querySelectorAll('[style*="googleusercontent"]')].map(e => ({ u: ((e.getAttribute('style') || '').match(/url\("?([^")]+)/) || [])[1], l: (e.closest('[aria-label]')||{}).getAttribute?.('aria-label') || '' })));
  u.forEach(x => x.u && s.set(x.u.split('=')[0], x.l));
}
// also open each photo to get uploader + date
const list = [...s.keys()].filter(x => /gps-cs-s|grass-cs|\/p\//.test(x));
console.log('alle', list.length);
fs.writeFileSync(OUT + 'fotos.json', JSON.stringify({ Alle: list }, null, 1));
await q.screenshot({ path: OUT + 'fotos.png' });
await b.close();
