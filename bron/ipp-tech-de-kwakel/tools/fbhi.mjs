import { chromium } from 'playwright'; import fs from 'node:fs';
const want = process.argv.slice(2).map(Number); // indexes in fbu.txt (1-based)
const fbu = fs.readFileSync('bron/soc/fbu.txt','utf8').trim().split('\n');
const key = (u) => (u.match(/\/(\d+_\d+_\d+_n\.jpg)/)||[])[1];
const keys = new Map(want.map(i => [key(fbu[i-1]), i]));
const b = await chromium.launch(); const ctx = await b.newContext({ locale: 'nl-NL', viewport: { width: 1300, height: 1400 }, userAgent:'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/141.0.0.0 Safari/537.36' }); const p = await ctx.newPage();
const hrefs = new Map();
for (const u of ['https://www.facebook.com/despellenwinkel/photos', 'https://www.facebook.com/despellenwinkel/photos_by']) {
await p.goto(u, { waitUntil: 'domcontentloaded', timeout: 40000 }).catch(()=>{});
await p.waitForTimeout(5000);
for (const t of ['Optionele cookies afwijzen','Alleen essentiÃ«le cookies toestaan']) { const r=p.locator(`[role=button]:has-text("${t}")`).first(); if (await r.count()) { await r.click().catch(()=>{}); await p.waitForTimeout(2000);} }
for (let i=0;i<8;i++){ const c = p.locator('[aria-label="Sluiten"]').first(); if (await c.count()) await c.click().catch(()=>{}); await p.mouse.wheel(0,1500); await p.waitForTimeout(1500); }
const pairs = await p.evaluate(()=>[...document.querySelectorAll('a img')].map(i=>[i.src, i.closest('a').href]));
for (const [s,h] of pairs) { const k=(s.match(/\/(\d+_\d+_\d+_n\.jpg)/)||[])[1]; if (keys.has(k) && !hrefs.has(k)) hrefs.set(k,h); }
}
console.log('gevonden', hrefs.size, 'van', keys.size);
for (const [k,h] of hrefs) {
  await p.goto(h, { waitUntil: 'domcontentloaded' }).catch(()=>{}); await p.waitForTimeout(4000);
  const best = await p.evaluate(()=>{ const im=[...document.querySelectorAll('img')].filter(i=>/fbcdn/.test(i.src)).sort((a,b)=>b.naturalWidth*b.naturalHeight-a.naturalWidth*a.naturalHeight)[0]; return im?[im.src,im.naturalWidth,im.naturalHeight, (document.querySelector('[role=main], [role=dialog]')||document.body).innerText.slice(0,600)]:null; });
  if (!best) continue;
  const r = await fetch(best[0]); fs.writeFileSync(`bron/soc/hi-${String(keys.get(k)).padStart(3,'0')}.jpg`, Buffer.from(await r.arrayBuffer()));
  fs.appendFileSync('bron/soc/hi.txt', `hi-${keys.get(k)} ${best[1]}x${best[2]} ${h}\n   ${best[3].replace(/\n+/g,' / ')}\n`);
  console.log(keys.get(k), best[1], best[2]);
}
await b.close();

