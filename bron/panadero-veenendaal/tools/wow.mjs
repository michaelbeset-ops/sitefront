import { chromium } from 'playwright';
const b = await chromium.launch(); const p = await (await b.newContext({ viewport: { width: 1440, height: 900 } })).newPage();
await p.goto('http://localhost:4452/sitefront/panadero-veenendaal/', { waitUntil: 'networkidle' });
for (const n of ['Broodje gezond', 'Broodje grillworst (naturel, kaas of pittig)', 'Chai latte']) await p.click(`[data-gerecht="${n}"]`);
await p.fill('[name=tijd]', '12:30'); await p.fill('[name=personen]', '4'); await p.fill('[name=naam]', 'Sanne');
console.log(decodeURIComponent(await p.getAttribute('[data-verstuur]', 'href')));
await p.locator('#briefje').scrollIntoViewIfNeeded(); await p.waitForTimeout(800);
await p.screenshot({ path: 'shots/wow-1440.png' });
await b.close();
