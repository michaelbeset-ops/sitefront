import { chromium } from 'playwright';
const b = await chromium.launch(); const p = await b.newPage({ viewport: { width: 320, height: 640 } });
await p.goto('http://localhost:4728/sitefront/simons-vloer-wand-haastrecht/', { waitUntil: 'networkidle' });
console.log(await p.evaluate(() => { const scrollers = [...document.querySelectorAll('*')].filter(e => ['auto','scroll','hidden'].includes(getComputedStyle(e).overflowX) && e !== document.documentElement && e !== document.body); return [...document.querySelectorAll('body *')].filter(e => e.getBoundingClientRect().right > innerWidth + 1 && !scrollers.some(s => s !== e && s.contains(e))).slice(0, 10).map(e => e.tagName + '.' + e.className.toString().slice(0, 90) + ' ' + Math.round(e.getBoundingClientRect().right)).join('\n'); }));
await b.close();
