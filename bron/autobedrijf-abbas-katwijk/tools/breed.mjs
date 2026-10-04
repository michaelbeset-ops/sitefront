import { chromium } from 'playwright';
const b = await chromium.launch(); const p = await b.newPage({ viewport: { width: 390, height: 844 } });
await p.goto('http://localhost:4792/sitefront/autobedrijf-abbas-katwijk/', { waitUntil: 'networkidle' });
console.log(await p.evaluate(() => [...document.querySelectorAll('body *')].filter(e => e.getBoundingClientRect().right > 391 && !e.closest('.overflow-x-auto')).slice(0, 12).map(e => e.tagName + '.' + e.className.toString().slice(0, 80) + ' ' + Math.round(e.getBoundingClientRect().right)).join('\n')));
await b.close();
