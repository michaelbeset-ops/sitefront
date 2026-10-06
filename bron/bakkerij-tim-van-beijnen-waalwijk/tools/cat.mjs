import { chromium } from 'playwright'; import fs from 'node:fs';
const cats = ['brood','desem-brood','zoet-en-hartige-snacks','gevuld-brood','kleinbrood-2','krokant-brood','cake-en-koek','gebak','aanbieding'];
const b = await chromium.launch(); const p = await (await b.newContext({ viewport: { width: 1440, height: 900 } })).newPage();
const out = []; fs.mkdirSync('bron/site/prod', { recursive: true });
for (const c of cats) {
  await p.goto('https://www.vantim.nl/assortiment/' + c, { waitUntil: 'networkidle' });
  const items = await p.evaluate(() => [...document.images].filter(i => /\/products\/product-/.test(i.src)).map(i => { const card = i.closest('div[class*=col], li, article') || i.parentElement.parentElement; return [i.alt, i.src, (card?.innerText || '').replace(/\s+/g, ' ').trim(), (i.closest('a')||{}).href]; }));
  out.push('## ' + c); for (const it of items) out.push(it.join(' | '));
  for (const it of items) { const big = it[1].replace(/_600_450/, ''); for (const u of [big, it[1]]) { const r = await fetch(u); if (r.ok) { const buf = Buffer.from(await r.arrayBuffer()); fs.writeFileSync('bron/site/prod/' + c + '__' + u.split('/').pop(), buf); break; } } }
}
fs.writeFileSync('bron/site/producten.txt', out.join('\n')); await b.close();
