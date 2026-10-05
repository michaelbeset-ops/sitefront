import { chromium } from 'playwright'; import fs from 'node:fs';
const [url, tag] = process.argv.slice(2);
const b = await chromium.launch();
const ctx = await b.newContext({ locale: 'nl-NL', userAgent: 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/140.0.0.0 Safari/537.36', viewport: { width: 1400, height: 1000 } });
const p = await ctx.newPage();
await p.goto(url, { waitUntil: 'domcontentloaded' });
await p.waitForTimeout(3000);
if (p.url().includes('consent')) { await p.getByRole('button', { name: /Alles afwijzen|Reject all/ }).first().click(); await p.waitForTimeout(4000); }
await p.waitForTimeout(4000);
for (const sel of ['button:has-text("Meer reviews")', '[role=tab]:has-text("Reviews")']) { const l = p.locator(sel).first(); if (await l.count()) { await l.click().catch(()=>{}); await p.waitForTimeout(3500); break; } }
for (let i = 0; i < 25; i++) { await p.evaluate(() => { document.querySelectorAll('div').forEach(d => { if (d.scrollHeight > d.clientHeight + 50 && d.clientHeight > 200) d.scrollBy(0, 3000); }); }); await p.waitForTimeout(900); }
for (const m of await p.locator('button.w8nwRe, button[aria-label="Meer weergeven"], button:has-text("Meer")').all()) { try { await m.click({ timeout: 500 }); } catch {} }
await p.waitForTimeout(1000);
const revs = await p.evaluate(() => [...document.querySelectorAll('div.jftiEf, div[data-review-id][aria-label]')].map(e => (e.querySelector('[role=img][aria-label*="ster"]')?.getAttribute('aria-label')||'') + ' @@ ' + (e.querySelector('.d4r55')?.innerText||e.getAttribute('aria-label')) + ' @@ ' + (e.querySelector('.rsqaWe')?.innerText||'') + ' @@ ' + (e.querySelector('.wiI7pd')?.innerText||'')));
const uniq = [...new Set(revs)];
fs.writeFileSync(`bron/google/${tag}-reviews-full.txt`, uniq.join('\n=====\n'));
console.log(tag, uniq.length); await b.close();
