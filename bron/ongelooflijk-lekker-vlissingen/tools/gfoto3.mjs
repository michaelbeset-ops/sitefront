import { chromium } from 'playwright'; import fs from 'node:fs';
const mode = process.argv[2] || 'Van eigenaar';
const b = await chromium.launch({ channel: 'chrome', args: ['--headless=new', '--disable-blink-features=AutomationControlled'] });
const ctx = await b.newContext({ locale: 'nl-NL', userAgent: 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/141.0.0.0 Safari/537.36', viewport: { width: 1400, height: 1000 } });
const p = await ctx.newPage();
await p.goto('https://www.google.com/maps/place/Ongelooflijk+Lekker/@51.4443539,3.5742335,17z/data=!4m7!3m6!1s0x47c499ec251135e9:0x6dbad1471cb979b9!8m2!3d51.4443539!4d3.5742335!10e5!16s%2Fg%2F11c6mcwdt9?hl=nl', { waitUntil: 'load', timeout: 45000 }).catch(() => {});
await p.waitForTimeout(2500);
const r = p.locator('button:has-text("Alles afwijzen")').first(); if (await r.count()) { await r.click(); await p.waitForTimeout(5000); }
await p.waitForTimeout(4000);
const t = p.locator(`button[aria-label="${mode}"]`).first(); console.log('tab', await t.count());
if (await t.count()) { await t.click(); await p.waitForTimeout(5000); }
await p.screenshot({ path: `bron/gfoto/_scr3-${mode}.png` });
// thumbnails in het galerijpaneel (links)
const urls = new Set();
for (let i = 0; i < 15; i++) {
  (await p.evaluate(() => [...document.querySelectorAll('a[data-photo-index] [style*="googleusercontent"], [data-photo-index] [style*="googleusercontent"]')].map((e) => (e.style.backgroundImage.match(/url\("?(.*?)"?\)/) || [])[1]).filter(Boolean))).forEach((u) => urls.add(u.split('=')[0]));
  await p.evaluate(() => document.querySelectorAll('div').forEach((d) => { if (d.scrollHeight > d.clientHeight + 50 && d.clientHeight > 300) d.scrollBy(0, 1000); }));
  await p.waitForTimeout(700);
}
console.log('thumbs', urls.size);
const out = []; let n = 0;
const slug = mode.replace(/\s/g, '_');
for (const u of urls) { const big = u + '=w1600-h1600-k-no'; const res = await fetch(big); if (!res.ok) continue; const buf = Buffer.from(await res.arrayBuffer()); n++; const f = `${slug}3-${String(n).padStart(2, '0')}.jpg`; fs.writeFileSync('bron/gfoto/' + f, buf); out.push(`${f} | ${big}`); }
fs.writeFileSync(`bron/gfoto/${slug}3.txt`, out.join('\n'));
// eerste paar openen en maker lezen
const meta = [];
const thumbs = p.locator('[data-photo-index]');
const cnt = Math.min(await thumbs.count(), 30);
for (let i = 0; i < cnt; i++) {
  await thumbs.nth(i).click().catch(() => {}); await p.waitForTimeout(1300);
  const m = await p.evaluate(() => ({ wie: [...document.querySelectorAll('a[href*="contrib"]')].map((a) => a.innerText.trim() || a.getAttribute('aria-label')).filter(Boolean).slice(0, 3).join(' / '), txt: (document.querySelector('[role=main]')?.innerText || '').split('\n').filter((l) => /geleden|eigenaar|Foto|Video/i.test(l)).slice(0, 4).join(' / ') }));
  meta.push(`${i} | ${m.wie} | ${m.txt}`);
}
fs.writeFileSync(`bron/gfoto/${slug}3-meta.txt`, meta.join('\n')); console.log(meta.join('\n'));
await b.close();
