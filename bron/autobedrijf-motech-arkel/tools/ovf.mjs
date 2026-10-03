import { chromium } from 'playwright';
const b = await chromium.launch(); const p = await (await b.newContext({ viewport: { width: 390, height: 844 } })).newPage();
await p.goto('http://localhost:4742/sitefront/autobedrijf-motech-arkel/' + (process.argv[2]||''), { waitUntil: 'networkidle' });
console.log(await p.evaluate(() => [...document.querySelectorAll('body *')].filter(e => e.getBoundingClientRect().right > innerWidth + 1).slice(0, 12).map(e => e.tagName + '.' + String(e.className).slice(0, 80) + ' R=' + Math.round(e.getBoundingClientRect().right)).join('\n')));
await b.close();
