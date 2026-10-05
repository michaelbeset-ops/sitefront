import { chromium } from 'playwright'; import fs from 'node:fs';
const b = await chromium.launch();
const ctx = await b.newContext({ locale: 'nl-NL', viewport: { width: 1280, height: 1800 }, userAgent: 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/140.0.0.0 Safari/537.36' });
const p = await ctx.newPage();
await p.goto('https://www.facebook.com/comedorlunchroom', { waitUntil: 'domcontentloaded' }); await p.waitForTimeout(5000);
for (const t of [/Optionele cookies weigeren|Alleen essentiële|Decline optional/]) { const x = p.getByRole('button', { name: t }).first(); if (await x.count()) { await x.click().catch(()=>{}); await p.waitForTimeout(2500);} }
const c = p.locator('[aria-label="Sluiten"]').first(); if (await c.count()) await c.click().catch(()=>{});
await p.waitForTimeout(1500);
for (let i=0;i<5;i++){ await p.mouse.wheel(0,1500); await p.waitForTimeout(1500); const c = p.locator('[aria-label="Sluiten"]').first(); if (await c.count()) await c.click().catch(()=>{}); }
await p.screenshot({ path: 'bron/fb/fb.png' });
fs.writeFileSync('bron/fb/fb.txt', p.url()+'\n'+await p.evaluate(()=>document.body.innerText));
await b.close();
