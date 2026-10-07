import { chromium } from 'playwright'; import fs from 'node:fs';
const b = await chromium.launch(); const ctx = await b.newContext({ locale: 'nl-NL', viewport: { width: 1600, height: 1400 }, userAgent:'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/141.0.0.0 Safari/537.36' }); const p = await ctx.newPage();
const links = new Set(); const posts = [];
for (const u of ['https://www.facebook.com/p/Ongelooflijk-lekker-100063648844324/', 'https://www.facebook.com/profile.php?id=100063648844324&sk=photos_by']) {
  await p.goto(u, { waitUntil: 'domcontentloaded', timeout: 40000 }).catch(()=>{}); await p.waitForTimeout(5000);
  for (const t of ['Optionele cookies afwijzen','Alleen essentiële cookies toestaan']) { const r=p.locator(`[role=button]:has-text("${t}")`).first(); if (await r.count()) { await r.click().catch(()=>{}); await p.waitForTimeout(2000);} }
  for (let i=0;i<12;i++){ const c = p.locator('[aria-label="Sluiten"]').first(); if (await c.count()) await c.click().catch(()=>{}); await p.evaluate(()=>document.querySelectorAll('[role=button]').forEach(b=>{ if (b.innerText.trim()==='Meer weergeven') b.click(); })); await p.mouse.wheel(0,1400); await p.waitForTimeout(1300); }
  (await p.evaluate(()=>[...document.querySelectorAll('a[href*="/photo"]')].map(a=>a.href))).forEach(h=>links.add(h.split('&__')[0]));
  posts.push(await p.evaluate(()=>[...document.querySelectorAll('[data-ad-rendering-role="story_message"], [data-ad-preview="message"]')].map(e=>e.innerText).join('\n-----\n')));
}
fs.writeFileSync('bron/soc/fb-posts.txt', posts.join('\n=====\n'));
console.log('links', links.size);
const out=[]; let n=0;
for (const l of [...links].slice(0,40)) {
  await p.goto(l, { waitUntil: 'domcontentloaded', timeout: 30000 }).catch(()=>{}); await p.waitForTimeout(3500);
  const c = p.locator('[aria-label="Sluiten"]').first(); if (await c.count()) await c.click().catch(()=>{});
  const best = await p.evaluate(()=>{ const im=[...document.querySelectorAll('img')].filter(i=>/scontent|fbcdn/.test(i.src)).sort((a,b)=>b.naturalWidth*b.naturalHeight-a.naturalWidth*a.naturalHeight)[0]; return im ? { src: im.src, w: im.naturalWidth, h: im.naturalHeight, alt: im.alt } : null; });
  const cap = await p.evaluate(()=>{ const t=document.body.innerText; const i=t.indexOf('Ongelooflijk lekker'); return t.slice(i, i+400).replace(/\n+/g,' | '); });
  if (!best || best.w < 300) continue;
  const r = await fetch(best.src); if (!r.ok) continue; n++;
  const f = `fbhi-${String(n).padStart(2,'0')}.jpg`; fs.writeFileSync('bron/soc/'+f, Buffer.from(await r.arrayBuffer()));
  out.push(`${f} | ${best.w}x${best.h} | ${l} | alt: ${best.alt} | ${cap}`);
}
fs.writeFileSync('bron/soc/fbhi.txt', out.join('\n')); console.log('hi', n);
await b.close();
