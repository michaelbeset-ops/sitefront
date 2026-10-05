import { chromium } from 'playwright';
const b = await chromium.launch(); const p = await (await b.newContext({ viewport: { width: 320, height: 640 } })).newPage();
await p.goto('http://localhost:4399/sitefront/comedor-lunchroom-nijmegen/', { waitUntil: 'networkidle' });
console.log(await p.evaluate(() => document.documentElement.scrollWidth + ' ' + [...document.querySelectorAll('body *')].filter(e => e.scrollWidth > e.clientWidth + 1 && getComputedStyle(e).overflowX === 'visible').map(e => e.tagName + '.' + e.className.toString().slice(0, 60) + ' ' + Math.round(e.getBoundingClientRect().right)).slice(0, 15).join('\n')));
await b.close();
