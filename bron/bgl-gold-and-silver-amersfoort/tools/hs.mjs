import { chromium } from 'playwright';
const b = await chromium.launch(); const p = await (await b.newContext({ viewport: { width: +(process.argv[2]||1440), height: 900 } })).newPage();
await p.goto('http://localhost:4426/sitefront/bgl-gold-and-silver-amersfoort/', { waitUntil: 'networkidle' });
console.log(await p.evaluate(() => [...document.querySelectorAll('main > section, footer')].map(s => (s.id||s.tagName) + ' ' + Math.round(s.getBoundingClientRect().height)).join('\n')));
await b.close();
