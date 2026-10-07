import { chromium } from 'playwright'; import fs from 'node:fs';
const b = await chromium.launch(); const log = [];
for (const [w,h,n] of [[1440,900,'d'],[390,844,'m']]) {
  const c = await b.newContext({ viewport: { width: w, height: h }, isMobile: w<500, hasTouch: w<500 }); const p = await c.newPage();
  await p.goto('http://www.industrialfieldservices.nl/', { waitUntil: 'load', timeout: 60000 }); await p.waitForTimeout(3000);
  const r = await p.evaluate(() => ({ url: location.href, sw: document.documentElement.scrollWidth, H: document.documentElement.scrollHeight,
    viewport: document.querySelector('meta[name=viewport]')?.content, tels: [...document.querySelectorAll('a[href^=tel]')].map(a=>a.getAttribute('href')),
    adres: /Westbaan|Moordrecht/i.test(document.body.innerText), h1: [...document.querySelectorAll('h1')].map(e=>e.innerText),
    imgs: [...document.querySelectorAll('img')].map(i=>i.currentSrc.split('/').pop()+' '+i.naturalWidth) }));
  log.push(n + ' ' + JSON.stringify(r));
  await p.screenshot({ path: `bron/web/oud-${n}.png` }); await p.screenshot({ path: `bron/web/oud-${n}-full.png`, fullPage: true }); await c.close();
}
const p = await (await b.newContext()).newPage();
try { await p.goto('https://www.industrialfieldservices.nl/', { timeout: 20000 }); log.push('https OK?? ' + p.url()); } catch (e) { log.push('https FOUT: ' + e.message.split('\n')[0]); }
for (const u of ['http://industrialfieldservices.nl/state-burst-think-end-are-its-arrived/','http://industrialfieldservices.nl/projecten/']) {
  const r = await p.goto(u, { timeout: 30000 }).catch(e=>null); log.push(u + ' -> ' + (r && r.status()) + ' ' + (await p.title()));
  await p.screenshot({ path: `bron/web/oud-${u.split('/').at(-2)}.png` });
}
fs.writeFileSync('bron/web/meting.txt', log.join('\n')); console.log(log.join('\n')); await b.close();
