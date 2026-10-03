import { chromium } from 'playwright';
const b = await chromium.launch(); const ctx = await b.newContext(); const p = await ctx.newPage();
await p.goto('http://localhost:4748/sitefront/sv-loodgieters-sgravendeel/');
await p.click('label.keuze:has-text("Badkamer of toilet")'); await p.click('label.keuze:has-text("Binnen een maand")');
await p.fill('input[name=naam]', 'Kees'); await p.fill('input[name=plaats]', 'Puttershoek'); await p.fill('textarea[name=wens]', 'toilet vervangen');
console.log('VOORBEELD:', await p.textContent('[data-voorbeeld]'));
const [np] = await Promise.all([ctx.waitForEvent('page'), p.click('button[type=submit]')]);
console.log(decodeURIComponent(np.url()));
await b.close();
