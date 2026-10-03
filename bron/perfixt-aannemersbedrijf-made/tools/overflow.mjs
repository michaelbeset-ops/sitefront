import { chromium } from 'playwright';
const b = await chromium.launch(); const p = await b.newPage({ viewport: { width: 320, height: 640 } });
await p.goto('http://localhost:4785/sitefront/perfixt-aannemersbedrijf-made/', { waitUntil: 'networkidle' });
console.log(await p.evaluate(() => [...document.querySelectorAll('body *')].filter(e => e.getBoundingClientRect().right > 320.5 && !e.closest('[aria-label="Reviews, veeg voor meer"]') && !e.closest('.overflow-x-auto')).slice(0, 12).map(e => e.tagName + '.' + e.className.toString().slice(0, 60) + ' ' + Math.round(e.getBoundingClientRect().right) + ' ' + (e.innerText||'').slice(0,40)).join('\n')));
await b.close();
