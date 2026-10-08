import { chromium } from 'playwright';
const b = await chromium.launch();
for (const [w,h] of [[1440,900],[390,844]]) { const p = await (await b.newContext({ viewport: { width: w, height: h } })).newPage();
await p.goto('http://localhost:4460/sitefront/diepeveen-interieur-veenendaal/#projecten', { waitUntil: 'load' }); await p.waitForTimeout(1200);
await p.click('[data-regel="1"]'); await p.waitForTimeout(1500); await p.screenshot({ path: `shots/wow-album-${w}.png` });
await p.keyboard.press('Escape');
await p.fill('input[name=wat]', 'een kledingkast onder de schuine kap'); await p.selectOption('select[name=ruimte]', 'de zolder'); await p.fill('input[name=plaats]', 'Ede');
console.log(await p.getAttribute('[data-intake-knop]', 'href'));
await p.locator('#intake').scrollIntoViewIfNeeded(); await p.waitForTimeout(800); await p.locator('[data-intake]').screenshot({ path: `shots/wow-${w}.png` }); }
await b.close();
