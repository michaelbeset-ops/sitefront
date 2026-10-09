import { chromium } from 'playwright';
const b = await chromium.launch({ channel: 'chrome' });
for (const w of [1440, 390]) {
const p = await (await b.newContext({ viewport: { width: w, height: 900 } })).newPage();
await p.goto('http://127.0.0.1:4481/sitefront/js-buitenkeukens/', { waitUntil: 'networkidle' });
console.log(w, await p.evaluate(() => [...document.querySelectorAll('main > section, footer')].map(s => (s.id || s.tagName) + ':' + Math.round(s.getBoundingClientRect().height)).join(' ')));
}
await b.close();
