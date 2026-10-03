import { chromium } from 'playwright';
const b = await chromium.launch(); const ctx = await b.newContext(); const p = await ctx.newPage();
await p.goto('http://localhost:4766/sitefront/baan-woningstoffering-hia/');
await p.click('label.keuze:has-text("Vinyl")'); await p.click('label.keuze:has-text("Trap bekleden")');
await p.click('label.keuze:has-text("Woonkamer")'); await p.check('input[value="meubels verplaatsen"]');
await p.fill('input[name=plaats]', 'Zwijndrecht'); await p.fill('input[name=naam]', 'Sanne de Vries');
const [np] = await Promise.all([ctx.waitForEvent('page'), p.click('button[type=submit]')]);
console.log(decodeURIComponent(np.url()));
await b.close();
