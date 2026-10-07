import { chromium } from 'playwright'; import fs from 'node:fs';
const b = await chromium.launch({ channel: 'chrome', args: ['--headless=new','--disable-blink-features=AutomationControlled'] });
const ctx = await b.newContext({ locale: 'nl-NL', viewport: { width: 1300, height: 1400 }, userAgent:'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/141.0.0.0 Safari/537.36' });
const p = await ctx.newPage();
const all = [];
for (const [naam,u] of [['fb','https://www.facebook.com/profile.php?id=100070841650571'],['fbph','https://www.facebook.com/profile.php?id=100070841650571&sk=photos'],['klik','https://www.kliknieuwsoss.nl/nieuws/zakelijk/184452/boutique-mieke-opent-deuren-in-kerkstraat']]) {
  await p.goto(u, { waitUntil: 'domcontentloaded', timeout: 40000 }).catch(()=>{});
  await p.waitForTimeout(5000);
  for (const t of ['Optionele cookies afwijzen','Alleen essentiële cookies toestaan','Optionele cookies weigeren','Weigeren','Alles weigeren']) { const r=p.locator(`[role=button]:has-text("${t}"), button:has-text("${t}")`).first(); if (await r.count()) { await r.click().catch(()=>{}); await p.waitForTimeout(2500);} }
  for (let i=0;i<6;i++){ const c = p.locator('[aria-label="Sluiten"]').first(); if (await c.count()) await c.click().catch(()=>{}); await p.mouse.wheel(0,1300); await p.waitForTimeout(1500); }
  await p.screenshot({ path: `bron/soc/${naam}.png` });
  fs.writeFileSync(`bron/soc/${naam}.txt`, p.url() + '\n' + await p.evaluate(() => document.body.innerText));
  const im = await p.evaluate(()=>[...document.querySelectorAll('img')].filter(i=>i.naturalWidth>150).map(i=>i.naturalWidth+'x'+i.naturalHeight+' '+(i.alt||'').slice(0,160).replace(/\n/g,' ')+' || '+i.src + ' || ' + (i.closest('a')?.href||'')));
  fs.writeFileSync(`bron/soc/${naam}-imgs.txt`, im.join('\n'));
}
await b.close();
