import { chromium } from 'playwright';
const b = await chromium.launch(); const ctx = await b.newContext(); const p = await ctx.newPage();
await p.goto('http://localhost:4705/sitefront/mareta-wellness-krimpen/');
await p.click('label.rij:has-text("Bamboemassage")'); await p.click('label.duur:has-text("40 min")');
console.log('prijs', await p.textContent('[data-prijs-uit]'));
await p.selectOption('select[name=dag]', 'Woensdag'); await p.fill('input[name=naam]', 'Sanne');
const [np] = await Promise.all([ctx.waitForEvent('page'), p.click('[data-kies] button[type=submit]')]);
console.log(decodeURIComponent(np.url()));
await b.close();
