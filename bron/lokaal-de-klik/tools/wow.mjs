import { chromium } from 'playwright';
const b = await chromium.launch(); const p = await (await b.newContext({ viewport: { width: 390, height: 844 }, isMobile: true, hasTouch: true })).newPage();
await p.goto('http://127.0.0.1:4511/sitefront/lokaal-de-klik/', { waitUntil: 'networkidle' });
await p.evaluate(() => document.querySelectorAll('.rijs').forEach(e => e.classList.add('in')));
// tafel
await p.locator('[data-personen] [data-plus]').click(); await p.locator('[data-personen] [data-plus]').click();
await p.locator('label.keuze:has-text("Terrasje aan het water")').click();
await p.locator('label.keuze:has-text("Zaterdag")').click();
await p.fill('#naam', 'Sanne');
console.log(await p.locator('[data-voorbeeld]').innerText()); console.log('---');
await p.locator('.bon').scrollIntoViewIfNeeded(); await p.waitForTimeout(400); await p.screenshot({ path: 'shots/wow-tafel-390.png' });
// bestellen via kaart
await p.click('[data-voeg="Soep van de dag"]'); await p.waitForTimeout(600);
await p.locator('[data-rij="Broodje tonijnsalade"] [data-plus]').click();
await p.locator('[data-rij="Taart van de dag"] [data-plus]').click();
await p.locator('label.keuze:has-text("Wit")').click();
console.log(await p.locator('[data-voorbeeld]').innerText());
console.log(decodeURIComponent(await p.locator('[data-verstuur]').getAttribute('href')).slice(0, 60));
await p.locator('.bon').scrollIntoViewIfNeeded(); await p.waitForTimeout(400); await p.screenshot({ path: 'shots/wow-bestel-390.png' });
await b.close();
