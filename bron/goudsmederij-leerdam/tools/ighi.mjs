import { chromium } from 'playwright'; import fs from 'node:fs';
const b = await chromium.launch({ args: ['--disable-blink-features=AutomationControlled'] });
const ctx = await b.newContext({ locale: 'nl-NL', viewport: { width: 1280, height: 1400 }, userAgent: 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/140.0.0.0 Safari/537.36' });
const p = await ctx.newPage();
fs.mkdirSync('bron/ighi', { recursive: true });
const posts = { 'cufflinks': 'DdYhHMRsYAR', 'saffier': 'Dcy7KvEMXVJ', 'embrace': 'DbU5bbss4n0', 'newin': 'Da5Tx8UDW4Y', 'schetsen': 'DZrrTqnMZUY', 'collier': 'DZiGkgvMdb4', 'bangle': 'DZfhElCsCKX', 'frivool': 'DZM9EIjNd6T' };
let first = true;
for (const [n, id] of Object.entries(posts)) {
  await p.goto('https://www.instagram.com/p/' + id + '/', { waitUntil: 'domcontentloaded' }); await p.waitForTimeout(4000);
  if (first) { const x = p.locator('button:has-text("Optionele cookies afwijzen")').first(); if (await x.count()) { await x.click().catch(()=>{}); await p.waitForTimeout(2000); } first = false; }
  const best = await p.evaluate(() => { let bw = 0, bu = ''; document.querySelectorAll('img[srcset]').forEach(i => i.srcset.split(',').forEach(s => { const [u, w] = s.trim().split(' '); const W = parseInt(w); if (W > bw && /cdninstagram|fbcdn/.test(u)) { bw = W; bu = u; } })); return [bw, bu]; });
  const og = await p.evaluate(() => document.querySelector('meta[property="og:image"]')?.content);
  const u = best[1] || og; if (!u) { console.log(n, 'geen'); continue; }
  const r = await fetch(u); const buf = Buffer.from(await r.arrayBuffer()); fs.writeFileSync(`bron/ighi/${n}.jpg`, buf); console.log(n, best[0], buf.length);
}
await b.close();
