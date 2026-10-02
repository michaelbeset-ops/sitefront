import { chromium } from 'playwright';
const b = await chromium.launch(); const p = await (await b.newContext({ viewport: { width: 320, height: 640 } })).newPage();
await p.goto('http://localhost:4643/sitefront/mrvie-detailing-barendrecht/' + (process.argv[2] || ''));
console.log(await p.evaluate(() => [...document.querySelectorAll('body *')].filter(e => e.getBoundingClientRect().right > 321).slice(0, 12).map(e => e.tagName + '.' + e.className.toString().slice(0, 50) + ' ' + Math.round(e.getBoundingClientRect().right)).join('\n')));
await b.close();
