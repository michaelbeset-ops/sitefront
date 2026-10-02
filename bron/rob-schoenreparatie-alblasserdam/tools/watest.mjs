import { chromium } from 'playwright';
const b = await chromium.launch(); const c = await b.newContext(); const p = await c.newPage();
await p.goto('http://localhost:4683/sitefront/rob-schoenreparatie-alblasserdam/');
await p.locator('.keuze').nth(1).click(); await p.fill('textarea[name=vraag]', 'Kunt u een autosleutel bijmaken?'); await p.fill('input[name=naam]', 'Test');
const [pop] = await Promise.all([c.waitForEvent('page'), p.click('[data-wa] button[type=submit]')]);
console.log(decodeURIComponent(pop.url()));
console.log(await p.textContent('[data-status]'), '|', await p.$$eval('tr[data-vandaag] th', e => e.map(x => x.textContent)));
await b.close();
