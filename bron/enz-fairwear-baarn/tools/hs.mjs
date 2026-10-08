import { chromium } from 'playwright';
const b = await chromium.launch(); const p = await (await b.newContext({ viewport: { width: 1440, height: 900 } })).newPage();
await p.goto('http://localhost:4453/sitefront/enz-fairwear-baarn/', { waitUntil: 'networkidle' });
console.log(await p.evaluate(() => [...document.querySelectorAll('main > section, footer')].map(e => (e.id || e.tagName) + ':' + Math.round(e.getBoundingClientRect().height)).join(' ')));
await b.close();
