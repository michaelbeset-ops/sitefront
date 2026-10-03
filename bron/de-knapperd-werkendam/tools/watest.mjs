import { chromium } from 'playwright';
const b = await chromium.launch(); const ctx = await b.newContext(); const p = await ctx.newPage();
await p.goto('http://localhost:4730/sitefront/de-knapperd-werkendam/');
await p.click('label.keuze:has-text("Wasbeurt")'); await p.selectOption('select[name=dag]', 'Donderdag');
await p.fill('input[name=hond]', 'Bobbie'); await p.fill('input[name=ras]', 'shih tzu'); await p.fill('input[name=naam]', 'Sanne');
const [np] = await Promise.all([ctx.waitForEvent('page'), p.click('button[type=submit]')]);
console.log(decodeURIComponent(np.url()));
console.log(await p.textContent('[data-status]'));
await b.close();
