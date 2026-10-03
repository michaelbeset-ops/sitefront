// Test: tab wisselen, model kiezen, kleur kiezen -> WhatsApp-link; offerteformulier -> WhatsApp-bericht.
import { chromium } from 'playwright';
const b = await chromium.launch(); const ctx = await b.newContext(); const p = await ctx.newPage();
await p.goto('http://localhost:4714/sitefront/perfect-zonwering-zuid-beijerland/');
await p.click('[data-tab="knikarm"]');
await p.click('#paneel-knikarm [data-modelknop="3"]');
await p.click('#paneel-knikarm [data-model="3"] label[title="RAL 7016 antraciet"]');
console.log(decodeURIComponent(await p.getAttribute('#paneel-knikarm [data-model="3"] [data-wa-basis]', 'href')));
console.log('zichtbaar Gota:', await p.isVisible('#paneel-knikarm [data-model="3"]'), 'Oliva:', await p.isVisible('#paneel-knikarm [data-model="0"]'));
await p.click('[data-tab="markiezen"]');
console.log('markiezen zichtbaar:', await p.isVisible('#paneel-markiezen'), 'knikarm:', await p.isVisible('#paneel-knikarm'));
console.log(decodeURIComponent(await p.getAttribute('#paneel-markiezen [data-model="1"] [data-wa-basis]', 'href')));
await p.click('label.keuze:has-text("Rolluiken")'); await p.fill('input[name=naam]', 'Jan'); await p.fill('input[name=plaats]', 'Strijen'); await p.fill('textarea[name=wens]', 'twee ramen, antraciet');
const [np] = await Promise.all([ctx.waitForEvent('page'), p.click('button[type=submit]')]);
console.log(decodeURIComponent(np.url()));
console.log(await p.textContent('[data-status]'));
await b.close();
