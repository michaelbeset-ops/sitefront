import { chromium } from 'playwright';
const b = await chromium.launch(); const p = await b.newPage({ viewport: { width: 320, height: 640 } });
await p.goto('http://localhost:4392/sitefront/home-haarden-alblasserdam/', { waitUntil: 'networkidle' });
console.log(await p.evaluate(() => [...document.querySelectorAll('body *')].filter(e => e.getBoundingClientRect().right > 321).slice(0, 8).map(e => e.tagName + '.' + String(e.className).slice(0, 80) + ' ' + Math.round(e.getBoundingClientRect().right))));
await b.close();
