import { chromium } from 'playwright'; import fs from 'node:fs';
const b = await chromium.launch({ channel: 'chrome', args: ['--headless=new','--disable-blink-features=AutomationControlled'] });
const ctx = await b.newContext({ locale: 'nl-NL', userAgent: 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/141.0.0.0 Safari/537.36', viewport: { width: 1400, height: 1000 } });
const p = await ctx.newPage();
await p.goto('https://www.google.com/maps/search/' + encodeURIComponent('Boutique Mieke Kerkstraat 10 Oss') + '?hl=nl', { waitUntil: 'load', timeout: 45000 }).catch(()=>{});
await p.waitForTimeout(2500);
const r = p.locator('button:has-text("Alles afwijzen")').first(); if (await r.count()) { await r.click(); await p.waitForTimeout(4000); }
const f = p.locator('a.hfpxzc').first(); if (await f.count()) { await f.click().catch(() => {}); }
await p.waitForTimeout(4000);
await p.locator('button[aria-label*="Foto"]').first().click().catch(()=>console.log('geen fotoknop')); await p.waitForTimeout(5000);
await p.screenshot({ path: 'bron/gfoto/_viewer0.png' });
const out = [];
for (let i = 0; i < 40; i++) {
  const info = await p.evaluate(() => {
    const t = document.body.innerText.split('\n').slice(0, 40).join(' | ');
    const bg = [...document.querySelectorAll('[style*="googleusercontent"], img[src*="googleusercontent"]')].map(e => e.src || (e.style.backgroundImage.match(/url\("?(.*?)"?\)/) || [])[1]).filter(Boolean);
    return { t, url: location.href, bg: bg.slice(0, 3) };
  });
  out.push(JSON.stringify(info));
  await p.keyboard.press('ArrowRight'); await p.waitForTimeout(1500);
  if (i === 2) await p.screenshot({ path: 'bron/gfoto/_viewer2.png' });
}
fs.writeFileSync('bron/gfoto/who.txt', out.join('\n'));
await b.close();
