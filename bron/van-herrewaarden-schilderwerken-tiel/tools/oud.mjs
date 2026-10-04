import { chromium } from 'playwright';
const S = process.argv[2];
const b = await chromium.launch();
for (const [w,h,mob] of [[1440,900,false],[390,844,true]]) {
  const ctx = await b.newContext({ viewport:{width:w,height:h}, isMobile:mob, hasTouch:mob, deviceScaleFactor:1 });
  const p = await ctx.newPage(); const errs=[]; const fails=[];
  p.on('console', m => m.type()==='error' && errs.push(m.text()));
  p.on('requestfailed', r => fails.push(r.url()));
  p.on('response', r => r.status()>=400 && fails.push(r.status()+' '+r.url()));
  for (const pad of ['', 'binnenwerkfoto-s.html', 'contactformulier.html']) {
    await p.goto('http://www.vanherrewaardenschilderwerken.nl/'+pad, { waitUntil:'load', timeout:30000 }); await p.waitForTimeout(2500);
    const info = await p.evaluate(() => ({ sw: document.documentElement.scrollWidth, vp: !!document.querySelector('meta[name=viewport]'), h: document.documentElement.scrollHeight, fs: getComputedStyle(document.querySelector('td.e, td, body')).fontSize, txt: document.body.innerText.slice(0,200).replace(/\s+/g,' ') , iframes:[...document.querySelectorAll('iframe')].map(f=>f.src) }));
    console.log(w, pad||'home', JSON.stringify(info));
    await p.screenshot({ path: `${S}/oud-${w}-${pad||'home'}.png` });
  }
  console.log('errors', errs.slice(0,5)); console.log('fails', [...new Set(fails)].slice(0,10));
  await ctx.close();
}
await b.close();
