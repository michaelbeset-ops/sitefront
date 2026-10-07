import { chromium } from 'playwright'; import fs from 'node:fs';
const b = await chromium.launch();
const ctx = await b.newContext({ locale: 'nl-NL', userAgent: 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/140.0.0.0 Safari/537.36', viewport: { width: 1400, height: 1000 } });
const p = await ctx.newPage();
await p.goto('https://www.google.com/maps/search/Nellie%27s+private+dining+Oudelandsedijk+6+Tholen?hl=nl', { waitUntil: 'domcontentloaded' });
await p.waitForTimeout(3000);
if (p.url().includes('consent')) { await p.getByRole('button', { name: /Alles afwijzen|Reject all/ }).first().click(); await p.waitForTimeout(5000); }
await p.waitForTimeout(3000);
const art = p.locator('a.hfpxzc').first(); if (await art.count()) { await art.click(); await p.waitForTimeout(5000); }
await p.screenshot({ path: 'bron/google/g0.png' }); console.log(await p.evaluate(() => [...document.querySelectorAll('[role=tab], button[aria-label]')].map(e => e.getAttribute('aria-label') || e.innerText).slice(0,40).join(' / ')));
// Over-tab
try { await p.getByRole('tab', { name: /^Over/ }).first().click({ timeout: 5000 }); await p.waitForTimeout(3000); fs.writeFileSync('bron/google/over.txt', await p.evaluate(() => document.querySelector('[role=main]')?.innerText || '')); } catch { console.log('geen over'); }
try { await p.getByRole('tab', { name: /^Menu/ }).first().click({ timeout: 5000 }); await p.waitForTimeout(3000); fs.writeFileSync('bron/google/menu.txt', await p.evaluate(() => document.querySelector('[role=main]')?.innerText || '')); await p.screenshot({ path: 'bron/google/menu.png' }); } catch { console.log('geen menu'); }
await p.getByRole('tab', { name: /^Overzicht/ }).first().click({ timeout: 5000 }).catch(()=>{}); await p.waitForTimeout(2000);
await p.locator('button[aria-label*="Foto"]').first().click().catch(()=>console.log('geen fotoknop')); await p.waitForTimeout(4000);
const urls = new Set();
for (let i = 0; i < 25; i++) {
  (await p.evaluate(() => [...document.querySelectorAll('[style*="googleusercontent"], img[src*="googleusercontent"]')].map(e => e.src || (e.style.backgroundImage.match(/url\("?(.*?)"?\)/) || [])[1]).filter(Boolean))).forEach(u => urls.add(u));
  await p.evaluate(() => document.querySelectorAll('div').forEach(d => { if (d.scrollHeight > d.clientHeight + 50 && d.clientHeight > 300) d.scrollBy(0, 1200); }));
  await p.waitForTimeout(900);
}
let n = 0; const out = [];
for (const u of urls) { if (!/\/p\/|gps-cs|AF1Q|geougc/.test(u)) continue; const big = u.replace(/=w\d+-h\d+[^&]*$/, '=w1600').replace(/=s\d+[^&]*$/, '=w1600'); const r = await fetch(big); if (!r.ok) continue; const buf = Buffer.from(await r.arrayBuffer()); if (buf.length < 15000) continue; n++; const f = `g-${String(n).padStart(2,'0')}.jpg`; fs.writeFileSync('bron/gfoto/' + f, buf); out.push(f + ' | ' + big); }
fs.writeFileSync('bron/gfoto/gfoto.txt', out.join('\n')); console.log('fotos', n, 'urls', urls.size); await b.close();
