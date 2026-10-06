import { chromium } from 'playwright'; import fs from 'node:fs';
const links = fs.readFileSync('bron/ig/posts.txt', 'utf8').split('\n').filter(l => /^https:\/\/www.instagram.com\/.*\/p\//.test(l));
const b = await chromium.launch({ args: ['--disable-blink-features=AutomationControlled'] });
const ctx = await b.newContext({ locale: 'nl-NL', viewport: { width: 1280, height: 1200 }, userAgent: 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/140.0.0.0 Safari/537.36' });
const p = await ctx.newPage(); const out = []; let n = 0;
for (const l of links) {
  try { await p.goto(l, { waitUntil: 'domcontentloaded' }); await p.waitForTimeout(4000);
    const x = p.locator('button:has-text("Optionele cookies afwijzen")').first(); if (await x.count()) { await x.click().catch(()=>{}); await p.waitForTimeout(2000); }
    const seen = new Set(); out.push('CAP ' + l + ' :: ' + (await p.evaluate(() => (document.querySelector('main')?.innerText || '').replace(/s+/g, ' ').slice(0, 1500))));
    for (let k = 0; k < 10; k++) {
      const imgs = await p.evaluate(() => [...document.querySelectorAll('img')].filter(i => /cdninstagram|fbcdn/.test(i.src) && i.naturalWidth >= 600).map(i => [i.currentSrc || i.src, i.naturalWidth, i.naturalHeight, i.alt]));
      for (const [s, w, h, a] of imgs) { const key = s.split('?')[0]; if (seen.has(key)) continue; seen.add(key);
        const r = await fetch(s); if (!r.ok) continue; n++; const fn = `p-${String(n).padStart(2,'0')}.jpg`;
        fs.writeFileSync('bron/ighi/' + fn, Buffer.from(await r.arrayBuffer())); out.push(`${fn} | ${w}x${h} | ${l} | ${a.slice(0,200)}`); }
      const nxt = p.locator('button[aria-label="Volgende"], button[aria-label="Next"]').first();
      if (await nxt.count() && await nxt.isVisible()) { await nxt.click().catch(()=>{}); await p.waitForTimeout(1500); } else break;
    }
  } catch (e) { out.push('ERR ' + l + ' ' + e.message.slice(0, 80)); }
}
fs.writeFileSync('bron/ighi/ighi.txt', out.join('\n')); console.log(n); await b.close();
