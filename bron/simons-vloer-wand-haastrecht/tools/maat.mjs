import { chromium } from 'playwright';
const w = Number(process.argv[2] || 1440);
const b = await chromium.launch(); const p = await b.newPage({ viewport: { width: w, height: 900 } });
await p.goto('http://localhost:4728/sitefront/simons-vloer-wand-haastrecht/', { waitUntil: 'networkidle' });
console.log(await p.evaluate(() => [...document.querySelectorAll('body > *, main > section, footer')].map((e) => `${e.tagName}#${e.id || ''} ${(e.getAttribute('aria-label')||e.getAttribute('aria-labelledby')||'')} ${Math.round(e.getBoundingClientRect().height)}`).join('\n')));
console.log(await p.evaluate(() => [...document.querySelectorAll('*')].filter((e) => e.getBoundingClientRect().right > innerWidth + 1).slice(0, 8).map((e) => e.tagName + '.' + e.className.toString().slice(0, 80) + ' ' + Math.round(e.getBoundingClientRect().right)).join('\n')));
await b.close();
