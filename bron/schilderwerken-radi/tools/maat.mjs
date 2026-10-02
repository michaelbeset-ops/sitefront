import { chromium } from 'playwright';
const w = Number(process.argv[2] || 1440);
const b = await chromium.launch(); const p = await b.newPage({ viewport: { width: w, height: 900 } });
await p.goto('http://localhost:4684/sitefront/schilderwerken-radi/', { waitUntil: 'networkidle' });
console.log(await p.evaluate(() => [...document.querySelectorAll('body > div, header, main > section, footer')].map((s) => `${s.id || s.tagName} ${s.getAttribute('aria-label')||''} ${Math.round(s.getBoundingClientRect().height)}`).join('\n')));
await b.close();
