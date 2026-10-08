import { chromium } from 'playwright';
const b = await chromium.launch(); const p = await (await b.newContext({ viewport: { width: 390, height: 844 } })).newPage();
await p.goto('http://127.0.0.1:4470/sitefront/steenaart-zonwering-zeist/', { waitUntil: 'networkidle' });
await p.selectOption('[data-wat]', 'een offerte'); await p.selectOption('[data-voor]', 'een rolluik'); await p.fill('[data-breed]', '180'); await p.fill('[data-plaats]', 'Bilthoven');
console.log(decodeURIComponent(await p.getAttribute('[data-stuur]', 'href')));
await p.locator('[data-groot]').first().click(); await p.waitForTimeout(800);
console.log('dialog open', await p.evaluate(() => document.querySelector('[data-lightbox]').open));
await p.screenshot({ path: 'shots/_lightbox-390.png' });
await b.close();
