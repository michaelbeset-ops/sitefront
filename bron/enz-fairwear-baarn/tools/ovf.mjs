import { chromium } from 'playwright';
const b = await chromium.launch(); const p = await (await b.newContext({ viewport: { width: 390, height: 844 } })).newPage();
await p.goto('http://localhost:4453/sitefront/enz-fairwear-baarn/', { waitUntil: 'networkidle' });
console.log(await p.evaluate(() => [...document.querySelectorAll('body *')].filter(e => e.getBoundingClientRect().right > 392).slice(0, 8).map(e => e.tagName + '.' + (e.className.baseVal ?? e.className).toString().slice(0, 80) + ' ' + Math.round(e.getBoundingClientRect().right))));
await b.close();
