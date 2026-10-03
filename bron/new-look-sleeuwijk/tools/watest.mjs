import { chromium } from 'playwright';
const b = await chromium.launch(); const ctx = await b.newContext(); const p = await ctx.newPage();
await p.goto('http://localhost:4731/sitefront/new-look-sleeuwijk/');
await p.click('label.keuze:has-text("Knippen en baard")'); await p.click('label.keuze:has-text("Zo meteen")');
await p.selectOption('select[name=aantal]', '2'); await p.fill('input[name=naam]', 'Daan');
const [np] = await Promise.all([ctx.waitForEvent('page'), p.click('button[type=submit]')]);
console.log(decodeURIComponent(np.url()));
console.log(await p.textContent('[data-status]'));
await b.close();
