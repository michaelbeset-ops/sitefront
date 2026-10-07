import { chromium } from 'playwright';
const b = await chromium.launch();
const c = await b.newContext({ viewport: { width: 390, height: 844 }, isMobile: true, hasTouch: true }); const p = await c.newPage();
await p.goto('https://www.nobelfoodtech.nl/contact', { waitUntil: 'networkidle' }); await p.waitForTimeout(3000);
const r = await p.evaluate(() => { const e=[...document.querySelectorAll('font')].find(f=>/Get in touch/.test(f.textContent)); const r=e.getBoundingClientRect(); return [r.x+scrollX, r.y+scrollY, document.documentElement.scrollHeight]; });
console.log(r);
await p.screenshot({ path: 'bron/web/oud-contact-placeholders-m.png', fullPage: true, clip: { x: 0, y: Math.max(0, r[1]-450), width: 768, height: 900 } });
await c.close(); await b.close();
