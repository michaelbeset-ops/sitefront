import { chromium } from 'playwright';
const b = await chromium.launch(); const p = await (await b.newContext({ viewport: { width: 320, height: 640 } })).newPage();
await p.goto('http://127.0.0.1:4519/sitefront/kopasol-ridderkerk/', { waitUntil: 'networkidle' });
console.log(await p.evaluate(() => [...document.querySelectorAll('*')].filter(e => e.getBoundingClientRect().right > 320.5 || e.scrollWidth > e.clientWidth + 1 && getComputedStyle(e).overflowX==='visible' && e.clientWidth>0).slice(0, 12).map(e => e.tagName + '.' + String(e.className?.baseVal ?? e.className).slice(0, 50) + ' r=' + Math.round(e.getBoundingClientRect().right) + ' sw=' + e.scrollWidth + '/' + e.clientWidth).join('\n')));
await b.close();
