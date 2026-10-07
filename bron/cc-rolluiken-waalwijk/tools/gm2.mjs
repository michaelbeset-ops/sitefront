import { chromium } from 'playwright'; import fs from 'node:fs';
const b = await chromium.launch({ channel: 'chrome', args: ['--headless=new','--disable-blink-features=AutomationControlled'] });
const ctx = await b.newContext({ locale: 'nl-NL', userAgent: 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/141.0.0.0 Safari/537.36', viewport: { width: 1400, height: 1000 } });
const p = await ctx.newPage();
await p.goto('https://www.google.com/maps/place/Cc+rolluiken/@51.6931377,5.0549551,17z/data=!3m1!4b1!4m6!3m5!1s0x47c6911ce52f6281:0x72376afb15c64d8a!8m2!3d51.6931377!4d5.0549551!16s%2Fg%2F11h_xmqsf2?hl=nl', { waitUntil: 'load', timeout: 45000 }).catch(()=>{});
await p.waitForTimeout(2500);
const r = p.locator('button:has-text("Alles afwijzen")').first(); if (await r.count()) { await r.click(); await p.waitForTimeout(5000); }
await p.getByRole('tab', { name: /Reviews/ }).first().click({ timeout: 8000 }); await p.waitForTimeout(3500);
const sort = p.locator('button[aria-label*="orteren"]').first(); console.log('sortbtn', await sort.count());
try { await sort.click({ timeout: 4000 }); await p.waitForTimeout(1200); await p.locator('[role=menuitemradio]').nth(1).click({ timeout: 3000 }); await p.waitForTimeout(3000); console.log('sorted newest'); } catch (e) { console.log('no sort'); }
for (let i = 0; i < 40; i++) {
  await p.evaluate(() => { const r = document.querySelector('[data-review-id]'); let el = r; while (el && !(el.scrollHeight > el.clientHeight + 100 && getComputedStyle(el).overflowY !== 'visible')) el = el.parentElement; if (el) el.scrollBy(0, 5000); });
  await p.waitForTimeout(900);
}
for (const m of await p.locator('button.w8nwRe').all()) { try { await m.click({ timeout: 500 }); } catch {} }
await p.waitForTimeout(800);
const revs = await p.evaluate(() => { const seen = new Set(); return [...document.querySelectorAll('div.jftiEf[data-review-id]')].map(e => { const st = e.querySelector('[role=img][aria-label*="ster"]')?.getAttribute('aria-label') || ''; return st + ' @@ ' + e.innerText.replace(/\n\s*\n/g, '\n'); }).filter(t => !seen.has(t) && seen.add(t)); });
fs.writeFileSync('bron/google/reviews.txt', revs.join('\n=====\n'));
console.log('reviews', revs.length); await b.close();
