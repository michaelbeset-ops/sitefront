// Google Maps-profiel (headless, Chrome-UA), consent "Alles afwijzen". Schrijft bron/google/place.json + screenshots.
import { chromium } from 'playwright'; import fs from 'node:fs';
const b = await chromium.launch({ args: ['--disable-blink-features=AutomationControlled'] });
const ctx = await b.newContext({ locale: 'nl-NL', viewport: { width: 1440, height: 1000 }, userAgent: 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/140.0.0.0 Safari/537.36' });
const p = await ctx.newPage();
await p.goto('https://www.google.com/maps/search/Jan+Slooter+Mechanisatiecentrum+Schenkeldijk+36A+s-Gravendeel?hl=nl', { waitUntil: 'domcontentloaded' });
await p.waitForTimeout(2500);
const af = p.locator('button:visible:has-text("Alles afwijzen")').first();
if (await af.count()) { await af.click(); await p.waitForTimeout(4000); }
await p.waitForTimeout(4000);
if (await p.locator('a.hfpxzc').count()) { await p.locator('a.hfpxzc').first().click(); await p.waitForTimeout(4000); }
await p.screenshot({ path: 'bron/google/place.png' });
const out = { url: p.url(), main: await p.locator('div[role=main]').first().innerText().catch(() => '') };
// openingstijden uitklappen
const tb = p.locator('[aria-label*="openingstijden" i], [data-item-id="oh"]').first();
out.uren = await p.$$eval('table.eK4R0e tr, table tr', (rs) => rs.map((r) => r.innerText.replace(/\s+/g, ' '))).catch(() => []);
const rt = p.locator('button[role=tab]:has-text("Reviews")').first();
if (await rt.count()) {
  await rt.click(); await p.waitForTimeout(3000);
  const s = p.locator('button[aria-label*="Sorteren"], button:has-text("Sorteren")').first();
  if (await s.count()) { await s.click(); await p.waitForTimeout(900); await p.locator('[role=menuitemradio]:has-text("Nieuwste")').first().click().catch(() => {}); await p.waitForTimeout(2500); }
  for (let i = 0; i < 10; i++) { await p.locator('div.m6QErb.DxyBCb').first().evaluate((e) => e.scrollBy(0, 3000)).catch(() => {}); await p.waitForTimeout(1200); }
  for (const m of await p.locator('button.w8nwRe').all()) await m.click().catch(() => {});
  await p.waitForTimeout(800);
  out.reviews = await p.$$eval('div.jftiEf', (els) => els.map((e) => ({ naam: e.getAttribute('aria-label'), sterren: e.querySelector('.kvMYJc')?.getAttribute('aria-label'), wanneer: e.querySelector('.rsqaWe')?.textContent, tekst: e.querySelector('.wiI7pd')?.textContent, eigenaar: e.querySelector('.CDe7pd')?.innerText })));
  await p.screenshot({ path: 'bron/google/reviews.png' });
}
fs.writeFileSync('bron/google/place.json', JSON.stringify(out, null, 1));
console.log(out.url); console.log(out.main.slice(0, 3000)); console.log(JSON.stringify(out.reviews, null, 1));
await b.close();
