import { chromium } from 'playwright';
const b = await chromium.launch(); const p = await (await b.newContext({ viewport: { width: 390, height: 844 } })).newPage();
await p.goto('http://127.0.0.1:4550/sitefront/lunchroom-mirage-utrecht/', { waitUntil: 'load' });
await p.locator('[data-gerecht="Msemen"]').click(); await p.locator('[data-gerecht="Harira soep"]').click();
console.log('mini zichtbaar:', await p.locator('[data-mini]').isVisible(), await p.locator('[data-mini-tekst]').textContent());
console.log(decodeURIComponent(await p.locator('[data-stuur]').getAttribute('href')));
await p.locator('label:has-text("Met een groep")').click(); await p.locator('[data-personen]').selectOption('8');
console.log(decodeURIComponent(await p.locator('[data-stuur]').getAttribute('href')));
await p.waitForTimeout(2000); await p.screenshot({ path: 'shots/wow-390.png' });

await b.close();
