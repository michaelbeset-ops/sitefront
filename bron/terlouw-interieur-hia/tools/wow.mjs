import { chromium } from 'playwright';
const b = await chromium.launch(); const p = await b.newPage({ viewport: { width: 1440, height: 900 } });
await p.goto('http://localhost:4449/sitefront/terlouw-interieur-hia/#afspraak', { waitUntil: 'networkidle' });
await p.selectOption('#a-modus', { index: 1 }); await p.selectOption('#a-product', 'terrasschermen'); await p.fill('#a-plaats', 'Zwijndrecht');
await p.waitForTimeout(400); console.log(await p.textContent('[data-bericht]')); console.log(decodeURIComponent(await p.getAttribute('[data-wa]', 'href')));
await p.selectOption('#a-product', 'plissé hordeuren'); await p.fill('#a-aantal', '1'); await p.waitForTimeout(300);
console.log(await p.textContent('[data-bericht]')); console.log(await p.getAttribute('[data-mail]', 'href'));
await p.locator('#afspraak').screenshot({ path: 'shots/wow-1440.png' });
await b.close();
