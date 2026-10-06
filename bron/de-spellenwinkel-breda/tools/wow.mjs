import { chromium } from 'playwright';
const b = await chromium.launch(); const p = await (await b.newContext({ viewport: { width: 1440, height: 900 } })).newPage();
await p.goto('http://localhost:4406/sitefront/de-spellenwinkel-breda/#speltip', { waitUntil: 'networkidle' });
await p.selectOption('#t-soort', 'legpuzzel'); await p.selectOption('#t-spelers', '1 speler'); await p.selectOption('#t-wie', 'volwassenen');
console.log(decodeURIComponent(await p.getAttribute('[data-tip-wa]', 'href')), await p.getAttribute('[data-tip-shop]', 'href'));
await p.selectOption('#t-soort', 'Trading Card Game'); console.log(await p.getAttribute('[data-tip-shop]', 'href'), await p.textContent('[data-tip-shop]'));
await p.locator('#speltip').screenshot({ path: 'shots/wow-1440.png' });
await b.close();
