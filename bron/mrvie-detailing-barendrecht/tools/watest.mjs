import { chromium } from 'playwright';
const b = await chromium.launch(); const p = await b.newPage();
await p.goto('http://localhost:4643/sitefront/mrvie-detailing-barendrecht/');
await p.click('[data-kies=full]');
console.log(decodeURIComponent(await p.getAttribute('[data-pakket-knop]', 'href')), '|', await p.textContent('[data-gekozen]'));
await p.goto('http://localhost:4643/sitefront/mrvie-detailing-barendrecht/privacy/'); await p.setViewportSize({ width: 1440, height: 900 });
await p.screenshot({ path: 'shots/privacy-1440.png' });
await b.close();
