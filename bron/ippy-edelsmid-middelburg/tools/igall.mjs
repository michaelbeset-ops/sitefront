import { chromium } from 'playwright'; import fs from 'node:fs';
const b = await chromium.launch({ args: ['--disable-blink-features=AutomationControlled'] });
const ctx = await b.newContext({ locale: 'nl-NL', viewport: { width: 1280, height: 1400 }, userAgent: 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/140.0.0.0 Safari/537.36' });
const p = await ctx.newPage();
fs.mkdirSync('bron/ighi', { recursive: true });
await p.goto('https://www.instagram.com/ippyjuwelier/', { waitUntil: 'domcontentloaded' }); await p.waitForTimeout(5000);
const x = p.locator('button:has-text("Optionele cookies afwijzen")').first(); if (await x.count()) { await x.click().catch(()=>{}); await p.waitForTimeout(2500); }
const links = new Set();
for (let i = 0; i < 5; i++) { (await p.evaluate(() => [...document.querySelectorAll('a[href*="/p/"], a[href*="/reel/"]')].map(a => a.href))).forEach(l => links.add(l)); await p.mouse.wheel(0, 1400); await p.waitForTimeout(1500); const c = p.locator('[aria-label="Sluiten"], [aria-label="Close"]').first(); if (await c.count()) await c.click().catch(()=>{}); }
console.log('links', links.size);
const out = []; let n = 0;
for (const u of links) {
  await p.goto(u, { waitUntil: 'domcontentloaded' }).catch(()=>null); await p.waitForTimeout(3500);
  const d = await p.evaluate(() => (document.querySelector('meta[property="og:description"]')?.content || '') + ' || ' + (document.querySelector('meta[property="og:title"]')?.content || ''));
  const imgs = await p.evaluate(() => { const r = []; document.querySelectorAll('article img[srcset], main img[srcset]').forEach(i => { let bw = 0, bu = ''; i.srcset.split(',').forEach(s => { const [u, w] = s.trim().split(' '); const W = parseInt(w); if (W > bw && /cdninstagram|fbcdn/.test(u)) { bw = W; bu = u; } }); if (bu && i.naturalWidth > 200) r.push([bw, bu, i.alt]); }); return r; });
  const og = await p.evaluate(() => document.querySelector('meta[property="og:image"]')?.content);
  n++; const files = [];
  const list = imgs.length ? imgs.slice(0, 3) : (og ? [[0, og, '']] : []);
  for (let k = 0; k < list.length; k++) { try { const r = await fetch(list[k][1]); const buf = Buffer.from(await r.arrayBuffer()); const f = `p${String(n).padStart(2,'0')}-${k}.jpg`; fs.writeFileSync('bron/ighi/' + f, buf); files.push(f + ' w' + list[k][0] + ' alt:' + (list[k][2]||'').slice(0,200)); } catch {} }
  out.push(`## p${n} ${u}\n${d}\n${files.join('\n')}`); console.log(n, u, files.length);
}
fs.writeFileSync('bron/ighi/captions.txt', out.join('\n\n'));
await b.close();
