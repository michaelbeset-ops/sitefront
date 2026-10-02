import { chromium } from 'playwright';
const b = await chromium.launch();
for (const w of [1440, 390]) {
const p = await b.newPage({ viewport: { width: w, height: 900 } });
await p.goto('http://localhost:4663/sitefront/maximum-detailing-ridderkerk/', { waitUntil: 'networkidle' });
console.log(w, await p.evaluate(() => [...document.querySelectorAll('main > section, body > section, footer')].map(s => (s.id || s.getAttribute('aria-labelledby') || s.tagName) + ':' + Math.round(s.getBoundingClientRect().height)).join(' ')));
}
await b.close();
