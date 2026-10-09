import { chromium } from 'playwright'; import fs from 'node:fs';
const b = await chromium.launch({ channel: 'chrome', args: ['--headless=new','--disable-blink-features=AutomationControlled'] });
const ctx = await b.newContext({ locale: 'nl-NL', userAgent: 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/141.0.0.0 Safari/537.36', viewport: { width: 1400, height: 1000 } });
const p = await ctx.newPage();
await p.goto('https://www.google.com/maps/place/Biljartwinkel+Ludo+Kools/data=!4m2!3m1!1s0x47c40d41f2c1b5af:0x7c0c7d176b4e3685?hl=nl', { waitUntil: 'domcontentloaded' });
await p.waitForTimeout(3000);
if (p.url().includes('consent')) { await p.getByRole('button', { name: /Alles afwijzen/ }).first().click(); await p.waitForTimeout(4000); }
await p.waitForSelector('h1'); await p.waitForTimeout(2500);
await p.locator('button[aria-label*="Foto"]').first().click(); await p.waitForTimeout(4000);
const res = [];
for (const tab of ['Van eigenaar', 'Alle']) {
  await p.getByText(tab, { exact: true }).first().click().catch(e => console.log('tab?', tab)); await p.waitForTimeout(3500);
  const n = await p.locator('a[data-photo-index]').count(); console.log(tab, 'tegels', n);
  for (let i = 0; i < n; i++) {
    await p.locator('a[data-photo-index]').nth(i).click().catch(()=>{}); await p.waitForTimeout(1800);
    const info = await p.evaluate(() => { const t = document.body.innerText.match(/Biljartwinkel Ludo Kools\n([^\n]*)\n[\s\S]{0,80}?(Foto|Video) - ([^\n]*)/); const u = [...document.querySelectorAll('[style*="googleusercontent"], img[src*="googleusercontent"]')].map(e => e.src || (e.style.backgroundImage.match(/url\("?(.*?)"?\)/) || [])[1]).filter(x => x && /gps-cs|AF1Q|\/p\//.test(x)); return { wie: t ? t[1] + ' | ' + t[2] + ' ' + t[3] : '?', u }; });
    res.push({ tab, i, ...info }); console.log(tab, i, info.wie);
  }
}
fs.writeFileSync('bron/gfoto/wie.json', JSON.stringify(res, null, 1)); await b.close();
