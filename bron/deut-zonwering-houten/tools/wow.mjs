import { chromium } from 'playwright';
const b = await chromium.launch();
for (const w of [1440, 390]) {
const p = await (await b.newContext({ viewport: { width: w, height: 1000 } })).newPage();
await p.goto('http://localhost:4469/sitefront/deut-zonwering-houten/#aanwijzen', { waitUntil: 'networkidle' });
await p.click('[data-zone="terras"]'); await p.fill('[data-breedte]', '450'); await p.selectOption('[data-bediening]', { index: 1 }); await p.fill('[data-plaats]', 'Nieuwegein');
console.log('solar disabled bij knikarm:', await p.$eval('[data-solar]', o => o.disabled));
await p.click('[data-zone="boven"] .stip >> nth=0'); await p.click('[data-producten] .keus:text-is("Markisolette")');
await p.waitForTimeout(600); await p.locator('[data-gevel]').screenshot({ path: `shots/wow-${w}.png` });
console.log(await p.textContent('[data-bericht]')); console.log(decodeURIComponent(await p.getAttribute('[data-wa-knop]', 'href')));
}
await b.close();
