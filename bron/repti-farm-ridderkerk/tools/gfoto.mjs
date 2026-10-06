import { chromium } from 'playwright'; import fs from 'node:fs';
const b = await chromium.launch();
const ctx = await b.newContext({ locale: 'nl-NL', userAgent: 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/140.0.0.0 Safari/537.36', viewport: { width: 1400, height: 1000 } });
const p = await ctx.newPage();
await p.goto('https://www.google.com/maps/place/Repti-Farm/@51.8784676,4.6048765,17z/data=!3m1!4b1!4m6!3m5!1s0x47c42dbccd76e2cd:0x5e88647bd166684c!8m2!3d51.8784676!4d4.6048765!16s%2Fg%2F1tngpg19?hl=nl', { waitUntil: 'domcontentloaded' });
await p.waitForTimeout(3000);
if (p.url().includes('consent')) { await p.getByRole('button', { name: /Alles afwijzen|Reject all/ }).first().click(); await p.waitForTimeout(5000); }
await p.waitForTimeout(3000);
await p.locator('button[aria-label^="Foto"]').first().click({ force: true }); await p.waitForTimeout(4000);
await p.screenshot({ path: 'bron/google/foto-panel.png' });
console.log('tabs:', await p.evaluate(() => [...document.querySelectorAll('[role=tab]')].map(t => t.innerText.trim()).join(' / ')));
for (let i = 0; i < 15; i++) { await p.evaluate(() => document.querySelectorAll('div').forEach(d => { if (d.scrollHeight > d.clientHeight + 50 && d.clientHeight > 300) d.scrollBy(0, 1500); })); await p.waitForTimeout(700); }
const n = await p.locator('a[data-photo-index]').count(); console.log('thumbs', n);
const out = [];
for (let i = 0; i < n; i++) {
  const a = p.locator(`a[data-photo-index="${i}"]`).first();
  try { await a.scrollIntoViewIfNeeded({ timeout: 2000 }); await a.click({ force: true, timeout: 3000 }); } catch { continue; }
  await p.waitForTimeout(1600);
  const info = await p.evaluate(() => {
    const big = [...document.querySelectorAll('img, [style*="googleusercontent"]')].map(e => e.src || (e.style.backgroundImage.match(/url\("?(.*?)"?\)/) || [])[1]).filter(u => u && /googleusercontent/.test(u));
    const head = [...document.querySelectorAll('h1, h2, [class*="title"], a[href*="contrib"]')].map(e => e.innerText.trim()).filter(Boolean).slice(0, 12);
    const contrib = [...document.querySelectorAll('a[href*="/contrib/"]')].map(e => e.innerText.trim() + ' <' + e.href.slice(0, 70) + '>');
    return { head, contrib, cur: location.href.slice(0, 200) };
  });
  const sel = await p.evaluate((i) => { const a = document.querySelector(`a[data-photo-index="${i}"]`); const d = a && a.querySelector('[style*="googleusercontent"]'); return d ? (d.style.backgroundImage.match(/url\("?(.*?)"?\)/) || [])[1] : ''; }, i);
  out.push(`${i} | ${sel} | contrib: ${info.contrib.join(' ; ')} | head: ${info.head.join(' ; ')}`);
}
fs.writeFileSync('bron/google/fotos-attributie.txt', out.join('\n'));
await b.close();
