import { chromium } from 'playwright'; import fs from 'node:fs';
const b = await chromium.launch(); const p = await (await b.newContext({ locale: 'nl-NL', viewport: { width: 1300, height: 1400 }, userAgent:'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/141.0.0.0 Safari/537.36' })).newPage();
await p.goto('https://www.facebook.com/DierkxZonweringen/', { waitUntil: 'domcontentloaded' }); await p.waitForTimeout(5000);
for (const t of ['Optionele cookies afwijzen','Alleen essentiële cookies toestaan']) { const r=p.locator(`[role=button]:has-text("${t}")`).first(); if (await r.count()) { await r.click().catch(()=>{}); await p.waitForTimeout(2000);} }
for (let i=0;i<6;i++){ const c = p.locator('[aria-label="Sluiten"]').first(); if (await c.count()) await c.click().catch(()=>{}); await p.mouse.wheel(0,1400); await p.waitForTimeout(1500); }
fs.writeFileSync('bron/soc/fb.txt', await p.evaluate(()=>document.body.innerText)); await p.screenshot({path:'bron/soc/fb.png'}); await b.close();
