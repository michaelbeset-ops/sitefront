import { chromium } from 'playwright';
const b = await chromium.launch(); const p = await b.newPage({ viewport: { width: 1024, height: 768 } });
await p.goto('http://localhost:4684/sitefront/schilderwerken-radi/', { waitUntil: 'networkidle' });
await p.screenshot({ path: 'shots/_w1024.png', clip: { x: 0, y: 0, width: 1024, height: 160 } });
console.log(await p.evaluate(() => document.documentElement.scrollWidth));
await b.close();
