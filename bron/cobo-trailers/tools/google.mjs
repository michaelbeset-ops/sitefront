// Google Maps-profiel ophalen (headless), consent "Alles afwijzen". Schrijft bron/google/place.json + screenshots.
import { chromium } from 'playwright'; import fs from 'node:fs';
const b = await chromium.launch();
const ctx = await b.newContext({ viewport: { width: 1440, height: 1000 }, locale: 'nl-NL' });
const p = await ctx.newPage();
await p.goto('https://www.google.com/maps/search/Cobo+Trailers+Rivelstraat+24+Wijk+en+Aalburg?hl=nl', { waitUntil: 'domcontentloaded' });
await p.waitForTimeout(2500);
const af = p.getByRole('button', { name: /Alles afwijzen/i });
if (await af.count()) { await af.first().click(); await p.waitForTimeout(4000); }
await p.waitForTimeout(4000);
if (await p.locator('a.hfpxzc').count()) { await p.locator('a.hfpxzc').first().click(); await p.waitForTimeout(4000); }
await p.screenshot({ path: 'bron/google/place.png' });
const out = { url: p.url(), main: await p.locator('div[role=main]').first().innerText().catch(() => '') };
// reviews-tab
const rt = p.getByRole('tab', { name: /Reviews/i });
if (await rt.count()) {
  await rt.first().click(); await p.waitForTimeout(3000);
  const srt = p.getByRole('button', { name: /Reviews sorteren|Sorteren/i });
  if (await srt.count()) { await srt.first().click(); await p.waitForTimeout(1000); const nw = p.getByRole('menuitemradio', { name: /Nieuwste/i }); if (await nw.count()) { await nw.first().click(); await p.waitForTimeout(3000); } }
  for (let i = 0; i < 8; i++) { await p.locator('div.m6QErb.DxyBCb').first().evaluate((e) => e.scrollBy(0, 3000)).catch(() => {}); await p.waitForTimeout(1200); }
  for (const m of await p.locator('button.w8nwRe').all()) await m.click().catch(() => {});
  await p.waitForTimeout(800);
  out.reviews = await p.$$eval('div.jftiEf', (els) => els.map((e) => ({ naam: e.getAttribute('aria-label'), sterren: e.querySelector('.kvMYJc')?.getAttribute('aria-label'), wanneer: e.querySelector('.rsqaWe')?.textContent, tekst: e.querySelector('.wiI7pd')?.textContent, eigenaar: e.querySelector('.CDe7pd')?.innerText })));
  await p.screenshot({ path: 'bron/google/reviews.png' });
}
fs.writeFileSync('bron/google/place.json', JSON.stringify(out, null, 1));
console.log(out.url); console.log(out.main.slice(0, 2500)); console.log(JSON.stringify(out.reviews, null, 1));
await b.close();
