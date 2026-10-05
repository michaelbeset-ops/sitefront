import { chromium } from 'playwright'; import fs from 'node:fs';
const b = await chromium.launch({ args: ['--disable-blink-features=AutomationControlled'] });
const ctx = await b.newContext({ locale: 'nl-NL', userAgent: 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/140.0.0.0 Safari/537.36' });
const p = await ctx.newPage();
await p.goto('https://unsplash.com/', { waitUntil: 'domcontentloaded' }); await p.waitForTimeout(2500);
const out = [];
for (const q of process.argv.slice(2)) {
  const j = await p.evaluate(async (q) => { const r = await fetch('/napi/search/photos?query=' + encodeURIComponent(q) + '&per_page=30'); return r.ok ? r.json() : { err: r.status }; }, q);
  if (j.err) { console.log(q, 'ERR', j.err); continue; }
  for (const x of j.results) if (!x.premium && !x.plus) out.push([q, x.id, x.urls.raw.split('?')[0].split('/').pop(), x.width + 'x' + x.height, (x.alt_description || '').slice(0, 80)].join('|'));
  console.log(q, j.results.length);
}
fs.writeFileSync('bron/us.txt', out.join('\n')); await b.close();
