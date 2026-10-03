// Test: dienstkaart kiest klus, formulier opent WhatsApp met ingevuld bericht; voor/na-tab wisselt.
import { chromium } from 'playwright';
const b = await chromium.launch(); const ctx = await b.newContext(); const p = await ctx.newPage();
await p.goto('http://localhost:4771/sitefront/timmerbedrijf-van-der-meij-pijnacker/');
await p.click('a[data-klus="Veranda of serre"]');
await p.selectOption('select[name=soort]', { index: 2 }); await p.fill('input[name=maat]', '600 x 300 cm');
await p.fill('input[name=plaats]', 'Delfgauw'); await p.fill('input[name=naam]', 'Sanne');
const [np] = await Promise.all([ctx.waitForEvent('page'), p.click('button[type=submit]')]);
console.log(decodeURIComponent(np.url()));
await p.click('[data-tab=vlonder]');
console.log('vlonder zichtbaar', await p.isVisible('#vn-vlonder'), 'serre verborgen', await p.isHidden('#vn-serre'));
await b.close();
