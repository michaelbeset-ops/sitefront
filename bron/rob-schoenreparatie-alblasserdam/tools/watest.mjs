import { chromium } from 'playwright';
const b = await chromium.launch(); const p = await b.newPage();
await p.goto('http://localhost:4634/sitefront/rob-schoenreparatie-alblasserdam/');
await p.locator('.keus label').nth(1).click(); await p.fill('textarea[name=vraag]', 'Kunt u een autosleutel bijmaken?');
console.log(decodeURIComponent(await p.getAttribute('[data-wa-knop]', 'href')));
console.log(await p.textContent('[data-status]'), '|', await p.$$eval('tr.vandaag th', e => e.map(x => x.textContent)));
await b.close();
