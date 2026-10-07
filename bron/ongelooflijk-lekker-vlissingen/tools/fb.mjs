import { chromium } from 'playwright'; import fs from 'node:fs';
const b = await chromium.launch(); const ctx = await b.newContext({ locale: 'nl-NL', viewport: { width: 1300, height: 1400 }, userAgent:'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/141.0.0.0 Safari/537.36' }); const p = await ctx.newPage();
const all = new Set(); const txt = [];
for (const u of ['https://www.facebook.com/p/Ongelooflijk-lekker-100063648844324/', 'https://www.facebook.com/profile.php?id=100063648844324&sk=photos']) {
await p.goto(u, { waitUntil: 'domcontentloaded', timeout: 40000 }).catch(()=>{});
await p.waitForTimeout(5000);
for (const t of ['Optionele cookies afwijzen','Alleen essentiële cookies toestaan','Optionele cookies weigeren']) { const r=p.locator(`[role=button]:has-text("${t}")`).first(); if (await r.count()) { await r.click().catch(()=>{}); await p.waitForTimeout(2000);} }
const cl = p.locator('[aria-label="Sluiten"], [aria-label="Close"]').first(); if (await cl.count()) await cl.click().catch(()=>{});
for (let i=0;i<10;i++){ await p.mouse.wheel(0,1500); await p.waitForTimeout(1500); const c = p.locator('[aria-label="Sluiten"]').first(); if (await c.count()) await c.click().catch(()=>{}); }
(await p.evaluate(()=>[...document.querySelectorAll('img')].filter(i=>i.naturalWidth>150).map(i=>i.src))).forEach(x=>all.add(x));
txt.push('==== '+u+'\n'+await p.evaluate(()=>document.body.innerText));
await p.screenshot({ path: `bron/soc/fb-${all.size}.png` });
}
fs.writeFileSync('bron/soc/fb-imgs.txt', [...all].join('\n')); fs.writeFileSync('bron/soc/fb.txt', txt.join('\n\n')); console.log(all.size);
let n=0; for (const u of all) { const r = await fetch(u); if (!r.ok) continue; const buf = Buffer.from(await r.arrayBuffer()); if (buf.length<12000) continue; n++; fs.writeFileSync(`bron/soc/fb-${String(n).padStart(2,'0')}.jpg`, buf); }
await b.close();
