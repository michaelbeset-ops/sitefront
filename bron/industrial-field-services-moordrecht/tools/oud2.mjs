import { chromium } from 'playwright'; import fs from 'node:fs';
const b = await chromium.launch(); const log=[];
for (const [w,h,n] of [[1440,900,'d'],[390,844,'m']]) {
  const p = await (await b.newContext({ viewport: { width: w, height: h }, isMobile: w<500 })).newPage();
  await p.goto('http://www.industrialfieldservices.nl/', { waitUntil: 'load' });
  await p.evaluate(async () => { for (let y = 0; y < document.body.scrollHeight; y += 300) { scrollTo(0, y); await new Promise(r => setTimeout(r, 150)); } scrollTo(0,0); });
  await p.waitForTimeout(2500);
  const fs1 = await p.evaluate(() => [...document.querySelectorAll('p')].map(e=>getComputedStyle(e).fontSize).slice(0,6));
  log.push(n+' fontsizes p '+fs1.join(','));
  await p.screenshot({ path: `bron/web/oud-${n}-full.png`, fullPage: true });
}
const p = await (await b.newContext()).newPage();
await p.goto('http://industrialfieldservices.nl/projecten/'); await p.waitForTimeout(2000);
log.push('projecten tekstlengte ' + (await p.evaluate(()=>document.body.innerText.trim().length)) + ' :: ' + (await p.evaluate(()=>document.body.innerText.trim().slice(0,200))));
await p.screenshot({ path: 'bron/web/oud-projecten.png', fullPage: true });
const r = await p.goto('http://industrialfieldservices.nl/state-burst-think-end-are-its-arrived/', {waitUntil:'domcontentloaded', timeout: 60000}).catch(e=>null);
await p.waitForTimeout(2000);
log.push('demo-post ' + (r&&r.status()) + ' ' + (await p.evaluate(()=>document.body.innerText.slice(0,300).replace(/\s+/g,' '))));
await p.screenshot({ path: 'bron/web/oud-demopost.png' });
fs.appendFileSync('bron/web/meting.txt', '\n'+log.join('\n')); console.log(log.join('\n')); await b.close();
