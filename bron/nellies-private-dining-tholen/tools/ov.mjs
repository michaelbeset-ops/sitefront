import { chromium } from 'playwright';
const b = await chromium.launch(); const p = await b.newPage({ viewport: { width: 390, height: 800 } });
await p.goto('http://localhost:4395/sitefront/nellies-private-dining-tholen/', { waitUntil: 'networkidle' });
console.log(await p.evaluate(() => [...document.querySelectorAll('body *')].filter(e => e.getBoundingClientRect().right > 391).slice(0, 8).map(e => e.tagName + '.' + String(e.className).slice(0, 80) + ' ' + Math.round(e.getBoundingClientRect().right))));
console.log(await p.evaluate(() => [...document.querySelectorAll('main > section')].map(s => (s.id || s.className.slice(0, 20)) + ':' + Math.round(s.getBoundingClientRect().height)).join(' | ')));
await p.setViewportSize({ width: 1440, height: 900 });
console.log(await p.evaluate(() => [...document.querySelectorAll('main > section')].map(s => (s.id || s.className.slice(0, 20)) + ':' + Math.round(s.getBoundingClientRect().height)).join(' | ')));
await b.close();
