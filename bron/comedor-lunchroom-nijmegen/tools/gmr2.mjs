import { chromium } from 'playwright'; import fs from 'node:fs';
const [q, tag] = process.argv.slice(2);
const b = await chromium.launch();
const ctx = await b.newContext({ locale: 'nl-NL', userAgent: 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/140.0.0.0 Safari/537.36', viewport: { width: 1400, height: 1000 } });
const p = await ctx.newPage();
await p.goto('https://www.google.com/maps/search/'+encodeURIComponent(q)+'?hl=nl', { waitUntil: 'domcontentloaded' });
await p.waitForTimeout(3000);
if (p.url().includes('consent')) { await p.getByRole('button', { name: /Alles afwijzen|Reject all/ }).first().click(); await p.waitForTimeout(4000); }
await p.waitForTimeout(5000);
const art = p.locator('a.hfpxzc').first(); if (await art.count()) { await art.click(); await p.waitForTimeout(5000); }
const btns = await p.evaluate(()=>[...document.querySelectorAll('button,[role=tab]')].map(b=>(b.getAttribute('aria-label')||'')+'|'+b.innerText.trim().slice(0,40)).filter(s=>/review|Review|Meer/.test(s)));
console.log(btns.join('\n'));
let l = p.getByRole('tab', { name: /Reviews/ }).first();
if (!(await l.count())) l = p.locator('button:has-text("Meer reviews")').first();
await l.click().catch(e=>console.log('clickfail', e.message.slice(0,80))); await p.waitForTimeout(4000);
await p.screenshot({ path: `bron/google/${tag}-rv.png` });
for (let i = 0; i < 30; i++) { await p.evaluate(() => { document.querySelectorAll('div').forEach(d => { if (d.scrollHeight > d.clientHeight + 50 && d.clientHeight > 200) d.scrollBy(0, 3000); }); }); await p.waitForTimeout(900); }
for (const m of await p.locator('button:has-text("Meer")').all()) { try { await m.click({ timeout: 500 }); } catch {} }
await p.waitForTimeout(1000);
const revs = await p.evaluate(() => [...document.querySelectorAll('div[data-review-id]')].filter(e=>e.querySelector('[role=img][aria-label]')).map(e => [...e.querySelectorAll('[role=img][aria-label]')].map(s=>s.getAttribute('aria-label')).join(',') + ' @@ ' + e.innerText.replace(/\n\s*\n/g, '\n')));
const uniq = [...new Set(revs)];
fs.writeFileSync(`bron/google/${tag}-reviews-full.txt`, uniq.join('\n=====\n'));
console.log(tag, uniq.length); await b.close();
