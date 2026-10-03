import { chromium } from 'playwright';
const b = await chromium.launch(); const ctx = await b.newContext(); const p = await ctx.newPage();
await p.goto('http://localhost:4729/sitefront/slavenburg-timmerwerken-mijnsheerenland/');
await p.click('label.keuze:has-text("Overkapping of pergola")'); await p.selectOption('select[name=plaats]', 'Westmaas');
await p.selectOption('select[name=wanneer]', 'Zo snel mogelijk'); await p.fill('textarea[name=wens]', 'overkapping tegen de achtergevel'); await p.fill('input[name=naam]', 'Jan');
const [np] = await Promise.all([ctx.waitForEvent('page'), p.click('button[type=submit]')]);
console.log(decodeURIComponent(np.url()));
console.log(await p.textContent('[data-status]'));
await b.close();
