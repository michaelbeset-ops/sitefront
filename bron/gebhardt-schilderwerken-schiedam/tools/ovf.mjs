import { chromium } from 'playwright';
const b = await chromium.launch(); const p = await (await b.newContext({ viewport: { width: Number(process.env.W||390), height: 844 } })).newPage();
await p.goto('http://localhost:' + (process.env.PORT || 4770) + '/sitefront/gebhardt-schilderwerken-schiedam/', { waitUntil: 'networkidle' });
console.log(await p.evaluate(() => [...document.querySelectorAll('body *')].filter(e => e.getBoundingClientRect().right > innerWidth + 2).slice(0, 8).map(e => e.tagName + '.' + e.className.toString().slice(0, 60) + ' ' + Math.round(e.getBoundingClientRect().right))));
await b.close();
