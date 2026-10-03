import { chromium } from 'playwright';
const b = await chromium.launch(); const p = await b.newPage({ viewport: { width: 320, height: 640 } });
await p.goto('http://localhost:4746/sitefront/oudshoorn-grondverzet-capelle/', { waitUntil: 'networkidle' });
console.log(await p.evaluate(() => [...document.querySelectorAll('body *')].filter(e => { if (e.getBoundingClientRect().right <= 321) return false; for (let a = e.parentElement; a; a = a.parentElement) { const o = getComputedStyle(a).overflowX; if (o !== 'visible') return false; } return true; }).slice(0, 12).map(e => e.tagName + '.' + String(e.className).slice(0, 60) + ' ' + Math.round(e.getBoundingClientRect().right) + ' ' + (e.textContent||'').trim().slice(0,30))));
await b.close();
