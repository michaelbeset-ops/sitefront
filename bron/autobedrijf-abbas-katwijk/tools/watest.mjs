import { chromium } from 'playwright';
const b = await chromium.launch(); const ctx = await b.newContext(); const p = await ctx.newPage();
await p.goto('http://localhost:4792/sitefront/autobedrijf-abbas-katwijk/');
await p.click('label.keuze:has-text("Grote beurt")'); await p.fill('input[name=kenteken]', 'ab-123-c'); await p.selectOption('select[name=dag]', 'Dinsdag'); await p.fill('input[name=naam]', 'Sanne');
let [np] = await Promise.all([ctx.waitForEvent('page'), p.click('button[type=submit]')]); console.log(decodeURIComponent(np.url())); await np.close();
await p.click('label.tab:has-text("Occasion zoeken")'); await p.fill('input[name=budget]', '9000'); await p.click('label.keuze:has-text("MPV")'); await p.selectOption('select[name=bak]', 'Automaat'); await p.check('input[name=inruil]');
[np] = await Promise.all([ctx.waitForEvent('page'), p.click('button[type=submit]')]); console.log(decodeURIComponent(np.url()));
console.log(await p.textContent('[data-status]'));
await b.close();
