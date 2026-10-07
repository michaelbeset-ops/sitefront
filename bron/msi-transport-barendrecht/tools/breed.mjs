import { chromium } from 'playwright';
const b = await chromium.launch(); const p = await (await b.newContext({ viewport: { width: +process.argv[2] || 390, height: 800 } })).newPage();
await p.goto('http://localhost:4430/sitefront/msi-transport-barendrecht/' + (process.argv[3]||''), { waitUntil: 'networkidle' });
console.log(await p.evaluate(() => { const W = innerWidth; return [document.documentElement.scrollWidth, ...[...document.querySelectorAll('body *')].filter(e => e.getBoundingClientRect().right > W + 1).slice(0, 8).map(e => e.tagName + '.' + e.className.toString().slice(0, 60) + ' ' + Math.round(e.getBoundingClientRect().right))]; }));
await b.close();
