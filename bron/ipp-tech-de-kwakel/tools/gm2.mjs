import { chromium } from 'playwright'; import fs from 'node:fs';
const b = await chromium.launch();
const ctx = await b.newContext({ locale: 'nl-NL', userAgent: 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/140.0.0.0 Safari/537.36', viewport: { width: 1400, height: 1000 } });
const p = await ctx.newPage();
await p.goto('https://www.google.com/maps/place/D%C3%A9+Spellenwinkel/@51.5974112,4.776737,17z/data=!3m1!4b1!4m6!3m5!1s0x47c6a03293f07dfd:0x4d94d986835170cb!8m2!3d51.5974112!4d4.776737!16s%2Fg%2F1tyktlqx?hl=nl', { waitUntil: 'domcontentloaded' });
await p.waitForTimeout(3000);
if (p.url().includes('consent')) { await p.getByRole('button', { name: /Alles afwijzen|Reject all/ }).first().click(); await p.waitForTimeout(5000); }
await p.waitForTimeout(3000);
// hours




await p.getByRole('tab', { name: /Reviews/ }).first().click({ timeout: 8000 }); await p.waitForTimeout(3000);
try { await p.locator('button[aria-label*="Reviews sorteren"], button[data-value="Sorteren"]').first().click({ timeout: 4000 }); await p.waitForTimeout(1200); await p.locator('[role=menuitemradio]').nth(1).click({ timeout: 3000 }); await p.waitForTimeout(3000); console.log('sorted newest'); } catch (e) { console.log('no sort', e.message.slice(0,80)); }
for (let i = 0; i < 60; i++) {
  await p.evaluate(() => { const el = document.querySelector('div[data-review-id]')?.closest('.m6QErb.DxyBCb') || [...document.querySelectorAll('div')].find(d => d.scrollHeight > d.clientHeight + 200 && d.querySelector('[data-review-id]')); if (el) el.scrollBy(0, 4000); });
  await p.waitForTimeout(700);
}
for (const m of await p.locator('button.w8nwRe, button:has-text("Meer")').all()) { try { await m.click({ timeout: 500 }); } catch {} }
await p.waitForTimeout(800);
const revs = await p.evaluate(() => { const seen = new Set(); return [...document.querySelectorAll('div.jftiEf[data-review-id], div[data-review-id].jftiEf')].map(e => { const st = e.querySelector('[role=img][aria-label*="ster"]')?.getAttribute('aria-label') || ''; return st + ' @@ ' + e.innerText.replace(/\n\s*\n/g, '\n'); }).filter(t => !seen.has(t) && seen.add(t)); });
fs.writeFileSync('bron/google/reviews.txt', revs.join('\n=====\n'));
console.log('reviews', revs.length); await b.close();

