import { chromium } from 'playwright';
const b = await chromium.launch(); const p = await b.newPage({ viewport: { width: 320, height: 640 } });
await p.goto('http://localhost:4692/sitefront/rijschool-herman-ridderkerk/', { waitUntil: 'networkidle' });
console.log(await p.evaluate(() => [...document.querySelectorAll('body *')].filter(e => e.getBoundingClientRect().right > 321 && !e.closest('[class*="overflow-x-auto"]')).slice(0, 8).map(e => e.tagName + '.' + e.className.toString().slice(0, 60) + ' ' + Math.round(e.getBoundingClientRect().right))));
console.log(await p.evaluate(() => [...document.querySelectorAll('section')].map(s => (s.getAttribute('aria-labelledby')||s.getAttribute('aria-label')) + ':' + s.offsetHeight).join(' ')));
await p.setViewportSize({ width: 1440, height: 900 }); await p.waitForTimeout(300);
console.log(await p.evaluate(() => [...document.querySelectorAll('section')].map(s => (s.getAttribute('aria-labelledby')||s.getAttribute('aria-label')) + ':' + s.offsetHeight).join(' ')));
await b.close();
