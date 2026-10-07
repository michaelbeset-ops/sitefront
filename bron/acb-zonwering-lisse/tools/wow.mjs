import { chromium } from 'playwright';
const b = await chromium.launch(); const p = await (await b.newContext({ viewport: { width: 1440, height: 1000 } })).newPage();
await p.goto('http://localhost:4421/sitefront/acb-zonwering-lisse/#offerte', { waitUntil: 'networkidle' });
await p.selectOption('[data-soort]', 'screen'); await p.fill('[data-b]', '240'); await p.fill('[data-h]', '180');
await p.click('text=1e verdieping'); await p.selectOption('[data-plaats]', '');
await p.waitForTimeout(800); await p.locator('[data-bon]').screenshot({ path: 'shots/wow-1440.png' });
console.log(await p.textContent('[data-bericht]')); console.log(decodeURIComponent(await p.getAttribute('[data-wa]', 'href')));
console.log('buiten zichtbaar', await p.isVisible('[data-buiten]'));
await b.close();
