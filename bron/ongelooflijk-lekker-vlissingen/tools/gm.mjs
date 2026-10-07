// Google-profiel: Over, reviews (nieuwste eerst, uitgeklapt) naar bron/google. Cookiemelding: alles afwijzen.
import { chromium } from 'playwright'; import fs from 'node:fs';
const b = await chromium.launch({ channel: 'chrome', args: ['--headless=new', '--disable-blink-features=AutomationControlled'] });
const ctx = await b.newContext({ locale: 'nl-NL', userAgent: 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/141.0.0.0 Safari/537.36', viewport: { width: 1400, height: 1000 } });
const p = await ctx.newPage();
await p.goto('https://www.google.com/maps/place/Ongelooflijk+Lekker/@51.4443539,3.5742335,17z/data=!3m1!4b1!4m6!3m5!1s0x47c499ec251135e9:0x6dbad1471cb979b9!8m2!3d51.4443539!4d3.5742335!16s%2Fg%2F11c6mcwdt9?hl=nl', { waitUntil: 'load', timeout: 45000 }).catch(() => {});
await p.waitForTimeout(2500);
const r = p.locator('button:has-text("Alles afwijzen")').first(); if (await r.count()) { await r.click(); await p.waitForTimeout(4000); }
await p.waitForTimeout(3000);
await p.screenshot({ path: 'bron/google/g1.png' });
// Over
await p.locator('[role=tab][aria-label^="Over "]').first().click().catch(() => console.log('geen over'));
await p.waitForTimeout(2500);
fs.writeFileSync('bron/google/over.txt', await p.locator('[role=main]').first().innerText());
// Reviews
await p.locator('[role=tab][aria-label^="Reviews"]').first().click().catch(() => console.log('geen reviews-tab'));
await p.waitForTimeout(3000);
await p.locator('button[aria-label="Reviews sorteren"], button:has-text("Sorteren")').first().click().catch(() => console.log('geen sorteer'));
await p.waitForTimeout(1500);
await p.locator('[role=menuitemradio]:has-text("Nieuwste")').first().click().catch(() => console.log('geen nieuwste'));
await p.waitForTimeout(3000);
for (let i = 0; i < 30; i++) {
  await p.evaluate(() => document.querySelectorAll('div').forEach((d) => { if (d.scrollHeight > d.clientHeight + 50 && d.clientHeight > 300) d.scrollBy(0, 2000); }));
  await p.waitForTimeout(700);
}
await p.evaluate(() => document.querySelectorAll('button').forEach((x) => { if (/^Meer$/.test(x.innerText.trim()) || x.getAttribute('aria-label') === 'Meer weergeven') x.click(); }));
await p.waitForTimeout(1500);
const revs = await p.evaluate(() => [...document.querySelectorAll('[data-review-id].jftiEf, div.jftiEf')].map((e) => {
  const naam = e.querySelector('.d4r55')?.innerText || '';
  const sterren = e.querySelector('[role=img][aria-label*="ster"]')?.getAttribute('aria-label') || '';
  const wanneer = e.querySelector('.rsqaWe')?.innerText || '';
  const tekst = e.querySelector('.wiI7pd')?.innerText || '';
  const antw = e.querySelector('.CDe7pd')?.innerText || '';
  const fotos = [...e.querySelectorAll('button[style*="googleusercontent"]')].length;
  return `${naam} | ${sterren} | ${wanneer} | foto's ${fotos}\n${tekst}${antw ? '\n  ANTWOORD: ' + antw.replace(/\n/g, ' ') : ''}`;
}));
fs.writeFileSync('bron/google/reviews.txt', revs.join('\n\n'));
console.log('reviews', revs.length);
await p.screenshot({ path: 'bron/google/g2.png' });
await b.close();
