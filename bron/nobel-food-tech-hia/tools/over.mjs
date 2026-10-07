import { chromium } from 'playwright';
const b = await chromium.launch();
const c = await b.newContext({ viewport: { width: 320, height: 640 }, isMobile: true, hasTouch: true });
const p = await c.newPage(); await p.goto('http://localhost:4438/sitefront/nobel-food-tech-hia/', { waitUntil: 'networkidle' });
console.log(await p.evaluate(() => [...document.querySelectorAll('body *')].filter(e => e.getBoundingClientRect().right > 321).map(e => e.tagName + '.' + e.className.toString().slice(0, 50) + ' ' + Math.round(e.getBoundingClientRect().right) + ' ' + (e.innerText||'').slice(0,30)).slice(0, 12)));
await b.close();
