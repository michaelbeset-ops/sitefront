// Google-profielfoto's (categorie per argument) via headless Chromium; cookiemelding: alles afwijzen.
import { chromium } from 'playwright'; import fs from 'node:fs';
const cat = process.argv[2] || 'Van eigenaar';
const tag = cat.replace(/\W+/g, '');
const b = await chromium.launch(); const ctx = await b.newContext({ locale: 'nl-NL', viewport: { width: 1400, height: 900 } }); const p = await ctx.newPage();
await p.goto('https://www.google.com/maps/search/De+Laat+Kachels+%26+Haarden+Kailakkers+2c+Hooge+Mierde?hl=nl', { waitUntil: 'domcontentloaded' });
await p.waitForTimeout(2500);
if (p.url().includes('consent')) { await p.getByRole('button', { name: /Alles afwijzen|Reject all/ }).first().click(); await p.waitForTimeout(3000); }
await p.waitForSelector('button[aria-label^="Foto van De Laat"]', { timeout: 20000 });
await p.locator('button[aria-label^="Foto van De Laat"]').first().click(); await p.waitForTimeout(3500); console.log((await p.evaluate(() => [...document.querySelectorAll('button')].map((b) => (b.getAttribute('aria-label') || b.textContent).trim()).filter(Boolean))).slice(0,15).join(' / ')); const terug = p.locator('button[aria-label="Terug"]'); if (await terug.count()) { await terug.first().click(); await p.waitForTimeout(3000); }
await p.waitForTimeout(4000);
await p.screenshot({ path: 'bron/google/gal0.png' });
const lab = await p.evaluate(() => [...document.querySelectorAll('button,[role=tab]')].map((b) => (b.getAttribute('aria-label') || b.textContent).trim()).filter(Boolean));
console.log(lab.join(' | '));
const t2 = p.getByRole('tab', { name: cat });
if (await t2.count()) { await t2.first().click(); await p.waitForTimeout(3000); } else console.log('geen tab');
for (let i = 0; i < 20; i++) { await p.mouse.move(300, 500); await p.mouse.wheel(0, 3000); await p.waitForTimeout(700); }
const urls = await p.evaluate(() => { const s = new Set(); document.querySelectorAll('*').forEach((e) => { const bg = e.style && e.style.backgroundImage; const m = bg && bg.match(/(https?:)?\/\/lh\d\.googleusercontent\.com\/(gps-cs-s|grass-cs|p)\/[^"=)]+/); if (m) s.add(m[0].replace(/^\/\//, 'https://')); }); return [...s]; });
await p.screenshot({ path: `bron/google/gal-${tag}.png` });
fs.writeFileSync(`bron/google/gal-${tag}.txt`, urls.join('\n')); console.log(urls.length);
await b.close();
