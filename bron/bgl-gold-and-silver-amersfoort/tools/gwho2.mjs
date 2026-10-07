import { chromium } from 'playwright'; import fs from 'node:fs';
const b = await chromium.launch();
const ctx = await b.newContext({ locale: 'nl-NL', userAgent: 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/140.0.0.0 Safari/537.36', viewport: { width: 1400, height: 1000 } });
const p = await ctx.newPage();
await p.goto('https://www.google.com/maps/search/B.G.L.+Gold+%26+Silver+Kamp+13+Amersfoort?hl=nl', { waitUntil: 'domcontentloaded' });
await p.waitForTimeout(3000);
if (p.url().includes('consent')) { await p.getByRole('button', { name: /Alles afwijzen|Reject all/ }).first().click(); await p.waitForTimeout(5000); }
await p.waitForTimeout(4000);
const art = p.locator('a.hfpxzc').first(); if (await art.count()) { await art.click(); await p.waitForTimeout(5000); }
await p.locator('button[aria-label*="Foto"]').first().click(); await p.waitForTimeout(4000);
const out = [];
for (let i = 0; i < 40; i++) {
  const thumbs = p.locator('a[data-photo-index]');
  const n = await thumbs.count(); if (i === 0) console.log('thumbs', n);
  if (i >= n) { await p.evaluate(() => document.querySelectorAll('div').forEach(d => { if (d.scrollHeight > d.clientHeight + 50 && d.clientHeight > 300) d.scrollBy(0, 1500); })); await p.waitForTimeout(1500); if (i >= await thumbs.count()) break; }
  const t = thumbs.nth(i); await t.scrollIntoViewIfNeeded(); await t.click(); await p.waitForTimeout(1800);
  const info = await p.evaluate((i) => {
    const el = document.querySelector(`a[data-photo-index="${i}"]`);
    const bg = el?.querySelector('[style*="googleusercontent"]')?.style.backgroundImage || '';
    const m = document.body.innerText.match(/\n([^\n]{1,60})\n\s*(Foto|Video) - ([a-z]+ \d{4})/i);
    return `${i} | ${m ? m[1] + ' | ' + m[3] : '?'} | ${(bg.match(/url\("?(.*?)"?\)/)||[])[1] || ''}`;
  }, i);
  out.push(info);
}
fs.writeFileSync('bron/google/foto-wie.txt', out.join('\n')); console.log(out.map(l => l.slice(0, 190)).join('\n'));
await b.close();
