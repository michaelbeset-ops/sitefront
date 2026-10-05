import { chromium } from 'playwright'; import fs from 'node:fs';
const [q, tag] = process.argv.slice(2);
fs.mkdirSync(`bron/gfoto-${tag}`, { recursive: true });
const b = await chromium.launch();
const ctx = await b.newContext({ locale: 'nl-NL', userAgent: 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/140.0.0.0 Safari/537.36', viewport: { width: 1400, height: 1000 } });
const p = await ctx.newPage();
await p.goto('https://www.google.com/maps/search/'+encodeURIComponent(q)+'?hl=nl', { waitUntil: 'domcontentloaded' });
await p.waitForTimeout(3000);
if (p.url().includes('consent')) { await p.getByRole('button', { name: /Alles afwijzen|Reject all/ }).first().click(); await p.waitForTimeout(4000); }
await p.waitForTimeout(5000);
const art = p.locator('a.hfpxzc').first(); if (await art.count()) { await art.click(); await p.waitForTimeout(5000); }
await p.locator('button[aria-label^="Foto"]').first().click().catch(e=>console.log('nofoto'));
await p.waitForTimeout(5000);
const tabs = await p.evaluate(()=>[...document.querySelectorAll('[role=tab]')].map(t=>t.innerText.trim()));
console.log('tabs', tabs.join('|'));
const res = {};
for (const t of ['Alle', 'Van eigenaar']) {
  const l = p.getByRole('tab', { name: t, exact: true }).first();
  if (await l.count()) { await l.click().catch(()=>{}); await p.waitForTimeout(3000); }
  for (let i = 0; i < 12; i++) { await p.evaluate(() => { document.querySelectorAll('div').forEach(d => { if (d.scrollHeight > d.clientHeight + 50 && d.clientHeight > 200) d.scrollBy(0, 2500); }); }); await p.waitForTimeout(800); }
  const urls = await p.evaluate(() => { const o = new Set(); document.querySelectorAll('[style*="googleusercontent"], img[src*="googleusercontent"]').forEach(e => { const m = (e.getAttribute('style')||'').match(/url\("?([^")]+)/); const s = m ? m[1] : e.src; if (s && /\/p\/|gps-cs|AF1Qip|geougc/.test(s)) o.add(s.split('=')[0]); }); return [...o]; });
  res[t] = urls; console.log(t, urls.length);
}
let n = 0; const out = [];
for (const [t, urls] of Object.entries(res)) for (const u of urls) { const r = await fetch(u + '=w1600'); if (!r.ok) continue; n++; const f = `${t==='Alle'?'a':'e'}-${String(n).padStart(2,'0')}.jpg`; fs.writeFileSync(`bron/gfoto-${tag}/${f}`, Buffer.from(await r.arrayBuffer())); out.push(f+' '+u); }
fs.writeFileSync(`bron/gfoto-${tag}/lijst.txt`, out.join('\n'));
console.log('saved', n); await b.close();
