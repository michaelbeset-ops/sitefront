import { chromium } from 'playwright'; import fs from 'node:fs';
const b = await chromium.launch({ channel: 'chrome', args: ['--headless=new','--disable-blink-features=AutomationControlled'] });
const ctx = await b.newContext({ locale: 'nl-NL', viewport: { width: 1300, height: 1400 }, userAgent:'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/141.0.0.0 Safari/537.36' });
const p = await ctx.newPage();
const imgs = new Set();
for (const [naam, u] of [['ig', 'https://www.instagram.com/boutiquemieke/'], ['fb', 'https://www.facebook.com/search/top?q=Boutique%20Mieke%20Oss']]) {
  await p.goto(u, { waitUntil: 'domcontentloaded', timeout: 40000 }).catch(()=>{});
  await p.waitForTimeout(5000);
  for (const t of ['Optionele cookies afwijzen','Alleen essentiële cookies toestaan','Optionele cookies weigeren','Decline optional cookies']) { const r=p.locator(`[role=button]:has-text("${t}"), button:has-text("${t}")`).first(); if (await r.count()) { await r.click().catch(()=>{}); await p.waitForTimeout(2500);} }
  const cl = p.locator('[aria-label="Sluiten"], [aria-label="Close"]').first(); if (await cl.count()) await cl.click().catch(()=>{});
  for (let i=0;i<4;i++){ await p.mouse.wheel(0,1200); await p.waitForTimeout(1500); const c = p.locator('[aria-label="Sluiten"]').first(); if (await c.count()) await c.click().catch(()=>{}); }
  await p.screenshot({ path: `bron/soc/${naam}.png` });
  fs.writeFileSync(`bron/soc/${naam}.txt`, p.url() + '\n' + await p.evaluate(() => document.body.innerText) + '\n\nLINKS\n' + (await p.evaluate(() => [...document.querySelectorAll('a[href]')].map(a=>a.href))).join('\n'));
  fs.writeFileSync(`bron/soc/${naam}-imgs.txt`, (await p.evaluate(()=>[...document.querySelectorAll('img')].filter(i=>i.naturalWidth>150).map(i=>i.naturalWidth+'x'+i.naturalHeight+' '+(i.alt||'').slice(0,200).replace(/\n/g,' ')+' || '+i.src))).join('\n'));
}
await b.close();
