import { chromium } from 'playwright';
const b = await chromium.launch(); const p = await b.newPage({ viewport: { width: 320, height: 640 } });
await p.goto('http://localhost:4721/sitefront/autohuis-centraal-strijen/' + (process.argv[2] || ''), { waitUntil: 'networkidle' });
console.log('sw', await p.evaluate(() => document.documentElement.scrollWidth));
console.log(await p.evaluate(() => [...document.querySelectorAll('body *')].filter(e => e.getBoundingClientRect().right > 321 && !e.closest('.overflow-x-auto')).slice(0, 12).map(e => e.tagName + '.' + (e.className?.baseVal ?? e.className).toString().slice(0, 80) + ' ' + Math.round(e.getBoundingClientRect().right) + ' ' + (e.textContent||'').trim().slice(0,40))));
await b.close();
