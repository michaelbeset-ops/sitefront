import { chromium } from 'playwright';
const b = await chromium.launch(); const p = await b.newPage({ viewport: { width: 320, height: 640 } });
await p.goto('http://localhost:4425/sitefront/kooiman-marine-group/', { waitUntil: 'networkidle' });
console.log(await p.evaluate(() => [...document.querySelectorAll('body *')].filter((e) => e.getBoundingClientRect().right > 320.5 && e.offsetParent !== null).slice(0, 8).map((e) => e.tagName + '.' + (e.className?.baseVal ?? e.className).toString().slice(0, 60) + ' ' + Math.round(e.getBoundingClientRect().right) + ' ' + (e.textContent || '').trim().slice(0, 40))));
await b.close();
