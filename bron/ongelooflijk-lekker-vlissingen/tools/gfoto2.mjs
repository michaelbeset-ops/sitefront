// Foto's per categorie (chip in het overzicht), en per foto de maker (viewer). Arg: categorie
import { chromium } from 'playwright'; import fs from 'node:fs';
const mode = process.argv[2] || 'Van eigenaar';
const b = await chromium.launch({ channel: 'chrome', args: ['--headless=new', '--disable-blink-features=AutomationControlled'] });
const ctx = await b.newContext({ locale: 'nl-NL', userAgent: 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/141.0.0.0 Safari/537.36', viewport: { width: 1400, height: 1000 } });
const p = await ctx.newPage();
await p.goto('https://www.google.com/maps/place/Ongelooflijk+Lekker/@51.4443539,3.5742335,17z/data=!3m1!4b1!4m6!3m5!1s0x47c499ec251135e9:0x6dbad1471cb979b9!8m2!3d51.4443539!4d3.5742335!16s%2Fg%2F11c6mcwdt9?hl=nl', { waitUntil: 'load', timeout: 45000 }).catch(() => {});
await p.waitForTimeout(2500);
const r = p.locator('button:has-text("Alles afwijzen")').first(); if (await r.count()) { await r.click(); await p.waitForTimeout(4000); }
await p.waitForTimeout(3000);
for (let poging = 0; poging < 4; poging++) {
  const ok = await p.evaluate((m) => { const t = [...document.querySelectorAll('[role=tab], button')].find((e) => (e.innerText || e.getAttribute('aria-label') || '').trim() === m); if (t) { t.click(); return true; } return false; }, mode);
  console.log('poging', poging, ok); if (ok) break;
  await p.locator('button[aria-label*="Foto"]').first().click().catch(() => {}); await p.waitForTimeout(4000);
}
await p.waitForTimeout(4000);
// eerste foto openen in de viewer
await p.screenshot({ path: `bron/gfoto/_scr2-${mode}.png` });
const seen = new Map();
for (let i = 0; i < 40; i++) {
  const info = await p.evaluate(() => {
    const imgs = [...document.querySelectorAll('[style*="googleusercontent"], img[src*="googleusercontent"]')].map((e) => e.src || (e.style.backgroundImage.match(/url\("?(.*?)"?\)/) || [])[1]).filter(Boolean);
    const wie = [...document.querySelectorAll('a[href*="/contrib/"], .Q8Tafd, .xUc6Hf, [class*="attribution"]')].map((e) => e.innerText.trim()).filter(Boolean).join(' / ');
    const datum = [...document.querySelectorAll('div, span')].map((e) => e.childElementCount === 0 ? e.innerText : '').filter((t) => /geleden|20\d\d/.test(t || '')).slice(0, 3).join(' / ');
    return { imgs, wie, datum };
  });
  info.imgs.forEach((u) => { if (/gps-cs|AF1Q|\/p\//.test(u) && !seen.has(u.split('=')[0])) seen.set(u.split('=')[0], `${info.wie} | ${info.datum}`); });
  await p.keyboard.press('ArrowRight'); await p.waitForTimeout(900);
}
let n = 0; const out = [];
for (const [u, meta] of seen) {
  const big = u + '=w1600-h1600-k-no'; const res = await fetch(big); if (!res.ok) continue;
  const buf = Buffer.from(await res.arrayBuffer()); if (buf.length < 15000) continue;
  n++; const f = `${mode.replace(/\s/g, '_')}2-${String(n).padStart(2, '0')}.jpg`; fs.writeFileSync('bron/gfoto/' + f, buf); out.push(`${f} | ${meta} | ${big}`);
}
fs.writeFileSync(`bron/gfoto/${mode.replace(/\s/g, '_')}2.txt`, out.join('\n')); console.log('fotos', n);
await b.close();
