import { chromium } from 'playwright';
const b = await chromium.launch(); const p = await b.newPage({ viewport: { width: +(process.argv[2]||1440), height: 900 } });
await p.goto('http://localhost:4445/sitefront/sam-zonwering-alblasserdam/', { waitUntil: 'networkidle' });
console.log(await p.evaluate(() => [...document.querySelectorAll('main section, footer')].map(s => (s.id || s.className.slice(0,20)) + ' ' + Math.round(s.getBoundingClientRect().height)).join('\n')));
await b.close();
