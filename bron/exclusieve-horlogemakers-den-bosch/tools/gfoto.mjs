import { chromium } from 'playwright'; import fs from 'node:fs';
const b = await chromium.launch();
const ctx = await b.newContext({ locale: 'nl-NL', userAgent: 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/140.0.0.0 Safari/537.36', viewport: { width: 1400, height: 1000 } });
const p = await ctx.newPage();
await p.goto('https://www.google.com/maps/search/B.G.L.+Gold+%26+Silver+Kamp+13+Amersfoort?hl=nl', { waitUntil: 'domcontentloaded' });
await p.waitForTimeout(3000);
if (p.url().includes('consent')) { await p.getByRole('button', { name: /Alles afwijzen|Reject all/ }).first().click(); await p.waitForTimeout(5000); }
await p.waitForTimeout(4000);
const art = p.locator('a.hfpxzc').first(); if (await art.count()) { await art.click(); await p.waitForTimeout(5000); }
await p.locator('button[aria-label*="Foto"]').first().click().catch(()=>console.log('geen fotoknop')); await p.waitForTimeout(4000);
const tabs = await p.evaluate(() => [...document.querySelectorAll('[role=tab]')].map(e => e.getAttribute('aria-label') || e.innerText));
console.log('TABS', tabs.join(' | '));
await p.screenshot({ path: 'bron/google/foto-tabs.png' });
const grab = async (cat) => {
  const urls = new Set();
  for (let i = 0; i < 20; i++) {
    (await p.evaluate(() => [...document.querySelectorAll('[style*="googleusercontent"], img[src*="googleusercontent"]')].map(e => e.src || (e.style.backgroundImage.match(/url\("?(.*?)"?\)/) || [])[1]).filter(Boolean))).forEach(u => urls.add(u));
    await p.evaluate(() => document.querySelectorAll('div').forEach(d => { if (d.scrollHeight > d.clientHeight + 50 && d.clientHeight > 300) d.scrollBy(0, 1200); }));
    await p.waitForTimeout(700);
  }
  const out = []; let n = 0;
  for (const u of urls) { if (!/\/p\/|gps-cs|AF1Q|geougc|grass-cs/.test(u)) continue; const big = u.replace(/=w\d+-h\d+[^&]*$/, '=w1600-h1600-k-no').replace(/=s\d+[^&]*$/, '=w1600-h1600-k-no'); const r = await fetch(big); if (!r.ok) continue; const buf = Buffer.from(await r.arrayBuffer()); if (buf.length < 15000) continue; n++; const f = `${cat}-${String(n).padStart(2,'0')}.jpg`; fs.writeFileSync('bron/gfoto/' + f, buf); out.push(f + ' | ' + big); }
  return out;
};
const all = await grab('alle');
let eig = [];
const t = p.locator('[role=tab]', { hasText: /eigenaar/i }).first();
if (await t.count()) { await t.click(); await p.waitForTimeout(3000); eig = await grab('eig'); } else console.log('geen eigenaar-tab');
fs.writeFileSync('bron/gfoto/gfoto.txt', all.join('\n') + '\n\nEIGENAAR:\n' + eig.join('\n')); console.log('alle', all.length, 'eig', eig.length); await b.close();
