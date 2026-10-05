import { chromium } from 'playwright'; import fs from 'node:fs';
const b = await chromium.launch();
const out = [];
for (const [w,h,tag] of [[1440,900,'d'],[390,844,'m']]) {
  const ctx = await b.newContext({ viewport: { width: w, height: h }, locale: 'nl-NL' });
  const p = await ctx.newPage();
  await p.goto('https://comedorlunchroom.nl/', { waitUntil: 'networkidle' }).catch(e=>out.push('ERR '+e.message));
  await p.waitForTimeout(2500);
  out.push(`== HOME ${tag} url=${p.url()} H=${await p.evaluate(()=>document.documentElement.scrollHeight)} title=${await p.title()}`);
  await p.screenshot({ path: `bron/site/home-${tag}.png`, fullPage: true });
  if (tag==='d') {
    out.push(await p.evaluate(()=>document.body.innerText));
    const links = await p.evaluate(()=>[...document.querySelectorAll('a')].map(a=>a.innerText.trim().replace(/\s+/g,' ')+' -> '+a.href));
    out.push('LINKS:\n'+[...new Set(links)].join('\n'));
    const imgs = await p.evaluate(()=>[...document.querySelectorAll('img')].map(i=>i.currentSrc+' | '+i.alt+' | '+i.naturalWidth));
    out.push('IMGS:\n'+imgs.join('\n'));
  }
  await ctx.close();
}
fs.writeFileSync('bron/site/home.txt', out.join('\n\n'));
await b.close();
