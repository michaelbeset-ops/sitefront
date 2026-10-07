import { chromium } from 'playwright'; import fs from 'node:fs';
const b = await chromium.launch(); const ctx = await b.newContext({ locale: 'nl-NL', viewport: { width: 1300, height: 1400 }, userAgent:'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/141.0.0.0 Safari/537.36' }); const p = await ctx.newPage();
const all = new Set();
for (const u of ['https://www.facebook.com/despellenwinkel/photos', 'https://www.facebook.com/despellenwinkel/photos_by']) {
await p.goto(u, { waitUntil: 'domcontentloaded', timeout: 40000 }).catch(()=>{});
await p.waitForTimeout(5000);
for (const t of ['Optionele cookies afwijzen','Alleen essentiële cookies toestaan','Optionele cookies weigeren']) { const r=p.locator(`[role=button]:has-text("${t}")`).first(); if (await r.count()) { await r.click().catch(()=>{}); await p.waitForTimeout(2000);} }
const cl = p.locator('[aria-label="Sluiten"], [aria-label="Close"]').first(); if (await cl.count()) await cl.click().catch(()=>{});
for (let i=0;i<8;i++){ await p.mouse.wheel(0,1500); await p.waitForTimeout(1500); const c = p.locator('[aria-label="Sluiten"]').first(); if (await c.count()) await c.click().catch(()=>{}); }
(await p.evaluate(()=>[...document.querySelectorAll('img')].filter(i=>i.naturalWidth>150).map(i=>i.src))).forEach(x=>all.add(x));
await p.screenshot({ path: 'bron/soc/fbph.png' });
}
fs.writeFileSync('bron/soc/fbph-imgs.txt', [...all].join('\n')); console.log(all.size);
await b.close();
