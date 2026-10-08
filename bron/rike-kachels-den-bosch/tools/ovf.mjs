import { chromium } from 'playwright';
const b = await chromium.launch();
const p = await (await b.newContext({ viewport: { width: 320, height: 640 } })).newPage();
await p.goto('http://127.0.0.1:4479/sitefront/rike-kachels-den-bosch/', { waitUntil: 'networkidle' }); await p.evaluate(async()=>{for(let y=0;y<document.body.scrollHeight;y+=400){scrollTo(0,y);await new Promise(r=>setTimeout(r,60));}}); await p.waitForTimeout(1500); console.log(await p.evaluate(()=>document.documentElement.scrollWidth));
console.log(await p.evaluate(() => [...document.querySelectorAll('body *')].filter(e => e.scrollWidth > e.clientWidth + 1 && getComputedStyle(e).overflowX !== 'visible' || e.getBoundingClientRect().right > 320.5).slice(0, 8).map(e => e.tagName + '.' + (e.className?.baseVal ?? e.className).toString().slice(0, 60) + ' ' + Math.round(e.getBoundingClientRect().right) + ' ' + (e.textContent||'').slice(0,30))));
await b.close();
