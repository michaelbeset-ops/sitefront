import { chromium } from 'playwright';
const b = await chromium.launch(); const ctx = await b.newContext(); const p = await ctx.newPage();
await p.goto('http://localhost:4747/sitefront/tegel-bouwbedrijf-hus-maassluis/');
await p.click('label.keuze:has-text("Badkamer")'); await p.fill('input[name=m2]', '6'); await p.selectOption('select[name=start]', 'Binnen 3 maanden');
await p.fill('input[name=plaats]', 'Vlaardingen'); await p.fill('input[name=naam]', 'Sanne');
const [np] = await Promise.all([ctx.waitForEvent('page'), p.click('button[type=submit]')]);
console.log(decodeURIComponent(np.url())); console.log(await p.textContent('[data-status]'));
await b.close();
