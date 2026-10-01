import { chromium } from 'playwright';
const B = 'http://localhost:4581/sitefront/smellies-dordrecht/';
const b = await chromium.launch(); const p = await b.newPage({ viewport: { width: 1440, height: 900 } });
// crawl interne links
const seen = new Set(), todo = [B], fout = [];
while (todo.length) {
  const u = todo.shift(); if (seen.has(u)) continue; seen.add(u);
  const r = await p.goto(u, { waitUntil: 'domcontentloaded' }); if (!r || r.status() !== 200) { fout.push(u + ' ' + r?.status()); continue; }
  const info = await p.evaluate(() => ({ h1: document.querySelectorAll('h1').length, links: [...document.querySelectorAll('a[href]')].map((a) => a.href), ids: [...document.querySelectorAll('[id]')].map((e) => e.id) }));
  if (info.h1 !== 1) fout.push(u + ' h1=' + info.h1);
  for (const l of info.links) { const x = new URL(l); if (x.origin !== new URL(B).origin) continue; const kaal = x.origin + x.pathname; if (x.hash && kaal === u && !info.ids.includes(x.hash.slice(1))) fout.push(u + ' anker ' + x.hash); if (!seen.has(kaal)) todo.push(kaal); }
}
console.log('paginas', seen.size, 'fouten', fout);
// filter
await p.goto(B + 'geuren/'); for (const f of ['fris', 'bloemig', 'zoet', 'houtig', 'herfst', 'alles']) { await p.click(`.filter[data-fam="${f}"]`); await p.waitForTimeout(700); console.log(f, await p.evaluate(() => [...document.querySelectorAll('.kaart')].filter((k) => getComputedStyle(k).display !== 'none').length)); }
await p.goto(B + 'geuren/#herfst'); await p.waitForTimeout(800); console.log('hash herfst', await p.evaluate(() => [...document.querySelectorAll('.kaart')].filter((k) => getComputedStyle(k).display !== 'none').length));
// optie
await p.goto(B + 'geuren/libre/'); await p.click('text=15 stuks'); console.log('15 stuks:', await p.textContent('[data-prijs-uit]'), await p.getAttribute('[data-bestel]', 'href'));
await p.goto(B + 'geuren/choo-choo/'); console.log('choo choo opties', await p.locator('input[name=aantal]').count(), await p.getAttribute('[data-bestel]', 'href'));
await b.close();
