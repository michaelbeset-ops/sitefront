import { chromium } from 'playwright'; import fs from 'node:fs';
const b = await chromium.launch({ args: ['--disable-blink-features=AutomationControlled'] });
const p = await (await b.newContext({ locale: 'nl-NL', viewport: { width: 1440, height: 1000 }, userAgent: 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/140.0.0.0 Safari/537.36' })).newPage();
await p.goto('https://www.google.com/maps/place/J.+Slooter/@51.7469024,4.5959863,17z/data=!3m1!4b1!4m6!3m5!1s0x47c42573d6932fa3:0xd73f8f2025bdf3dc!8m2!3d51.7469024!4d4.5959863!16s%2Fg%2F1tx_5jdr?hl=nl', { waitUntil: 'domcontentloaded' });
await p.waitForTimeout(2500);
const af = p.locator('button:visible:has-text("Alles afwijzen")').first(); if (await af.count()) { await af.click(); await p.waitForTimeout(4000); }
await p.waitForTimeout(3000);
await p.locator('button:has-text("Foto\'s bekijken"), button[aria-label*="Foto"]').first().click().catch(e => console.log('noclick'));
await p.waitForTimeout(5000);
for (let i = 0; i < 6; i++) { await p.mouse.wheel(0, 2000); await p.waitForTimeout(800); }
await p.screenshot({ path: 'bron/google/fotos.png' });
const tabs = await p.$$eval('button[role=tab]', ts => ts.map(t => t.innerText));
const urls = await p.evaluate(() => { const s = new Set(); document.querySelectorAll('[style*="googleusercontent"], img').forEach(e => { const m = (e.getAttribute('style') || '').match(/url\("?([^")]+)/); const u = m ? m[1] : e.src; if (u && /googleusercontent\.com\/(p|gps-cs-s|grass-cs)/.test(u)) s.add(u.split('=')[0]); }); return [...s]; });
console.log(tabs, urls.length);
let i = 0; for (const u of urls) { const r = await fetch(u + '=w1600-h1600-k-no'); fs.writeFileSync(`bron/google/foto/g${String(++i).padStart(2, '0')}.jpg`, Buffer.from(await r.arrayBuffer())); }
fs.writeFileSync('bron/google/foto/urls.json', JSON.stringify(urls, null, 1));
await b.close();
