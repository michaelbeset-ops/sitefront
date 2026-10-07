import { chromium } from 'playwright'; import fs from 'node:fs';
const b = await chromium.launch(); const ctx = await b.newContext({ locale: 'nl-NL', viewport: { width: 1400, height: 900 } }); const p = await ctx.newPage();
await p.goto('https://www.google.com/maps/search/Teus+Vlot+Diesel+Marine+Baanhoek+182b+Sliedrecht?hl=nl', { waitUntil: 'domcontentloaded' });
await p.waitForTimeout(2500);
if (p.url().includes('consent')) { await p.getByRole('button', { name: /Alles afwijzen|Reject all/ }).first().click(); await p.waitForTimeout(4000); }
await p.waitForTimeout(5000);
await p.screenshot({ path: 'bron/google/maps.png' });
const t = await p.evaluate(() => document.querySelector('[role=main]')?.innerText || document.body.innerText);
fs.writeFileSync('bron/google/maps.txt', t); console.log(t.slice(0, 2500));
await b.close();
