import { chromium } from 'playwright'; import fs from 'node:fs';
const b = await chromium.launch({ args: ['--disable-gpu','--disable-blink-features=AutomationControlled'] });
const ctx = await b.newContext({ locale: 'nl-NL', viewport: { width: 1400, height: 1500 }, userAgent: 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/140.0.0.0 Safari/537.36' });
const p = await ctx.newPage();
const U='https://www.google.com/maps/search/'+encodeURIComponent('AutoService-Online Christiaan Huygensstraat 34 Strijen')+'?hl=nl';
await p.goto(U,{waitUntil:'domcontentloaded'}); await p.waitForTimeout(2500);
const r = p.locator('button:has-text("Alles afwijzen")').first(); if (await r.count()) { await r.click(); await p.waitForTimeout(5000); }
const all = new Map();
const collect = async (tag) => { await p.evaluate(() => document.querySelectorAll('button').forEach(b => { if (/^(Meer|Meer weergeven)$/.test(b.innerText.trim())) b.click(); })); await p.waitForTimeout(700);
  const out = await p.evaluate(() => [...document.querySelectorAll('div.jftiEf')].map(r => ({n: r.querySelector('.d4r55')?.innerText, d: r.querySelector('.rsqaWe')?.innerText, st: r.querySelector('[role=img]')?.getAttribute('aria-label'), t: r.querySelector('.wiI7pd')?.innerText || '', own: r.querySelector('.CDe7pd')?.innerText || ''})));
  for (const o of out) if (!all.has(o.n)) { all.set(o.n, o); console.log('+', tag, o.n); } fs.writeFileSync('C:/Users/Micha/Downloads/Sitefront/demos/autoservice-online-strijen/bron/google/reviews.json', JSON.stringify([...all.values()], null, 1)); };
{ const f = p.locator('a.hfpxzc').first(); if (await f.count()) { await f.click().catch(()=>{}); await p.waitForTimeout(4000);} }
const tab = p.locator('button[role=tab]:has-text("Reviews")').first(); await tab.click(); await p.waitForTimeout(3000);
await collect('start');
for (const s of ['Nieuwste','Hoogste beoordeling','Laagste beoordeling','Meest relevant']) {
  const sb = p.locator('button[aria-label*="sorteren" i], button:has-text("Sorteren")').first();
  if (await sb.count()) { await sb.click().catch(()=>{}); await p.waitForTimeout(1200); const it = p.locator(`[role=menuitemradio]:has-text("${s}")`).first(); if (await it.count()) { await it.click(); await p.waitForTimeout(3000); await collect(s); } else console.log('no item', s); }
}
const chips = await p.evaluate(() => [...document.querySelectorAll('[role=radio]')].map(x => x.getAttribute('aria-label') || x.innerText));
console.log('chips', chips);
for (const c of chips.filter(c=>!/Standaard|Satelliet/.test(c))) { const el = p.locator(`[role=radio][aria-label="${c}"]`).first(); if (await el.count()) { await el.click().catch(()=>{}); await p.waitForTimeout(3000); await collect('chip '+c); } }
for (const q of ['auto','occasion','apk','onderhoud','reparatie','schade','poets','airco','banden','prijs','eerlijk','service','snel','aanrader','vriendelijk','geholpen','gekocht','top','super','afspraak','klant','advies','netjes','deuk','garage']) {
  const sb = p.locator('button[aria-label="Zoeken in reviews"]').first(); if (await sb.count()) { await sb.click().catch(()=>{}); await p.waitForTimeout(800); }
  const inp = p.locator('input[aria-label*="reviews" i]').first(); if (!(await inp.count())) { console.log('no input'); break; }
  await inp.fill(q); await inp.press('Enter'); await p.waitForTimeout(3000); await collect('q '+q);
}
fs.writeFileSync('C:/Users/Micha/Downloads/Sitefront/demos/autoservice-online-strijen/bron/google/reviews.json', JSON.stringify([...all.values()], null, 1));
console.log('total', all.size);
await b.close();
