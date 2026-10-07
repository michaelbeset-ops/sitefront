import { chromium } from 'playwright'; import fs from 'node:fs';
const b = await chromium.launch({ channel: 'chrome', args: ['--headless=new','--disable-blink-features=AutomationControlled'] });
const ctx = await b.newContext({ locale: 'nl-NL', viewport: { width: 1300, height: 1400 }, userAgent:'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/141.0.0.0 Safari/537.36' });
const p = await ctx.newPage();
await p.goto('https://www.instagram.com/boutiquemieke/', { waitUntil: 'domcontentloaded' }); await p.waitForTimeout(5000);
const meta = await p.evaluate(() => [...document.querySelectorAll('meta')].map(m => (m.getAttribute('property')||m.getAttribute('name')) + ' = ' + m.content).filter(x=>/descr|title/.test(x)).join('\n'));
await p.locator('text=meer').first().click().catch(()=>{}); await p.waitForTimeout(1000);
const header = await p.evaluate(() => document.querySelector('header')?.innerText || '');
fs.writeFileSync('bron/soc/ig-profiel.txt', meta + '\n\nHEADER\n' + header);
const links = (await p.evaluate(() => [...document.querySelectorAll('a[href*="/p/"], a[href*="/reel/"]')].map(a=>a.href))).filter((v,i,a)=>a.indexOf(v)===i);
let n=0; const out=[];
for (const l of links) {
  await p.goto(l, { waitUntil: 'domcontentloaded' }).catch(()=>{}); await p.waitForTimeout(3500);
  const info = await p.evaluate(() => { const ims=[...document.querySelectorAll('img')].filter(i=>/cdninstagram|fbcdn/.test(i.src) && i.naturalWidth>300).sort((a,b)=>b.naturalWidth-a.naturalWidth); const og=document.querySelector('meta[property="og:image"]')?.content; const d=document.querySelector('meta[property="og:description"]')?.content||document.querySelector('meta[name="description"]')?.content; const t=document.querySelector('meta[property="og:title"]')?.content; return { src: ims[0]?.src, w: ims[0]?.naturalWidth, h: ims[0]?.naturalHeight, srcset: ims[0]?.srcset?.split(',').pop(), og, d, t }; });
  n++; const f = `bron/soc/ig/ig-${String(n).padStart(2,'0')}.jpg`;
  const best = (info.srcset||'').trim().split(' ')[0] || info.src || info.og;
  if (best) { const r = await fetch(best); fs.writeFileSync(f, Buffer.from(await r.arrayBuffer())); }
  out.push(`${f} ${info.w}x${info.h} ${l}\n  T: ${info.t}\n  D: ${info.d}`);
}
fs.writeFileSync('bron/soc/ig/posts.txt', out.join('\n')); console.log(n);
await b.close();
