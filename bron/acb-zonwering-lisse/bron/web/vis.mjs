import { chromium } from 'playwright';
const b = await chromium.launch();
for (const [w,h,n] of [[390,844,'m'],[1440,900,'d']]) {
const c = await b.newContext({ viewport: { width: w, height: h }, isMobile: w<500 }); const p = await c.newPage();
await p.goto('http://www.acb.nl/', { waitUntil: 'load' }); await p.waitForTimeout(2500);
const r = await p.evaluate(() => ({ sw: document.documentElement.scrollWidth, H: document.documentElement.scrollHeight, https: location.protocol, tels: [...document.querySelectorAll('a[href^=tel]')].length, lorem: /lorem|pellentesque|jhon doe|malesuada/i.test(document.body.innerText), t: document.body.innerText }));
console.log(n, r.sw, r.H, r.https, 'tels', r.tels, 'lorem', r.lorem); if (n==='m') console.log(r.t.slice(0,3000));
await p.screenshot({ path: `oud-${n}.png` }); await p.screenshot({ path: `oud-${n}-full.png`, fullPage: true }); await c.close(); }
await b.close();
