import { chromium } from 'playwright';
const b = await chromium.launch();
for (const pad of ['', 'our-projects/', 'producten/global-procurement/']) for (const [w,h,n] of [[390,844,'m'],[1440,900,'d']]) {
const c = await b.newContext({ viewport: { width: w, height: h }, isMobile: w<500, hasTouch: w<500 }); const p = await c.newPage();
await p.goto('https://dierkx-zonweringen.nl/'+pad, { waitUntil: 'load' }); await p.waitForTimeout(2500);
const r = await p.evaluate(() => ({ sw: document.documentElement.scrollWidth, H: document.documentElement.scrollHeight, tels: [...document.querySelectorAll('a[href^=tel]')].map(a=>a.href), wa: [...document.querySelectorAll('a[href*="wa.me"],a[href*="whatsapp"]')].length, vp: document.querySelector('meta[name=viewport]')?.content, h1: [...document.querySelectorAll('h1')].map(h=>h.innerText), imgs: [...document.querySelectorAll('img')].filter(i=>i.getBoundingClientRect().top<innerHeight).map(i=>Math.round(i.getBoundingClientRect().width)+'x'+Math.round(i.getBoundingClientRect().height)+' nat'+i.naturalWidth), fs: getComputedStyle(document.querySelector('p')||document.body).fontSize }));
console.log(pad||'home', n, JSON.stringify(r));
const nm = (pad?pad.slice(0,10)+'-':'') + n;
await p.screenshot({ path: `bron/web/oud-${nm}.png` }); if (!pad) await p.screenshot({ path: `bron/web/oud-${nm}-full.png`, fullPage: true }); await c.close(); }
await b.close();
