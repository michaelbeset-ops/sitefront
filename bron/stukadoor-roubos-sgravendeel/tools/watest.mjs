import { chromium } from 'playwright';
const b = await chromium.launch(); const ctx = await b.newContext(); const p = await ctx.newPage();
await p.goto('http://localhost:4712/sitefront/stukadoor-roubos-sgravendeel/');
await p.click('label.keuze:has-text("Plafond")'); await p.selectOption('select[name=ruimte]', 'Woonkamer');
await p.fill('input[name=m2]', '35'); await p.fill('input[name=plaats]', 'Puttershoek'); await p.fill('input[name=naam]', 'Sanne');
console.log(await p.textContent('[data-voorbeeld]'));
const [np] = await Promise.all([ctx.waitForEvent('page'), p.click('button[type=submit]')]);
console.log(decodeURIComponent(np.url()).slice(0, 300));
await b.close();
