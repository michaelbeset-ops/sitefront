import { chromium } from 'playwright'; import fs from 'node:fs';
const b = await chromium.launch();
const ctx = await b.newContext({ locale: 'nl-NL', timezoneId: 'Europe/Amsterdam', userAgent: 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/140.0.0.0 Safari/537.36', viewport: { width: 1400, height: 1000 } });
const p = await ctx.newPage();
await p.goto('https://www.google.com/maps/place/Repti-Farm/@51.8784676,4.6048765,17z/data=!3m1!4b1!4m6!3m5!1s0x47c42dbccd76e2cd:0x5e88647bd166684c!8m2!3d51.8784676!4d4.6048765!16s%2Fg%2F1tngpg19?hl=nl', { waitUntil: 'domcontentloaded' });
await p.waitForTimeout(3000);
if (p.url().includes('consent')) { await p.getByRole('button', { name: /Alles afwijzen|Reject all/ }).first().click(); await p.waitForTimeout(5000); }
await p.waitForTimeout(3000);
await p.getByRole('tab', { name: /Reviews/ }).first().click({ timeout: 8000 }); await p.waitForTimeout(3000);
await p.locator('button[aria-label="Reviews sorteren"]').first().click({ force: true }); await p.waitForTimeout(1500);
await p.locator('[role=menuitemradio]').nth(1).click({ force: true }); await p.waitForTimeout(3500);
for (let i = 0; i < 25; i++) { await p.evaluate(() => { document.querySelectorAll('div').forEach(d => { if (d.scrollHeight > d.clientHeight + 50 && d.clientHeight > 200) d.scrollBy(0, 3000); }); }); await p.waitForTimeout(900); }
for (const m of await p.locator('button:has-text("Meer")').all()) { try { await m.click({ timeout: 500 }); } catch {} }
await p.waitForTimeout(800);
const revs = await p.evaluate(() => [...document.querySelectorAll('div[data-review-id]')].filter(e => e.querySelector('[role=img][aria-label]')).map(e => { const imgs = [...e.querySelectorAll('button[style*="googleusercontent"]')].map(x => (x.style.backgroundImage.match(/url\("?(.*?)"?\)/)||[])[1]); return [...e.querySelectorAll('[role=img][aria-label]')].map(s=>s.getAttribute('aria-label')).join(',') + ' @@ ' + e.innerText.replace(/\n\s*\n/g, '\n') + (imgs.length ? '\nFOTO: ' + imgs.join('\nFOTO: ') : ''); }).filter((v,i,a)=>a.indexOf(v)===i));
fs.writeFileSync('bron/google/reviews-nieuwste.txt', revs.join('\n=====\n'));
console.log('nieuwste', revs.length);
await b.close();
