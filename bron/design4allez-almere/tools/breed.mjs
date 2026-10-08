import { chromium } from 'playwright';
const b = await chromium.launch(); const p = await (await b.newContext({ viewport: { width: 320, height: 640 } })).newPage();
await p.goto('http://localhost:4468/sitefront/design4allez-almere/', { waitUntil: 'networkidle' });
console.log(await p.evaluate(() => [...document.querySelectorAll('body *')].filter(e => e.getBoundingClientRect().right > innerWidth + 1).slice(0, 12).map(e => e.tagName + '.' + (e.className.baseVal ?? e.className).toString().slice(0, 60) + ' ' + Math.round(e.getBoundingClientRect().right) + ' ' + (e.textContent || '').trim().slice(0, 30))));
await b.close();
