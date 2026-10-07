import { chromium } from 'playwright'; import fs from 'node:fs';
const b = await chromium.launch();
const ctx = await b.newContext({ locale: 'nl-NL', userAgent: 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/140.0.0.0 Safari/537.36', viewport: { width: 1400, height: 1000 } });
const p = await ctx.newPage();
for (let t = 0; t < 6; t++) {
await p.goto('https://www.google.com/maps/search/Marcus+Coffee+Tea+Blends+Lifestyle+Bellamypark+52+Vlissingen?hl=nl', { waitUntil: 'domcontentloaded' });
await p.waitForTimeout(3000);
if (p.url().includes('consent')) { await p.getByRole('button', { name: /Alles afwijzen|Reject all/ }).first().click(); await p.waitForTimeout(5000); }
await p.waitForTimeout(3000);
const art = p.locator('a.hfpxzc').first(); if (await art.count()) { await art.click(); await p.waitForTimeout(5000); }
if (await p.getByRole('tab', { name: /^Menu/ }).count()) break; console.log('retry', t); }
await p.getByRole('tab', { name: /^Menu/ }).first().click({ timeout: 8000 }); await p.waitForTimeout(3000);
// open first menu photo and step through
await p.locator('button[aria-label^="Menu"], [aria-label*="Foto 1 van"]').first().click().catch(()=>{});
const urls = new Set();
for (let i = 0; i < 6; i++) { (await p.evaluate(() => [...document.querySelectorAll('img[src*="googleusercontent"], [style*="googleusercontent"]')].map(e => e.src || (e.style.backgroundImage.match(/url\("?(.*?)"?\)/) || [])[1]).filter(Boolean))).forEach(u => urls.add(u)); await p.evaluate(() => document.querySelectorAll('div').forEach(d => { if (d.scrollWidth > d.clientWidth + 50) d.scrollBy(400, 0); })); await p.waitForTimeout(800); }
await p.screenshot({ path: 'bron/google/menu2.png' });
fs.mkdirSync('bron/google/menu', { recursive: true }); let n = 0; const out = [];
for (const u of urls) { if (!/gps-cs-s|grass-cs|\/p\/AF1Q|geougc/.test(u)) continue; const big = u.replace(/=[whs]\d+[^&/]*$/, '=w2400-h2400-k-no'); const r = await fetch(big); if (!r.ok) continue; const buf = Buffer.from(await r.arrayBuffer()); n++; fs.writeFileSync(`bron/google/menu/m${String(n).padStart(2,'0')}.jpg`, buf); out.push(`m${n} | ${big}`); }
fs.writeFileSync('bron/google/menu/lijst.txt', out.join('\n')); console.log(n, urls.size); await b.close();
