import { chromium } from 'playwright'; import fs from 'node:fs';
const b = await chromium.launch({ channel: 'chrome', args: ['--headless=new'] });
for (const [w,h,n] of [[1440,900,'1440'],[390,844,'390']]) {
  const ctx = await b.newContext({ locale: 'nl-NL', viewport: { width: w, height: h } });
  const p = await ctx.newPage();
  const r = await p.goto('https://verandahof.nl/', { waitUntil: 'load', timeout: 45000 });
  await p.waitForTimeout(5000);
  await p.screenshot({ path: `bron/web/verandahof-nl-${n}.png` });
  const html = await p.content();
  const info = { url: p.url(), status: r.status(), headers: r.headers(), html, text: await p.evaluate(()=>document.body.innerText), scrollH: await p.evaluate(()=>document.documentElement.scrollHeight) };
  fs.writeFileSync(`bron/web/verandahof-nl-${n}.txt`, new Date().toISOString() + '\n' + JSON.stringify(info, null, 1));
  console.log(n, JSON.stringify(info).slice(0, 400));
  await ctx.close();
}
await b.close();
