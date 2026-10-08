import { chromium } from 'playwright'; import fs from 'node:fs';
const b = await chromium.launch(); const ctx = await b.newContext({ locale: 'nl-NL', viewport: { width: 1300, height: 1400 }, userAgent:'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/141.0.0.0 Safari/537.36' }); const p = await ctx.newPage();
await p.goto('https://www.facebook.com/506685306508794', { waitUntil: 'domcontentloaded', timeout: 40000 }).catch(()=>{});
await p.waitForTimeout(5000);
for (const t of ['Optionele cookies afwijzen','Alleen essentiële cookies toestaan','Optionele cookies weigeren']) { const r=p.locator(`[role=button]:has-text("${t}")`).first(); if (await r.count()) { await r.click().catch(()=>{}); await p.waitForTimeout(2000);} }
const cl = p.locator('[aria-label="Sluiten"]').first(); if (await cl.count()) await cl.click().catch(()=>{});
for (let i=0;i<4;i++){ await p.mouse.wheel(0,1200); await p.waitForTimeout(1500); }
fs.writeFileSync('bron/soc/fb.txt', p.url()+'\n'+await p.evaluate(()=>document.body.innerText));
await p.screenshot({ path: 'bron/soc/fb.png' }); await b.close();
