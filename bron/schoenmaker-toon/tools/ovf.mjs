import { chromium } from 'playwright';
const b = await chromium.launch(); const p = await b.newPage({ viewport: { width: +process.argv[2] || 320, height: 640 } });
await p.goto('http://localhost:4623/sitefront/schoenmaker-toon/' + (process.argv[3] || ''), { waitUntil: 'networkidle' });
console.log(await p.evaluate(() => [...document.querySelectorAll('body *')].filter(e => e.getBoundingClientRect().right > innerWidth + 0.5).slice(0, 8).map(e => e.tagName + '.' + (e.className?.baseVal ?? e.className) + ' ' + Math.round(e.getBoundingClientRect().right) + ' ' + (e.textContent || '').trim().slice(0, 30))));
await b.close();
