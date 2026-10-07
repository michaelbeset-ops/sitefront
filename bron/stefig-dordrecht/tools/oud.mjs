import { chromium } from 'playwright';
const b = await chromium.launch();
for (const [w,h,n] of [[390,844,'390'],[1440,900,'1440']]) {
const c = await b.newContext({ viewport: { width: w, height: h }, isMobile: w<500, hasTouch: w<500 }); const p = await c.newPage();
await p.goto('http://www.stefig.nl/', { waitUntil: 'networkidle' }); await p.waitForTimeout(2000);
const r = await p.evaluate(() => ({ sw: document.documentElement.scrollWidth, H: document.documentElement.scrollHeight, title: document.title, vp: document.querySelector('meta[name=viewport]')?.content, tels: [...document.querySelectorAll('a[href^="tel:"]')].map(a=>a.href), wa: [...document.querySelectorAll('a[href*="wa.me"],a[href*="whatsapp"]')].length, h1: [...document.querySelectorAll('h1')].map(x=>x.innerText+' '+getComputedStyle(x).fontSize), imgs: [...document.querySelectorAll('img')].filter(i=>i.getBoundingClientRect().width>0).map(i=>Math.round(i.getBoundingClientRect().width)+'x'+Math.round(i.getBoundingClientRect().height)).slice(0,12), firstImgTop: Math.round([...document.querySelectorAll('img')].filter(i=>i.getBoundingClientRect().width>150)[0]?.getBoundingClientRect().top||0), bodyFont: getComputedStyle(document.querySelector('p')||document.body).fontSize }));
console.log(n, JSON.stringify(r));
await p.screenshot({ path: `bron/web/oud-${n}.png` }); await p.screenshot({ path: `bron/web/oud-${n}-full.png`, fullPage: true }); await c.close(); }
await b.close();
