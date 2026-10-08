import { chromium } from 'playwright';
const b = await chromium.launch();
for (const [w,h,n] of [[390,844,'m'],[1440,900,'d']]) {
const c = await b.newContext({ viewport: { width: w, height: h }, isMobile: w<500 }); const p = await c.newPage();
await p.goto('http://www.diepeveeninterieur.nl/', { waitUntil: 'load' }); await p.waitForTimeout(2500);
const r = await p.evaluate(() => ({ sw: document.documentElement.scrollWidth, H: document.documentElement.scrollHeight, https: location.protocol, tels: [...document.querySelectorAll('a[href^=tel]')].length, vp: document.querySelector('meta[name=viewport]')?.content || 'GEEN', fs: getComputedStyle(document.body).fontSize, small: [...document.querySelectorAll('p')].slice(0,3).map(e=>getComputedStyle(e).fontSize).join(' '), t: document.body.innerText }));
console.log(n, r.sw, r.H, r.https, 'tels', r.tels, 'vp', r.vp, 'fs', r.fs, r.small); if (n==='m') console.log('');
await p.screenshot({ path: `bron/web/oud-${n}.png` }); await p.screenshot({ path: `bron/web/oud-${n}-full.png`, fullPage: true }); await c.close(); }
await b.close();
