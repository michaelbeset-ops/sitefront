import { chromium } from 'playwright'; import fs from 'node:fs';
const b = await chromium.launch({ channel: 'chrome', args: ['--headless=new','--disable-blink-features=AutomationControlled'] });
const ctx = await b.newContext({ locale: 'nl-NL', userAgent: 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/141.0.0.0 Safari/537.36', viewport: { width: 1400, height: 1000 } });
const p = await ctx.newPage();
await p.goto('https://www.google.com/maps/place/Openhaardenwerk/@51.4346388,5.493014,17z/data=!3m1!4b1!4m6!3m5!1s0x47c6d8e5615bcd33:0x2250c45cb8b0cbb7!8m2!3d51.4346388!4d5.493014!16s%2Fg%2F1tdy3pvx?hl=nl', { waitUntil: 'load', timeout: 45000 }).catch(()=>{});
await p.waitForTimeout(2500);
const r = p.locator('button:has-text("Alles afwijzen")').first(); if (await r.count()) { await r.click(); await p.waitForTimeout(5000); }
await p.waitForTimeout(3000);
await p.locator('[role=tab][aria-label^="Reviews voor"]').first().click({ timeout: 8000 }); await p.waitForTimeout(3000);
try { await p.locator('button[aria-label*="orteren"]').first().click({ timeout: 4000 }); await p.waitForTimeout(1200); await p.locator('[role=menuitemradio]').nth(1).click({ timeout: 3000 }); await p.waitForTimeout(3000); console.log('sorted newest'); } catch (e) { console.log('no sort'); }
for (let i = 0; i < 20; i++) { await p.evaluate(() => { const el = [...document.querySelectorAll('div')].find(d => d.scrollHeight > d.clientHeight + 200 && d.clientHeight>300 && d.querySelector('[data-review-id]')); if (el) el.scrollBy(0, 4000); }); await p.waitForTimeout(700); }
for (const m of await p.locator('button.w8nwRe').all()) { try { await m.click({ timeout: 800 }); await p.waitForTimeout(200);} catch {} }
await p.waitForTimeout(800);
const revs = await p.evaluate(() => { const seen = new Set(); return [...document.querySelectorAll('div.jftiEf[data-review-id]')].map(e => { const st = e.querySelector('[role=img][aria-label*="ster"]')?.getAttribute('aria-label') || ''; return st + ' @@ ' + e.innerText.replace(/\n\s*\n/g, '\n'); }).filter(t => !seen.has(t) && seen.add(t)); });
fs.writeFileSync('bron/google/reviews.txt', revs.join('\n=====\n'));
const head = await p.evaluate(() => document.querySelector('[role=main]')?.innerText.slice(0, 1500));
fs.writeFileSync('bron/google/reviews-kop.txt', head);
console.log('reviews', revs.length); await b.close();
