import { chromium } from 'playwright';
const b = await chromium.launch(); const p = await b.newPage({ viewport: { width: 390, height: 844 }, isMobile: true, hasTouch: true });
await p.goto('https://www.goudsmederijleerdam.nl/', { waitUntil: 'networkidle' }); await p.waitForTimeout(2000);
console.log('sw', await p.evaluate(() => document.documentElement.scrollWidth));
await p.screenshot({ path: 'bron/site/oud-390.png' });
await p.setViewportSize({ width: 1440, height: 900 }); await p.reload({ waitUntil: 'networkidle' }); await p.waitForTimeout(1500); await p.screenshot({ path: 'bron/site/oud-1440.png' });
console.log(await p.evaluate(() => [...document.querySelectorAll('footer a, #footer-bottom a, .et-social-icon a')].map(a => a.className + ' ' + a.getAttribute('href')).join('\n')));
await b.close();
