import { chromium } from 'playwright';
const b = await chromium.launch(); const ctx = await b.newContext(); const p = await ctx.newPage();
await p.goto('http://localhost:4770/sitefront/donk-loon-kraanverhuur-streefkerk/');
await p.click('label.keuze:has-text("Sloot- of oeverwerk")'); await p.click('label.keuze:has-text("Baggeren")'); await p.click('label.keuze:has-text("Agrariër")');
await p.fill('input[name=waar]', 'Groot-Ammers'); await p.selectOption('select[name=wanneer]', 'Binnen twee weken'); await p.fill('input[name=naam]', 'Jan');
const [np] = await Promise.all([ctx.waitForEvent('page'), p.click('button[type=submit]')]);
console.log(decodeURIComponent(np.url()));
await b.close();
