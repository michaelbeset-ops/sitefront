import { chromium } from 'playwright';
const b = await chromium.launch(); const p = await b.newPage();
await p.goto('http://localhost:4695/sitefront/trimsalon-yvon-hia/');
await p.evaluate(() => { window.open = (u) => { window.__u = u; }; });
await p.fill('[name=hond]', 'Marly'); await p.fill('[name=ras]', 'goldendoodle');
await p.click('[data-wa] .keuze:has-text("Trimmen")'); await p.selectOption('[name=dag]', 'Dinsdag'); await p.fill('[name=naam]', 'Ben');
await p.click('button[type=submit]');
console.log(decodeURIComponent(await p.evaluate(() => window.__u)));
await b.close();
