// Test van de reserveerhulp: type, duur, andere locatie, datum/tijd, naam -> WhatsApp-tekst.
import { chromium } from 'playwright';
const b = await chromium.launch(); const ctx = await b.newContext(); const p = await ctx.newPage();
const errs = []; p.on('pageerror', (e) => errs.push(e.message));
await p.goto('http://localhost:4811/sitefront/laaiin-aanhangwagenverhuur-hank/');
await p.click('label.tegel:has(input[value="c"])');
await p.click('label.tegel:has(input[value="3d"])');
await p.fill('[data-loc-zoek]', 'tilburg');
await p.waitForTimeout(200);
console.log('resultaten:', await p.locator('[data-loc-lijst] li').count());
await p.locator('[data-loc-lijst] button').first().click();
await p.fill('#r-datum', '2026-10-10'); await p.selectOption('#r-tijd', '10.00 uur'); await p.fill('#r-naam', 'Test');
console.log('prijs', await p.textContent('[data-sam-prijs]'), '|', await p.textContent('[data-sam-borg]'), '|', await p.textContent('[data-sam-loc]'));
const [np] = await Promise.all([ctx.waitForEvent('page'), p.click('button[type=submit]')]);
console.log(decodeURIComponent(np.url()));
// motor in Hank
await p.click('[data-kies-type="motor"]'); await p.waitForTimeout(100);
console.log('motor', await p.textContent('[data-sam-prijs]'), await p.textContent('[data-sam-loc]'));
// type D bij locatie zonder D
await p.click('label.tegel:has(input[value="b"])');
await p.fill('[data-lz]', 'Amsterdam-Noord'); await p.waitForTimeout(100);
await p.click('[data-l-lijst] button'); await p.waitForTimeout(300);
console.log('disabled D:', await p.locator('input[name=type][value="d"]').isDisabled(), await p.textContent('[data-sam-loc]'));
// tarieven-tab
await p.click('label.tab:has(input[value="3"])');
console.log('zichtbare panelen:', await p.locator('.paneel:visible').count(), await p.locator('.paneel:visible tbody th').first().textContent());
console.log('errors:', errs.join(' | ') || 'geen');
await b.close();
