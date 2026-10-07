import { chromium } from 'playwright'; import fs from 'node:fs';
const cat = process.argv[2] || 'Alle'; const max = +(process.argv[3] || 40);
const b = await chromium.launch();
const ctx = await b.newContext({ locale: 'nl-NL', userAgent: 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/140.0.0.0 Safari/537.36', viewport: { width: 1400, height: 1000 } });
const p = await ctx.newPage();
await p.goto('https://www.google.com/maps/search/Marcus+Coffee+Tea+Blends+Lifestyle+Bellamypark+52+Vlissingen?hl=nl', { waitUntil: 'domcontentloaded' });
await p.waitForTimeout(3000);
if (p.url().includes('consent')) { await p.getByRole('button', { name: /Alles afwijzen|Reject all/ }).first().click(); await p.waitForTimeout(5000); }
await p.waitForTimeout(3000);
const art = p.locator('a.hfpxzc').first(); if (await art.count()) { await art.click(); await p.waitForTimeout(5000); }
await p.locator('button[aria-label*="Foto"]').first().click().catch(()=>console.log('geen fotoknop')); await p.waitForTimeout(4000);
console.log('tabs:', await p.evaluate(() => [...document.querySelectorAll('[role=tab]')].map(e => e.getAttribute('aria-label') || e.innerText).join(' / ')));
if (cat !== 'Alle') { await p.getByRole('tab', { name: new RegExp(cat) }).first().click({ timeout: 5000 }).catch(e=>console.log('cat fail')); await p.waitForTimeout(4000); }
await p.screenshot({ path: `bron/gfoto/_${cat}.png` });
const urls = [];
for (let i = 0; i < 30; i++) {
  (await p.evaluate(() => [...document.querySelectorAll('a[data-photo-index] [style*="googleusercontent"], [role=img][style*="googleusercontent"], div[style*="googleusercontent"]')].map(e => (e.style.backgroundImage.match(/url\("?(.*?)"?\)/) || [])[1]).filter(Boolean))).forEach(u => { if (!urls.includes(u)) urls.push(u); });
  await p.evaluate(() => document.querySelectorAll('div').forEach(d => { if (d.scrollHeight > d.clientHeight + 50 && d.clientHeight > 300) d.scrollBy(0, 1200); }));
  await p.waitForTimeout(900);
}
const dir = `bron/gfoto/${cat}`; fs.mkdirSync(dir, { recursive: true });
let n = 0; const out = [];
for (const u of urls) { if (!/grass-cs|gps-cs-s|\/p\/AF1Q|geougc/.test(u)) continue; if (n >= max) break; const big = u.replace(/=w\d+-h\d+[^&]*$/, '=w1600-h1600-k-no').replace(/=s\d+[^&]*$/, '=w1600-h1600-k-no'); const r = await fetch(big); if (!r.ok) continue; const buf = Buffer.from(await r.arrayBuffer()); if (buf.length < 15000) continue; n++; const f = `${String(n).padStart(2,'0')}.jpg`; fs.writeFileSync(`${dir}/${f}`, buf); out.push(f + ' | ' + big); }
fs.writeFileSync(`${dir}/lijst.txt`, out.join('\n')); console.log('fotos', n, 'urls', urls.length); await b.close();
