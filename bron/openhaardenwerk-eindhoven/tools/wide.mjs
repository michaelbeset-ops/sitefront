import { chromium } from 'playwright';
const b = await chromium.launch();
const w = Number(process.argv[2] || 390);
const p = await (await b.newContext({ viewport: { width: w, height: 800 } })).newPage();
await p.goto('http://localhost:4425/sitefront/openhaardenwerk-eindhoven/' + (process.argv[3] || ''), { waitUntil: 'networkidle' });
await p.waitForTimeout(800);
console.log(await p.evaluate(() => [document.documentElement.scrollWidth, ...[...document.querySelectorAll('body *')].filter(e => e.getBoundingClientRect().right > innerWidth + 1).slice(0, 8).map(e => e.tagName + '.' + String(e.className).slice(0, 40) + ' ' + Math.round(e.getBoundingClientRect().right) + ' w=' + e.style.width)]));
await b.close();
