import { chromium } from 'playwright';
const b = await chromium.launch(); const p = await b.newPage({ viewport: { width: 1440, height: 900 } });
await p.goto('http://localhost:4794/sitefront/mark-de-moor-schilderwerken-prinsenbeek/', { waitUntil: 'networkidle' });
console.log(await p.evaluate(() => [...document.querySelectorAll('body > div, header, main > section, footer')].map(s => (s.id || s.getAttribute('aria-label') || s.tagName) + ':' + Math.round(s.getBoundingClientRect().height)).join('  ')));
await b.close();
