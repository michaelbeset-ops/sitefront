import { chromium } from 'playwright';
const b = await chromium.launch(); const p = await (await b.newContext({ viewport: { width: 320, height: 640 } })).newPage();
await p.goto('http://localhost:4439/sitefront/kermul-oosterhout/' + (process.argv[2]||''), { waitUntil: 'networkidle' });
console.log(await p.evaluate(() => [...document.querySelectorAll('body *')].filter(e => e.getBoundingClientRect().right > 321).slice(0, 12).map(e => e.tagName + '.' + String(e.className).slice(0, 70) + ' ' + Math.round(e.getBoundingClientRect().right))));
await b.close();
