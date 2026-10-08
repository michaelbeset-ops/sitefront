import { chromium } from 'playwright'; import fs from 'node:fs';
const b = await chromium.launch({ channel: 'chrome', args: ['--headless=new','--disable-blink-features=AutomationControlled'] });
for (const [w,h,n] of [[1440,900,'d'],[390,844,'m']]) {
  const ctx = await b.newContext({ locale: 'nl-NL', viewport: { width: w, height: h }, userAgent: 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/141.0.0.0 Safari/537.36' });
  const p = await ctx.newPage();
  for (const u of ['http://comfortwonen.eu/', 'https://www.comfortwonen.eu/']) {
    await p.goto(u, { waitUntil: 'load', timeout: 45000 }).catch(e=>console.log('err',e.message));
    await p.waitForTimeout(12000);
    const tag = u.includes('www') ? 'www-' : '';
    await p.screenshot({ path: `bron/web/domein-${tag}${n}.png` });
    const t = await p.evaluate(() => document.body.innerText).catch(()=> '');
    fs.writeFileSync(`bron/web/domein-${tag}${n}.txt`, p.url() + '\n' + t);
    console.log(n, u, '->', p.url(), t.slice(0,300).replace(/\n/g,' | '));
  }
  await ctx.close();
}
await b.close();
