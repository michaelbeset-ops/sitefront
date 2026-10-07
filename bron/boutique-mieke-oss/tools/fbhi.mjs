import { chromium } from 'playwright'; import fs from 'node:fs';
const want = process.argv.slice(2).map(Number);
const L = fs.readFileSync('bron/soc/fbph-imgs.txt','utf8').trim().split('\n');
const b = await chromium.launch({ channel: 'chrome', args: ['--headless=new','--disable-blink-features=AutomationControlled'] });
const ctx = await b.newContext({ locale: 'nl-NL', viewport: { width: 1300, height: 1400 }, userAgent:'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/141.0.0.0 Safari/537.36' });
const p = await ctx.newPage();
for (const i of want) {
  const h = L[i-1].split(' || ')[2]; if (!h) { console.log(i, 'geen link'); continue; }
  await p.goto(h, { waitUntil: 'domcontentloaded' }).catch(()=>{}); await p.waitForTimeout(4500);
  for (const t of ['Optionele cookies afwijzen','Alleen essentiële cookies toestaan']) { const r=p.locator(`[role=button]:has-text("${t}")`).first(); if (await r.count()) { await r.click().catch(()=>{}); await p.waitForTimeout(2000);} }
  const best = await p.evaluate(()=>{ const im=[...document.querySelectorAll('img')].filter(i=>/fbcdn/.test(i.src)).sort((a,b)=>b.naturalWidth*b.naturalHeight-a.naturalWidth*a.naturalHeight)[0]; return im?[im.src,im.naturalWidth,im.naturalHeight,(document.querySelector('[role=main], [role=dialog]')||document.body).innerText.slice(0,500)]:null; });
  if (!best) { console.log(i,'niets'); continue; }
  const r = await fetch(best[0]); fs.writeFileSync(`bron/soc/hi-${String(i).padStart(3,'0')}.jpg`, Buffer.from(await r.arrayBuffer()));
  fs.appendFileSync('bron/soc/hi.txt', `hi-${i} ${best[1]}x${best[2]} ${h}\n   ${best[3].replace(/\n+/g,' / ')}\n`);
  console.log(i, best[1], best[2]);
}
await b.close();
