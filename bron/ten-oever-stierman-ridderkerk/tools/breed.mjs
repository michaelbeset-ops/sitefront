import { chromium } from 'playwright';
const b = await chromium.launch(); const p = await b.newPage({ viewport: { width: 320, height: 640 } });
await p.goto('http://localhost:4745/sitefront/ten-oever-stierman-ridderkerk/', { waitUntil: 'networkidle' });
const r = await p.evaluate(() => [...document.querySelectorAll('body *')].filter(e => e.getBoundingClientRect().right > 321).map(e => e.tagName + '.' + String(e.className).slice(0, 60) + ' ' + Math.round(e.getBoundingClientRect().right)).slice(0, 15));
console.log(r.join('\n')); await b.close();
