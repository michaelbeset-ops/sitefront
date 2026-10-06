import { chromium } from 'playwright';
const b = await chromium.launch(); const p = await b.newPage({ viewport: { width: 390, height: 844 } });
await p.goto('http://localhost:4403/sitefront/romance-weddings-vlaardingen/#aanvragen', { waitUntil: 'networkidle' });
await p.selectOption('#a-soort', 'henna-avond'); await p.fill('#a-datum', '2027-05-15'); await p.fill('#a-gasten', '180'); await p.check('input[name=bekijken]');
console.log(decodeURIComponent(await p.getAttribute('[data-wa]', 'href')));
await p.locator('#aanvragen').screenshot({ path: 'shots/wow-390.png' }); await b.close();
