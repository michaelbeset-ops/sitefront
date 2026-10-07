import { chromium } from 'playwright'; import fs from 'node:fs';
const b = await chromium.launch();
const ctx = await b.newContext({ locale: 'nl-NL', userAgent: 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/140.0.0.0 Safari/537.36', viewport: { width: 1400, height: 1000 } });
const p = await ctx.newPage();
await p.goto('https://www.google.com/maps/search/B.G.L.+Gold+%26+Silver+Kamp+13+Amersfoort?hl=nl', { waitUntil: 'domcontentloaded' });
await p.waitForTimeout(3000);
if (p.url().includes('consent')) { await p.getByRole('button', { name: /Alles afwijzen|Reject all/ }).first().click(); await p.waitForTimeout(5000); }
await p.waitForTimeout(4000);
const art = p.locator('a.hfpxzc').first(); if (await art.count()) { await art.click(); await p.waitForTimeout(5000); }
console.log(await p.evaluate(() => [...document.querySelectorAll('[role=tab]')].map(e => (e.getAttribute('aria-label')||'')+'/'+e.innerText).join(' ; ')));
await p.locator('[role=tab]', { hasText: 'Reviews' }).first().click({ timeout: 5000 }).catch(e=>console.log('tabfail'));
await p.waitForTimeout(3000);
const sorts = async (name) => {
  await p.locator('button[aria-label*="orteer"], button:has-text("Sorteren")').first().click({ timeout: 4000 }).catch(()=>console.log('nosortbtn'));
  await p.waitForTimeout(1200);
  await p.locator('[role=menuitemradio]', { hasText: name }).first().click({ timeout: 4000 }).catch(()=>console.log('nomenu'));
  await p.waitForTimeout(3000);
};
await sorts('Nieuwste');
for (let i = 0; i < 15; i++) { await p.evaluate(() => { document.querySelectorAll('div').forEach(d => { if (d.scrollHeight > d.clientHeight + 50 && d.clientHeight > 200) d.scrollBy(0, 3000); }); }); await p.waitForTimeout(900); }
await p.evaluate(() => document.querySelectorAll('button.w8nwRe, button[aria-label="Meer weergeven"], button[aria-expanded="false"][jsaction*="review.expandReview"]').forEach(b => b.click()));
for (const m of await p.locator('button:has-text("Meer")').all()) { try { await m.click({ timeout: 500 }); } catch {} }
await p.waitForTimeout(1000);
const revs = await p.evaluate(() => [...document.querySelectorAll('div[data-review-id]')].filter(e=>!e.parentElement.closest('[data-review-id]')).map(e => [...e.querySelectorAll('[role=img][aria-label]')].map(s=>s.getAttribute('aria-label')).join(',') + ' @@ ' + e.innerText.replace(/\n\s*\n/g, '\n').replace(/\n(Een like geven|Delen|\d+)\n/g,'\n')));
fs.writeFileSync('bron/google/reviews-nieuw.txt', [...new Set(revs)].join('\n=====\n'));
console.log('reviews', revs.length);
await p.screenshot({ path: 'bron/google/g2.png' });
await b.close();
