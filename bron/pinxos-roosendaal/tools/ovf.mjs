import { chromium } from 'playwright';
const b = await chromium.launch(); const p = await (await b.newContext({ viewport: { width: 320, height: 640 } })).newPage();
await p.goto('http://127.0.0.1:4505/sitefront/pinxos-roosendaal/', { waitUntil: 'networkidle' });
console.log(await p.evaluate(() => document.documentElement.scrollWidth), await p.evaluate(() => [...document.querySelectorAll('body *')].filter(e => { if (e.getBoundingClientRect().right <= 320.5) return false; for (let a = e.parentElement; a; a = a.parentElement) if (/hidden|clip/.test(getComputedStyle(a).overflowX)) return false; return true; }).slice(0, 8).map(e => e.tagName + '.' + e.className.toString().slice(0, 60) + ' ' + Math.round(e.getBoundingClientRect().right) + ' ' + (e.textContent||'').slice(0,30)).join('\n')));
await b.close();
