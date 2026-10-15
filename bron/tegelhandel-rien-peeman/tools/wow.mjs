import { chromium } from 'playwright';
const b = await chromium.launch(); const p = await (await b.newContext({ viewport: { width: 1440, height: 900 } })).newPage();
await p.goto('http://127.0.0.1:4525/sitefront/tegelhandel-rien-peeman/#planner', { waitUntil: 'networkidle' });
await p.click('text=Houtlook'); await p.click('label:text-is("20 x 120")'); await p.fill('#m2', '35'); await p.dispatchEvent('#m2', 'input');
console.log(decodeURIComponent(await p.getAttribute('[data-wa]', 'href')));
console.log(await p.textContent('[data-aantal]'));
await p.locator('[data-vlak]').screenshot({ path: 'shots/u1-planner.png' }); await b.close();
