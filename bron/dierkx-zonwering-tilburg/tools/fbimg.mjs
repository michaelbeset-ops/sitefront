import { chromium } from 'playwright'; import fs from 'node:fs';
const b = await chromium.launch(); const ctx = await b.newContext({ locale: 'nl-NL', viewport: { width: 1300, height: 1400 }, userAgent:'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/141.0.0.0 Safari/537.36' }); const p = await ctx.newPage();
const all = new Map();
for (const u of ['https://www.facebook.com/DierkxZonweringen/', 'https://www.facebook.com/DierkxZonweringen/photos']) {
await p.goto(u, { waitUntil: 'domcontentloaded', timeout: 40000 }).catch(()=>{});
await p.waitForTimeout(5000);
for (const t of ['Optionele cookies afwijzen','Alleen essentiële cookies toestaan']) { const r=p.locator(`[role=button]:has-text("${t}")`).first(); if (await r.count()) { await r.click().catch(()=>{}); await p.waitForTimeout(2000);} }
for (let i=0;i<8;i++){ const c = p.locator('[aria-label="Sluiten"]').first(); if (await c.count()) await c.click().catch(()=>{}); await p.mouse.wheel(0,1400); await p.waitForTimeout(1500);
 (await p.evaluate(()=>[...document.querySelectorAll('img')].filter(i=>i.naturalWidth>250&&/fbcdn/.test(i.src)).map(i=>[i.src,i.naturalWidth+'x'+i.naturalHeight]))).forEach(([s,w])=>all.set(s.split('?')[0].split('/').pop(),[s,w])); }
await p.screenshot({ path: 'bron/soc/fb-'+(u.includes('photos')?'ph':'home')+'.png' });
}
let n=0; const out=[];
for (const [k,[s,w]] of all) { n++; const r = await fetch(s); fs.writeFileSync(`bron/soc/fb-${String(n).padStart(2,'0')}.jpg`, Buffer.from(await r.arrayBuffer())); out.push(`fb-${n} ${w} ${s}`); }
fs.writeFileSync('bron/soc/fbimgs.txt', out.join('\n')); console.log(n); await b.close();
