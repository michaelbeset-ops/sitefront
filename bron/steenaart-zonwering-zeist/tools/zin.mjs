import { chromium } from 'playwright';
const b = await chromium.launch();
for (const w of [1440, 390]) {
const p = await (await b.newContext({ viewport: { width: w, height: 900 } })).newPage();
await p.goto('http://127.0.0.1:4470/sitefront/steenaart-zonwering-zeist/#advies', { waitUntil: 'networkidle' });
await p.waitForTimeout(1500);
await p.locator('#advies').screenshot({ path: `shots/_zin-${w}.png` });
console.log(await p.evaluate(() => [...document.querySelectorAll('.woord')].map(e => e.style.width + ' ' + e.getBoundingClientRect().width)));
}
await b.close();
