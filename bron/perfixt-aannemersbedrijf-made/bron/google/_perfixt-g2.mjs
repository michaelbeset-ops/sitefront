import { chromium } from 'playwright'; import fs from 'node:fs';
const OUT='C:/Users/Micha/Downloads/Sitefront/demos/perfixt-aannemersbedrijf-made/bron/google/';
const b = await chromium.launch({ args: ['--disable-gpu','--disable-blink-features=AutomationControlled'] });
const ctx = await b.newContext({ locale: 'nl-NL', viewport: { width: 1400, height: 1500 }, userAgent: 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/140.0.0.0 Safari/537.36' });
const p = await ctx.newPage();
await p.goto('https://www.google.com/maps/search/'+encodeURIComponent('PERFIXT Aannemersbedrijf Van den Houtstraat 8 Made')+'?hl=nl',{waitUntil:'domcontentloaded'}); await p.waitForTimeout(2500);
const r = p.locator('button:has-text("Alles afwijzen")').first(); if (await r.count()) { await r.click(); await p.waitForTimeout(5000); }
const all = new Map();
const collect = async (tag) => { await p.evaluate(() => document.querySelectorAll('button').forEach(b => { if (/^(Meer|Meer weergeven)$/.test(b.innerText.trim())) b.click(); })); await p.waitForTimeout(700);
  const out = await p.evaluate(() => [...document.querySelectorAll('div.jftiEf')].map(r => ({n: r.querySelector('.d4r55')?.innerText, d: r.querySelector('.rsqaWe')?.innerText, st: r.querySelector('[role=img]')?.getAttribute('aria-label'), t: r.querySelector('.wiI7pd')?.innerText || '', own: r.querySelector('.CDe7pd')?.innerText || ''})));
  for (const o of out) if (!all.has(o.n)) { all.set(o.n, o); console.log('+', tag, o.n, o.d); } };
const tab = p.locator('button[role=tab]:has-text("Reviews")').first(); await tab.click(); await p.waitForTimeout(3000);
await collect('start');
const mr = p.locator('button:has-text("Meer reviews")').first(); if (await mr.count()) { await mr.click().catch(()=>{}); await p.waitForTimeout(3000); await collect('meer'); }
for (const s of ['Nieuwste','Hoogste beoordeling','Laagste beoordeling']) {
  const sb = p.locator('button[aria-label*="sorteren" i], button:has-text("Sorteren")').first();
  if (await sb.count()) { await sb.click().catch(()=>{}); await p.waitForTimeout(1200); const it = p.locator(`[role=menuitemradio]:has-text("${s}")`).first(); if (await it.count()) { await it.click(); await p.waitForTimeout(3000); await collect(s); } else console.log('no item', s); }
}
for (const q of ['verbouwing','stuc','tegel','badkamer','keuken','aanbouw','afspraak','netjes','kwaliteit','team','dak','vakman','België','advies','prijs']) {
  const sb = p.locator('button[aria-label="Zoeken in reviews"]').first(); if (await sb.count()) { await sb.click().catch(()=>{}); await p.waitForTimeout(800); }
  const inp = p.locator('input[aria-label*="reviews" i]').first(); if (!(await inp.count())) { console.log('no input'); break; }
  await inp.fill(q); await inp.press('Enter'); await p.waitForTimeout(2500); await collect('q '+q);
}
fs.writeFileSync(OUT+'reviews-all.json', JSON.stringify([...all.values()], null, 1));
console.log('total', all.size);
// foto's
await p.goto(p.url().split('?')[0].replace(/\/reviews.*/,'')+'?hl=nl').catch(()=>{}); await p.waitForTimeout(3000);
const fb = p.locator('button[aria-label^="Foto"], button:has-text("Foto\'s bekijken")').first();
if (await fb.count()) { await fb.click().catch(()=>{}); await p.waitForTimeout(4000);
  for (let i=0;i<5;i++){ await p.evaluate(()=>document.querySelectorAll('div.m6QErb').forEach(f=>f.scrollTop=f.scrollHeight)); await p.waitForTimeout(1000);} }
const html = await p.content();
const ids = [...new Set([...html.matchAll(/https:\/\/lh[0-9]\.googleusercontent\.com\/(?:gps-cs-s|grass-cs|p|geougc-cs)\/[A-Za-z0-9_\-]+/g)].map(m=>m[0]))];
fs.writeFileSync(OUT+'foto-ids.txt', ids.join('\n')); console.log('FOTOS', ids.length); console.log(ids.join('\n'));
await p.screenshot({ path: OUT+'_fotos.png' });
await b.close();
