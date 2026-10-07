import { chromium } from 'playwright'; import fs from 'node:fs';
const b = await chromium.launch({ channel: 'chrome', args: ['--headless=new','--disable-blink-features=AutomationControlled'] });
const ctx = await b.newContext({ locale: 'nl-NL', userAgent: 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/141.0.0.0 Safari/537.36', viewport: { width: 1400, height: 1000 } });
const p = await ctx.newPage();
await p.goto('https://www.google.com/maps/search/' + encodeURIComponent('Openhaardenwerk Lucas Gasselstraat 27 Eindhoven') + '?hl=nl', { waitUntil: 'load', timeout: 45000 }).catch(()=>{});
await p.waitForTimeout(2500);
const r = p.locator('button:has-text("Alles afwijzen")').first(); if (await r.count()) { await r.click(); await p.waitForTimeout(4000); }
await p.waitForTimeout(4000);
await p.locator('button[aria-label*="Foto"]').first().click().catch(()=>console.log('geen fotoknop')); await p.waitForTimeout(5000);
const out = [];
for (let i = 0; i < 32; i++) {
  const info = await p.evaluate(() => {
    const t = document.body.innerText.split('\n').filter(Boolean).slice(0, 25).join(' | ');
    const big = [...document.querySelectorAll('img[src*="googleusercontent"], [style*="googleusercontent"]')].map(e => ({ u: e.src || (e.style.backgroundImage.match(/url\("?(.*?)"?\)/) || [])[1], w: e.getBoundingClientRect().width })).sort((a,b)=>b.w-a.w)[0];
    return { t, big: big && big.u };
  });
  out.push(i + ' ' + JSON.stringify(info)); await p.screenshot({ path: 'bron/gfoto/v/' + String(i).padStart(2,'0') + '.jpg', type: 'jpeg', quality: 50 });
  await p.keyboard.press('ArrowRight'); await p.waitForTimeout(1600);
}
fs.writeFileSync('bron/gfoto/who.txt', out.join('\n'));
await b.close();
