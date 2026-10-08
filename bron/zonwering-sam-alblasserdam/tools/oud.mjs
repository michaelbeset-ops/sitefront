import { chromium } from 'playwright';
const b = await chromium.launch();
const pads = process.argv.slice(2).length ? process.argv.slice(2) : [''];
for (const pad of pads) for (const [w,h,n] of [[390,844,'m'],[1440,900,'d']]) {
const c = await b.newContext({ viewport: { width: w, height: h }, isMobile: w<500, hasTouch: w<500 }); const p = await c.newPage();
await p.goto('https://www.sam-zonwering.nl/'+pad, { waitUntil: 'load', timeout: 60000 }); await p.waitForTimeout(5000);
const r = await p.evaluate(() => ({ sw: document.documentElement.scrollWidth, H: document.documentElement.scrollHeight, tels: [...document.querySelectorAll('a[href^=tel]')].map(a=>a.href), wa: [...document.querySelectorAll('a[href*="wa.me"],a[href*="whatsapp"]')].map(a=>a.href), vp: document.querySelector('meta[name=viewport]')?.content, h1: [...document.querySelectorAll('h1,h2')].slice(0,6).map(h=>h.innerText.trim()), vids: [...document.querySelectorAll('video,iframe')].map(v=>(v.currentSrc||v.src)+' '+Math.round(v.getBoundingClientRect().width)+'x'+Math.round(v.getBoundingClientRect().height)+' ready'+(v.readyState??'')), imgs: [...document.querySelectorAll('img')].filter(i=>i.getBoundingClientRect().top<innerHeight).map(i=>Math.round(i.getBoundingClientRect().width)+'x'+Math.round(i.getBoundingClientRect().height)+' nat'+i.naturalWidth), fs: getComputedStyle(document.querySelector('p')||document.body).fontSize, copy: (document.body.innerText.match(/©[^\n]*/)||[''])[0] }));
console.log(pad||'home', n, JSON.stringify(r));
const nm = (pad?pad.replace(/\W+/g,'').slice(0,12)+'-':'') + n;
await p.screenshot({ path: `bron/web/oud-${nm}.png` }); if (!pad) await p.screenshot({ path: `bron/web/oud-${nm}-full.png`, fullPage: true }); await c.close(); }
await b.close();
