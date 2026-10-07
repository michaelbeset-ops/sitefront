import { chromium } from 'playwright';
const b = await chromium.launch(); const p = await (await b.newContext({ viewport: { width: +(process.env.W||390), height: 844 } })).newPage();
await p.goto('http://localhost:' + (process.env.POORT || 4431) + '/sitefront/afdekproducten-dordrecht/', { waitUntil: 'networkidle' });
console.log(await p.evaluate(() => [...document.querySelectorAll('body *')].filter(e => e.getBoundingClientRect().right > innerWidth + 1).slice(0, 10).map(e => e.tagName + '.' + e.className.toString().slice(0, 60) + ' ' + Math.round(e.getBoundingClientRect().right)).join('\n')));
await b.close();
