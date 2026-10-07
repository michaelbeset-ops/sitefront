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
const out = []; let prev = '';
for (let i = 0; i < 35; i++) {
  const info = await p.evaluate(() => {
    const t = document.body.innerText.match(/(.{0,60})\n?\s*(Foto|Video) - ([a-z]+ \d{4})/i);
    const imgs = [...document.querySelectorAll('img[src*="googleusercontent"]')].map(i => ({ s: i.src, w: i.getBoundingClientRect().width })).sort((a, b) => b.w - a.w);
    const hdr = [...document.querySelectorAll('h1, [role=heading], a[href*="contrib"], .qaN2Dd, .Fjmz8b')].map(e=>e.innerText.trim()).filter(Boolean).slice(0,4).join(' / ');
    return { t: t ? t[0].replace(/\s+/g,' ') : '', img: imgs[0]?.s || '', hdr };
  });
  const line = `${i} | ${info.hdr} | ${info.t} | ${info.img.slice(0, 160)}`;
  if (info.img === prev) break; prev = info.img; out.push(line);
  const nx = p.locator('button[aria-label*="Volgende"], button[aria-label*="Next"]').last(); if (i==0) console.log(await p.evaluate(() => [...document.querySelectorAll('button[aria-label]')].map(b=>b.getAttribute('aria-label')).join(' ; '))); await nx.click({timeout:3000}).catch(()=>{}); await p.waitForTimeout(2000);
}
fs.writeFileSync('bron/google/foto-wie.txt', out.join('\n')); console.log(out.join('\n'));
await b.close();
