import { chromium } from 'playwright';
const b = await chromium.launch(); const p = await b.newPage({ viewport: { width: 1440, height: 900 } });
await p.goto('http://localhost:4795/sitefront/hoveniersbedrijf-heijkamp-nieuwegein/', { waitUntil: 'networkidle' });
console.log(await p.evaluate(() => [...document.querySelectorAll('main > section, footer, header')].map(e => (e.id || e.getAttribute('aria-label') || e.tagName) + ' ' + Math.round(e.getBoundingClientRect().height)).join('\n')));
await b.close();
