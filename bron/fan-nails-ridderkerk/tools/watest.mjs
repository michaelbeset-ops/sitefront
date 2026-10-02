import { chromium } from 'playwright';
const b = await chromium.launch(); const ctx = await b.newContext(); const p = await ctx.newPage();
await p.goto('http://localhost:4672/sitefront/fan-nails-ridderkerk/');
await p.click('label.keuze:has-text("Nail art")'); await p.selectOption('select[name=dag]', 'Zaterdag');
await p.selectOption('select[name=deel]', 'Ochtend'); await p.fill('input[name=naam]', 'Sanne'); await p.fill('textarea[name=wens]', 'kort, nude');
const [np] = await Promise.all([ctx.waitForEvent('page'), p.click('button[type=submit]')]);
console.log(decodeURIComponent(np.url()));
console.log(await p.textContent('[data-status]'));
await b.close();
