import { chromium } from 'playwright';
const b = await chromium.launch(); const ctx = await b.newContext(); const p = await ctx.newPage();
await p.goto('http://localhost:4701/sitefront/barbershop-gullit-sgravendeel/');
await p.click('label.keuze:has-text("Fade")'); await p.click('label.dag:has-text("Donderdag")');
await p.selectOption('select[name=deel]', 'Avond'); await p.fill('input[name=naam]', 'Sem');
const [np] = await Promise.all([ctx.waitForEvent('page'), p.click('button[type=submit]')]);
console.log(decodeURIComponent(np.url()));
console.log(await p.textContent('[data-status]'));
await b.close();
