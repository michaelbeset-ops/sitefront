import { chromium } from 'playwright'; import fs from 'node:fs';
const b = await chromium.launch({ channel: 'chrome', args: ['--headless=new','--disable-blink-features=AutomationControlled'] });
const ctx = await b.newContext({ locale: 'nl-NL', userAgent: 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/141.0.0.0 Safari/537.36', viewport: { width: 1400, height: 1000 } });
const p = await ctx.newPage();
await p.goto('https://www.google.com/maps/search/' + encodeURIComponent('MSI TRANSPORT BV Zuideinde 2 Barendrecht') + '?hl=nl', { waitUntil: 'load', timeout: 45000 }).catch(()=>{});
await p.waitForTimeout(2500);
const r = p.locator('button:has-text("Alles afwijzen")').first(); if (await r.count()) { await r.click(); await p.waitForTimeout(4000); }
const f = p.locator('a.hfpxzc').first(); if (await f.count()) { await f.click().catch(() => {}); }
await p.waitForTimeout(4000);
await p.locator('button[aria-label*="Foto"]').first().click().catch(()=>console.log('geen fotoknop')); await p.waitForTimeout(4000);
const tabs = await p.evaluate(() => [...document.querySelectorAll('[role=tab], button')].map(e => (e.getAttribute('aria-label')||e.innerText||'').trim()).filter(Boolean).slice(0,60));
console.log(tabs.join(' / '));
const mode = process.argv[2] || 'Alle';
if (mode !== 'Alle') { const t = p.locator(`[role=tab]:has-text("${mode}"), button[aria-label*="${mode}"]`).first(); if (await t.count()) { await t.click(); await p.waitForTimeout(3500); console.log('tab', mode); } else console.log('geen tab', mode); }
await p.screenshot({ path: 'bron/gfoto/_scr-' + mode + '.png' });
const urls = new Set();
for (let i = 0; i < 25; i++) {
  (await p.evaluate(() => [...document.querySelectorAll('[style*="googleusercontent"], img[src*="googleusercontent"]')].map(e => e.src || (e.style.backgroundImage.match(/url\("?(.*?)"?\)/) || [])[1]).filter(Boolean))).forEach(u => urls.add(u));
  await p.evaluate(() => document.querySelectorAll('div').forEach(d => { if (d.scrollHeight > d.clientHeight + 50 && d.clientHeight > 300) d.scrollBy(0, 1200); }));
  await p.waitForTimeout(900);
}
let n = 0; const out = [];
for (const u of urls) { if (!/\/p\/|gps-cs|AF1Q|geougc/.test(u)) continue; const big = u.replace(/=w\d+-h\d+[^&]*$/, '=w1600').replace(/=s\d+[^&]*$/, '=w1600'); const r = await fetch(big); if (!r.ok) continue; const buf = Buffer.from(await r.arrayBuffer()); if (buf.length < 15000) continue; n++; const f = `${mode}-${String(n).padStart(2,'0')}.jpg`; fs.writeFileSync('bron/gfoto/' + f, buf); out.push(f + ' | ' + big); }
fs.writeFileSync(`bron/gfoto/${mode}.txt`, out.join('\n')); console.log('fotos', n, 'urls', urls.size); await b.close();
