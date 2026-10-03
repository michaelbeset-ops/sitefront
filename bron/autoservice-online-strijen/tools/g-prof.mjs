import { chromium } from 'playwright'; import fs from 'node:fs';
const OUT = 'C:/Users/Micha/Downloads/Sitefront/demos/autoservice-online-strijen/bron/google';
const b = await chromium.launch({ channel: 'chrome', args: ['--headless=new','--disable-blink-features=AutomationControlled'] }); const ctx = await b.newContext({ userAgent: 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/141.0.0.0 Safari/537.36', locale: 'nl-NL', viewport: { width: 1400, height: 1600 } }); const p = await ctx.newPage();
await p.goto('https://www.google.com/maps/search/' + encodeURIComponent('AutoService-Online Christiaan Huygensstraat 34 Strijen') + '?hl=nl', { waitUntil: 'load', timeout: 45000 }).catch(() => {});
await p.waitForTimeout(2500);
const r = p.locator('button:has-text("Alles afwijzen")').first(); if (await r.count()) { await r.click(); await p.waitForTimeout(4000); }
const f = p.locator('a.hfpxzc').first(); if (await f.count()) { await f.click().catch(() => {}); }
await p.waitForTimeout(4000);
const main = async () => p.evaluate(() => [...document.querySelectorAll('[role=main]')].pop()?.innerText || '');
const ov = await main();
const hours = await p.evaluate(() => [...document.querySelectorAll('[role=main] table tr')].map(r => r.innerText.replace(/\s+/g, ' ')).filter(x => /dag/.test(x)).join('; '));
const links = await p.evaluate(() => [...document.querySelectorAll('[role=main] a')].map(a => a.href).filter(h => !/google\./.test(h)).join('\n'));
await p.screenshot({ path: OUT + '/overzicht.png' });
const ids = new Set();
const grab = async () => (await p.evaluate(() => { const s = []; document.querySelectorAll('*').forEach(e => { [getComputedStyle(e).backgroundImage || '', e.src || ''].forEach(x => { for (const m of x.matchAll(/googleusercontent\.com\/((?:grass-cs|gps-cs-s|p)\/[A-Za-z0-9_-]{30,})/g)) s.push(m[1]); }); }); return s; })).forEach(i => ids.add(i));
await grab();
let rev = ''; const t = p.locator('button[role=tab]:has-text("Reviews")').first();
if (await t.count()) { await t.click().catch(() => {}); await p.waitForTimeout(2500);
  const themes = await main(); fs.writeFileSync(OUT + '/reviews-top.txt', themes);
  for (let i = 0; i < 14; i++) { await p.evaluate(() => { document.querySelectorAll('[role=main] div').forEach(d => { if (d.scrollHeight > d.clientHeight + 50) d.scrollBy(0, 2500); }); }); await p.waitForTimeout(1200); }
  await p.evaluate(() => [...document.querySelectorAll('[role=main] button')].filter(x => /^Meer$/.test(x.innerText.trim())).forEach(x => x.click())); await p.waitForTimeout(800);
  rev = (await main()).replace(/Een like geven|Delen/g, '').replace(/\n{2,}/g, '\n'); }
const ov2tab = p.locator('button[role=tab]:has-text("Overzicht")').first(); if (await ov2tab.count()) { await ov2tab.click().catch(()=>{}); await p.waitForTimeout(2000); }
const btn = p.locator('button:has-text("Foto\'s bekijken"), [aria-label^="Foto"]').first();
if (await btn.count()) { await btn.click().catch(() => {}); await p.waitForTimeout(3500); }
await p.screenshot({ path: OUT + '/fotos.png' });
await grab();
for (let i = 0; i < 8; i++) { await p.evaluate(() => { document.querySelectorAll('div').forEach(d => { if (d.scrollHeight > d.clientHeight + 50) d.scrollBy(0, 1500); }); }); await p.waitForTimeout(1200); await grab(); }
for (let i = 0; i < 30; i++) { const u = decodeURIComponent(p.url()); for (const m of u.matchAll(/googleusercontent\.com\/((?:grass-cs|gps-cs-s|p)\/[A-Za-z0-9_-]{30,})/g)) ids.add(m[1]); await p.keyboard.press('ArrowRight'); await p.waitForTimeout(900); await grab(); }
fs.writeFileSync(OUT + '/google.txt', `BRON: Google-bedrijfsprofiel (bekeken 03-10-2026)\nLINKS:\n${links}\nOPENINGSTIJDEN: ${hours}\n\n=== OVERZICHT ===\n${ov}\n\n=== REVIEWS ===\n${rev}\n`);
let n = 0; const src = [];
for (const id of ids) { try { const r = await fetch('https://lh3.googleusercontent.com/' + id + '=w1600-h1600-k-no'); if (!r.ok) continue; const buf = Buffer.from(await r.arrayBuffer()); if (buf.length < 12000) continue; n++; fs.writeFileSync(`${OUT}/g-${n}.jpg`, buf); src.push(`g-${n}.jpg  https://lh3.googleusercontent.com/${id}  (Google-bedrijfsprofiel)`); } catch {} }
fs.writeFileSync(OUT + '/BRONNEN-eigen.txt', src.join('\n'));
console.log('ov', ov.length, 'rev', rev.length, 'ids', ids.size, 'fotos', n);
await b.close();

