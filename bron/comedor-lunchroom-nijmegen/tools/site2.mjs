import { chromium } from 'playwright'; import fs from 'node:fs';
const b = await chromium.launch();
const out = [];
const ctx = await b.newContext({ viewport: { width: 1440, height: 900 }, locale: 'nl-NL' });
const p = await ctx.newPage();
for (const u of ['overons','menu','vestigingen','2023/03/11/qa-with-andrew-holsen-hand-maker']) {
  const r = await p.goto('https://comedorlunchroom.nl/'+u+'/', { waitUntil: 'networkidle' }).catch(e=>null);
  await p.waitForTimeout(2000);
  const n = u.replace(/\W/g,'_').slice(0,30);
  out.push(`== ${u} status=${r?.status()} url=${p.url()} H=${await p.evaluate(()=>document.documentElement.scrollHeight)} title=${await p.title()}`);
  await p.screenshot({ path: `bron/site/${n}.png`, fullPage: true });
  out.push(await p.evaluate(()=>document.body.innerText));
  out.push('IMGS:\n'+(await p.evaluate(()=>[...document.querySelectorAll('img')].map(i=>i.currentSrc+' | '+i.alt+' | '+i.naturalWidth+'x'+i.naturalHeight))).join('\n'));
}
fs.writeFileSync('bron/site/pages.txt', out.join('\n\n'));
await b.close();
