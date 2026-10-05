import { chromium } from 'playwright'; import fs from 'node:fs';
const b = await chromium.launch({ args: ['--disable-blink-features=AutomationControlled'] });
const ctx = await b.newContext({ locale: 'nl-NL', viewport: { width: 1400, height: 1800 }, userAgent: 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/140.0.0.0 Safari/537.36' });
const p = await ctx.newPage(); const links = new Set();
for (const u of ['https://www.facebook.com/KaffeedeBonnefooi/photos', 'https://www.facebook.com/KaffeedeBonnefooi/']) {
  await p.goto(u, { waitUntil: 'domcontentloaded' }); await p.waitForTimeout(5000);
  for (const t of ['Optionele cookies afwijzen', 'Alleen essentiële cookies toestaan']) { const x = p.locator(`[role=button]:has-text("${t}")`).first(); if (await x.count()) { await x.click().catch(()=>{}); await p.waitForTimeout(2500); } }
  for (let i = 0; i < 12; i++) { const c = p.locator('[aria-label="Sluiten"]').first(); if (await c.count()) await c.click().catch(()=>{}); await p.mouse.wheel(0, 1500); await p.waitForTimeout(1500);
    (await p.evaluate(() => [...document.querySelectorAll('a[href*="/photo"]')].map(a => a.href))).forEach(h => links.add(h)); }
}
console.log('links', links.size);
const out = []; let n = 0;
for (const l of [...links].slice(0, 90)) {
  try { await p.goto(l, { waitUntil: 'domcontentloaded' }); await p.waitForTimeout(3500);
    const c = p.locator('[aria-label="Sluiten"]').first(); if (await c.count()) await c.click().catch(()=>{});
    const best = await p.evaluate(() => [...document.querySelectorAll('img')].filter(i => /fbcdn/.test(i.src)).sort((a, b) => b.naturalWidth * b.naturalHeight - a.naturalWidth * a.naturalHeight)[0]);
    const info = await p.evaluate(() => { const i = [...document.querySelectorAll('img')].filter(i => /fbcdn/.test(i.src)).sort((a, b) => b.naturalWidth * b.naturalHeight - a.naturalWidth * a.naturalHeight)[0]; return i ? [i.src, i.naturalWidth, i.naturalHeight, i.alt] : null; });
    const cap = await p.evaluate(() => (document.querySelector('[role=main]')?.innerText || document.body.innerText).slice(0, 700));
    if (!info || info[1] < 600) { out.push(`SKIP ${l} ${info && info[1]}`); continue; }
    const r = await fetch(info[0]); if (!r.ok) continue; n++;
    const fn = `hi-${String(n).padStart(2, '0')}.jpg`; fs.writeFileSync('bron/fbhi/' + fn, Buffer.from(await r.arrayBuffer()));
    out.push(`${fn} | ${info[1]}x${info[2]} | ${l} | ${info[3]} | ${cap.replace(/\s+/g, ' ').slice(0, 400)}`);
  } catch (e) { out.push('ERR ' + l); }
}
fs.writeFileSync('bron/fbhi/fbhi.txt', out.join('\n')); console.log(n); await b.close();
