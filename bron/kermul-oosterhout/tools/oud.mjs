import { chromium } from 'playwright'; import fs from 'node:fs';
const b = await chromium.launch(); const log = [];
for (const [w,h,n] of [[1440,900,'d'],[390,844,'m']]) {
  const c = await b.newContext({ viewport: { width: w, height: h }, isMobile: w<500, hasTouch: w<500, locale: 'nl-NL' }); const p = await c.newPage();
  await p.goto('https://kermul.nl/', { waitUntil: 'load', timeout: 60000 }); await p.waitForTimeout(4000);
  const r = await p.evaluate(() => ({ url: location.href, sw: document.documentElement.scrollWidth, H: document.documentElement.scrollHeight,
    tels: [...document.querySelectorAll('a[href^=tel]')].map(a=>a.getAttribute('href')), menu: [...document.querySelectorAll('nav a')].map(a=>a.innerText.trim()).filter(Boolean),
    h: [...document.querySelectorAll('h1,h2')].map(e=>e.tagName+':'+e.innerText.trim()).slice(0,20),
    videos: [...document.querySelectorAll('video')].map(v=>v.currentSrc.split('/').pop()+' preload='+v.preload),
    first: document.body.innerText.slice(0, 400) }));
  log.push(n + ' ' + JSON.stringify(r));
  await p.screenshot({ path: `bron/web/oud-${n}.png` }); await p.screenshot({ path: `bron/web/oud-${n}-full.png`, fullPage: true }); await c.close();
}
const p = await (await b.newContext({ viewport: { width: 1440, height: 900 } })).newPage();
for (const u of ['https://kermul.nl/sample-page/','https://kermul.nl/referenties/','https://kermul.nl/contact/']) {
  const r = await p.goto(u, { timeout: 30000 }).catch(e=>null); await p.waitForTimeout(2500); log.push(u + ' -> ' + (r && r.status()) + ' ' + (await p.title()) + ' | ' + (await p.evaluate(()=>document.body.innerText.replace(/\s+/g,' ').slice(0,300))));
  await p.screenshot({ path: `bron/web/oud-${u.split('/').at(-2)}.png`, fullPage: true });
}
fs.writeFileSync('bron/web/meting.txt', log.join('\n')); console.log(log.join('\n')); await b.close();
