import { chromium } from 'playwright';
const b = await chromium.launch(); const c = await b.newContext({ viewport: { width: 390, height: 844 } }); const p = await c.newPage();
await p.goto('http://localhost:4461/sitefront/licht-spicy-utrecht/');
await p.click('[data-gerecht="Lam curry"]'); await p.click('[data-gerecht="Pakoda"]');
console.log(await p.textContent('[data-teller]'), '|', await p.textContent('[data-keuze]'));
await p.fill('#f-datum', '2026-11-14'); await p.fill('#f-pers', '40');
const [np] = await Promise.all([c.waitForEvent('page'), p.click('[data-aanvraag] button[type=submit]')]);
console.log(decodeURIComponent(np.url()));
await b.close();
