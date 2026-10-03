import { chromium } from 'playwright';
const b = await chromium.launch(); const ctx = await b.newContext(); const p = await ctx.newPage();
await p.goto('http://localhost:4773/sitefront/van-leeuwen-timmerwerken-boskoop/');
await p.click('label.keuze:has-text("Vliering")'); await p.fill('textarea[name=wens]', 'vliering van 5 bij 3 meter');
await p.fill('input[name=plaats]', 'Gouda'); await p.selectOption('select[name=wanneer]', 'Binnen drie maanden'); await p.fill('input[name=naam]', 'Sanne');
const [np] = await Promise.all([ctx.waitForEvent('page'), p.click('button[value=wa]')]);
console.log(decodeURIComponent(np.url()));
console.log(await p.textContent('[data-status]'));
await b.close();
