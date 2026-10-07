import { chromium } from 'playwright';
const b = await chromium.launch();
for (const [w,h,n] of [[390,844,'m'],[1440,900,'d']]) {
const c = await b.newContext({ viewport: { width: w, height: h }, isMobile: w<500, hasTouch: w<500 }); const p = await c.newPage();
const t0 = Date.now();
await p.goto('http://www.msitransport.nl/', { waitUntil: 'load' }); const lt = Date.now()-t0; await p.waitForTimeout(3000);
const r = await p.evaluate(() => ({ sw: document.documentElement.scrollWidth, H: document.documentElement.scrollHeight, url: location.href,
  tels: [...document.querySelectorAll('a[href^=tel]')].map(a=>a.innerText.trim()), wa: [...document.querySelectorAll('a[href*="wa.me"],a[href*="whatsapp"]')].length,
  h1: [...document.querySelectorAll('h1')].map(x=>x.innerText), title: document.title, desc: document.querySelector('meta[name=description]')?.content,
  imgs: document.images.length, lang: document.documentElement.lang,
  heroH: (()=>{const e=[...document.querySelectorAll('h1,h2')].find(x=>/Welkom/.test(x.innerText)); if(!e) return null; const r=e.getBoundingClientRect(); return [Math.round(r.top), Math.round(r.height), getComputedStyle(e).fontSize];})() }));
console.log(n, JSON.stringify(r), 'load ms', lt);
await p.screenshot({ path: `bron/web/oud-${n}.png` }); await p.screenshot({ path: `bron/web/oud-${n}-full.png`, fullPage: true }); await c.close(); }
await b.close();
