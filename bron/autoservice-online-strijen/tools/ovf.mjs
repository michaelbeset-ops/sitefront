import { chromium } from 'playwright';
const b = await chromium.launch(); const p = await (await b.newContext({ viewport: { width: 390, height: 844 } })).newPage();
await p.goto('http://localhost:4722/sitefront/autoservice-online-strijen/', { waitUntil: 'networkidle' });
console.log(await p.evaluate(() => [...document.querySelectorAll('body *')].filter(e => { if (e.getBoundingClientRect().right <= 391) return false; for (let a = e.parentElement; a; a = a.parentElement) if (getComputedStyle(a).overflowX !== 'visible') return false; return true; }).slice(0, 12).map(e => e.tagName + '.' + String(e.className).slice(0, 70) + ' ' + Math.round(e.getBoundingClientRect().right))));
await b.close();
