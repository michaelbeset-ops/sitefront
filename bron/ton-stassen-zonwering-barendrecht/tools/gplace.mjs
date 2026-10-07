// Google Maps-profiel via headless Chromium; cookiemelding: alles afwijzen. Bewaart paneeltekst + reviews (nieuwste).
import { chromium } from 'playwright'; import fs from 'node:fs';
const b = await chromium.launch(); const ctx = await b.newContext({ userAgent: 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/141.0.0.0 Safari/537.36', locale: 'nl-NL', viewport: { width: 1400, height: 900 } }); const p = await ctx.newPage();
await p.goto('https://www.google.com/maps/search/Ton+Stassen+Zonwering+Barendrecht?hl=nl', { waitUntil: 'domcontentloaded' });
await p.waitForTimeout(2500);
if (p.url().includes('consent')) { await p.getByRole('button', { name: /Alles afwijzen|Reject all/ }).first().click(); await p.waitForTimeout(3500); }
await p.waitForTimeout(4000);
const feed = p.locator('a.hfpxzc'); if (await feed.count()) { console.log('lijst', await feed.count()); await feed.first().click(); await p.waitForTimeout(4000); }
await p.screenshot({ path: 'bron/google/paneel.png' });
const txt = await p.locator('div[role=main]').first().innerText().catch(() => '');
const info = await p.evaluate(() => [...document.querySelectorAll('[data-item-id],[aria-label]')].map(e => (e.getAttribute('data-item-id')||'') + ' :: ' + (e.getAttribute('aria-label')||'')).filter(s => /address|phone|authority|oloc|uur|Openingstijden|ster|review/i.test(s)).slice(0,60).join('\n'));
fs.writeFileSync('bron/google/paneel.txt', p.url() + '\n\n' + txt + '\n\n----\n' + info);
// reviews
const tab = p.getByRole('tab', { name: /Reviews/ }); if (await tab.count()) { await tab.first().click(); await p.waitForTimeout(3000);
  const sort = p.getByRole('button', { name: /Reviews sorteren|Sorteren/ }); if (await sort.count()) { await sort.first().click(); await p.waitForTimeout(1200); await p.getByRole('menuitemradio', { name: /Nieuwste/ }).first().click().catch(()=>{}); await p.waitForTimeout(2500); }
  for (let i = 0; i < 12; i++) { await p.mouse.move(300, 600); await p.mouse.wheel(0, 3000); await p.waitForTimeout(800); }
  for (const m of await p.locator('button:has-text("Meer")').all()) await m.click().catch(() => {});
  const rev = await p.evaluate(() => [...document.querySelectorAll('div[data-review-id].jftiEf')].map(r => [r.querySelector('.d4r55')?.textContent, r.querySelector('.kvMYJc')?.getAttribute('aria-label'), r.querySelector('.rsqaWe')?.textContent, r.querySelector('.wiI7pd')?.textContent, r.querySelector('.CDe7pd')?.innerText?.slice(0,400)].join(' | ')));
  fs.writeFileSync('bron/google/reviews.txt', rev.join('\n\n')); console.log('reviews', rev.length);
  await p.screenshot({ path: 'bron/google/reviews.png' });
}
await b.close();
