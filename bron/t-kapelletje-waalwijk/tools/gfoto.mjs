import { chromium } from 'playwright'; import fs from 'node:fs';
const b = await chromium.launch();
const ctx = await b.newContext({ locale: 'nl-NL', userAgent: 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/140.0.0.0 Safari/537.36', viewport: { width: 1400, height: 1000 } });
const p = await ctx.newPage();
await p.goto('https://www.google.com/maps/search/Restaurant+t+Kapelletje+Kloosterweg+71+Waalwijk?hl=nl', { waitUntil: 'domcontentloaded' });
await p.waitForTimeout(3000);
if (p.url().includes('consent')) { await p.getByRole('button', { name: /Alles afwijzen|Reject all/ }).first().click(); await p.waitForTimeout(5000); }
await p.waitForTimeout(4000);
const art = p.locator('a.hfpxzc').first(); if (await art.count()) { await art.click(); await p.waitForTimeout(5000); } await p.screenshot({ path: 'bron/gfoto/_main.png' });
const urls = new Map(); const out = [];
const grab = async (tag) => { const s = await p.evaluate(() => { const r = []; document.querySelectorAll('[style*="googleusercontent"], img[src*="googleusercontent"]').forEach(e => { const m = (e.getAttribute('style') || '').match(/url\("?([^")]+)/); const u = m ? m[1] : e.src; if (u && /\/p\/|gps-cs|geougc|AF1Qip/.test(u)) r.push(u); }); return r; }); s.forEach(u => { const k = u.split('=')[0]; if (!urls.has(k)) urls.set(k, tag); }); };
await grab('main');
const tabs = await p.evaluate(() => [...document.querySelectorAll('button')].map(b => b.getAttribute('aria-label') || '').filter(Boolean));
out.push('BUTTONS: ' + tabs.join(' || '));
const fb = p.getByText("Foto's bekijken").first(); out.push('FB count ' + await fb.count());
if (await fb.count()) { await fb.click().catch(e=>out.push('clickerr '+e.message.slice(0,80))); await p.waitForTimeout(5000); } out.push('TABS: ' + (await p.evaluate(() => [...document.querySelectorAll('[role=tab]')].map(t => t.innerText || t.getAttribute('aria-label')).join(' || ')))); await p.screenshot({ path: 'bron/gfoto/_open.png' });
for (const cat of ['Alle', 'Laatste', 'Van de eigenaar', 'Eten en drinken', 'Sfeer', 'Street View']) {
  const t = p.getByRole('tab', { name: cat }).first();
  try { await t.click({ timeout: 2500 }); await p.waitForTimeout(2500); } catch { out.push('no tab ' + cat); continue; }
  for (let i = 0; i < 12; i++) { await p.evaluate(() => { document.querySelectorAll('div').forEach(d => { if (d.scrollHeight > d.clientHeight + 50 && d.clientHeight > 300) d.scrollBy(0, 2500); }); }); await p.waitForTimeout(900); await grab(cat); }
  await p.screenshot({ path: `bron/gfoto/_tab-${cat.replace(/ /g,'_')}.png` });
}
let n = 0;
for (const [k, tag] of urls) { try { const r = await fetch(k + '=w1600-h1600'); if (!r.ok) continue; n++; const f = `g-${String(n).padStart(2, '0')}.jpg`; fs.writeFileSync('bron/gfoto/' + f, Buffer.from(await r.arrayBuffer())); out.push(`${f} | ${tag} | ${k}`); } catch {} }
fs.writeFileSync('bron/gfoto/gfoto.txt', out.join('\n')); console.log(n); await b.close();
