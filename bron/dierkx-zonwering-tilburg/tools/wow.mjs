import { chromium } from 'playwright';
const b = await chromium.launch();
for (const w of [1440, 390]) {
const p = await (await b.newContext({ viewport: { width: w, height: 1000 } })).newPage();
await p.goto('http://localhost:4476/sitefront/dierkx-zonwering-tilburg/#offerte', { waitUntil: 'networkidle' });
await p.selectOption('#o-product', 'knikarmscherm'); await p.fill('#o-breed', '4500'); await p.fill('#o-tweede', '3000'); await p.fill('#o-plaats', 'Tilburg'); await p.check('[data-advies]');
await p.waitForTimeout(800); await p.locator('#offerte').screenshot({ path: `shots/wow-${w}.png` });
console.log(w, await p.textContent('[data-maatwoord]'), await p.$$eval('#offerte .straal.aan', s => s.length), decodeURIComponent(await p.getAttribute('[data-wa]', 'href')));
}
await b.close();
