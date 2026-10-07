import { chromium } from 'playwright';
const b = await chromium.launch();
for (const w of [1440, 390]) { const p = await (await b.newContext({ viewport: { width: w, height: 900 } })).newPage();
await p.goto('http://localhost:4439/sitefront/kermul-oosterhout/', { waitUntil: 'networkidle' });
console.log(w, await p.evaluate(() => [...document.querySelectorAll('main > section, footer')].map(e => (e.id || e.tagName) + ':' + Math.round(e.getBoundingClientRect().height)).join(' '))); }
await b.close();
