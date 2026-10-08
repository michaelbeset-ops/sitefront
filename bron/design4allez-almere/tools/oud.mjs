import { chromium } from 'playwright';
const OUT = 'C:/Users/Micha/Downloads/Sitefront/demos/design4allez-almere/bron/web/';
const b = await chromium.launch();
for (const [w,h,n] of [[390,844,'390'],[1440,900,'1440']]) {
const c = await b.newContext({ viewport: { width: w, height: h }, isMobile: w<500, hasTouch: w<500, deviceScaleFactor: 1 }); const p = await c.newPage();
await p.goto('https://www.design4allez.nl/', { waitUntil: 'load', timeout: 60000 }); await p.waitForTimeout(5000);
const r = await p.evaluate(() => ({ sw: document.documentElement.scrollWidth, iw: innerWidth, H: document.documentElement.scrollHeight, title: document.title, vp: document.querySelector('meta[name=viewport]')?.content, tels: [...document.querySelectorAll('a[href^="tel:"]')].length, wa: [...document.querySelectorAll('a[href*="wa.me"],a[href*="whatsapp"]')].length, mail: [...document.querySelectorAll('a[href^="mailto:"]')].length, h1: [...document.querySelectorAll('h1')].map(x=>x.innerText.slice(0,60)+' '+getComputedStyle(x).fontSize), ps: [...document.querySelectorAll('p')].slice(0,6).map(x=>getComputedStyle(x).fontSize), imgs: [...document.querySelectorAll('img')].filter(i=>i.getBoundingClientRect().width>0).map(i=>Math.round(i.getBoundingClientRect().width)+'x'+Math.round(i.getBoundingClientRect().height)).slice(0,12) }));
console.log(n, JSON.stringify(r));
await p.screenshot({ path: OUT+`oud-${n}.png` }); await p.screenshot({ path: OUT+`oud-${n}-full.png`, fullPage: true }); await c.close(); }
await b.close();
