import { chromium } from 'playwright';
const b = await chromium.launch(); const p = await (await b.newContext({ viewport: { width: 1440, height: 900 } })).newPage();
await p.goto('http://127.0.0.1:4470/sitefront/steenaart-zonwering-zeist/', { waitUntil: 'networkidle' });
console.log(await p.evaluate(() => [...document.querySelectorAll('main > section, main > div, #werk > article, footer')].map(e => (e.id || e.tagName + '.' + (e.className.baseVal ?? e.className).slice(0, 25)) + ' ' + Math.round(e.getBoundingClientRect().height)).join('\n')));
await b.close();
