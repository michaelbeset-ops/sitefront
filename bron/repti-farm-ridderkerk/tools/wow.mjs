import { chromium } from 'playwright';
const b = await chromium.launch(); const p = await (await b.newContext({ viewport: { width: 1440, height: 900 } })).newPage();
await p.goto('http://localhost:4405/sitefront/repti-farm-ridderkerk/#zoek', { waitUntil: 'networkidle' });
await p.click('[data-keus="voer"]'); await p.fill('[data-invoer]', 'krekels');
console.log(decodeURIComponent(await p.getAttribute('[data-stuur]', 'href')));
await p.locator('#zoek').screenshot({ path: 'shots/wow-1440.png' });
console.log(await p.evaluate(() => document.querySelector('[data-status]').textContent));
await b.close();
