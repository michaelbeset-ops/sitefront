import { chromium } from 'playwright'; import fs from 'node:fs';
const b = await chromium.launch(); const log = [];
for (const [w,h,n] of [[1440,900,'d'],[390,844,'m']]) {
  const c = await b.newContext({ viewport: { width: w, height: h }, isMobile: w<500, hasTouch: w<500, deviceScaleFactor: 1 }); const p = await c.newPage();
  for (const pad of ['', 'contact/']) {
    await p.goto('https://www.metaalbewerkingheusden.nl/' + pad, { waitUntil: 'load', timeout: 60000 }); await p.waitForTimeout(2500);
    const r = await p.evaluate(() => ({ url: location.href, sw: document.documentElement.scrollWidth, iw: innerWidth, H: document.documentElement.scrollHeight,
      viewport: document.querySelector('meta[name=viewport]')?.content, tels: [...document.querySelectorAll('a[href^=tel]')].map(a=>a.getAttribute('href')),
      shortcode: /\[contact-form/.test(document.body.innerText), verhuisd: /verhuisd/i.test(document.body.innerText),
      fontsizes: [...new Set([...document.querySelectorAll('p,li,span,a')].map(e=>getComputedStyle(e).fontSize))].slice(0,8),
      afgesneden: [...document.querySelectorAll('body *')].filter(e=>{const r=e.getBoundingClientRect();return r.right>innerWidth+2 && e.children.length===0 && e.innerText?.trim()}).map(e=>e.innerText.trim().slice(0,40)).slice(0,10) }));
    log.push(n + ' ' + pad + ' ' + JSON.stringify(r));
    const nm = pad ? `oud-${n}-contact` : `oud-${n}`;
    await p.screenshot({ path: `bron/web/${nm}.png` }); await p.screenshot({ path: `bron/web/${nm}-full.png`, fullPage: true });
  }
  await c.close();
}
fs.writeFileSync('bron/web/meting.txt', log.join('\n')); console.log(log.join('\n')); await b.close();
