import { chromium } from 'playwright'; import fs from 'node:fs';
const b = await chromium.launch({ channel: 'chrome', args: ['--headless=new','--disable-blink-features=AutomationControlled'] });
const ctx = await b.newContext({ locale: 'nl-NL', viewport: { width: 1280, height: 1000 }, userAgent: 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/141.0.0.0 Safari/537.36' });
const p = await ctx.newPage();
const imgs = new Set();
p.on('response', r => { const u = r.url(); if (/scontent|cdninstagram/.test(u) && /\.(jpg|webp)/.test(u)) imgs.add(u); });
for (const [n,u] of [['fb','https://www.facebook.com/comfortBVveranda'],['ig','https://www.instagram.com/comfortb.v/'],['bing','https://www.bing.com/search?q=%22Comfort+Wonen%22+Nieuwegein+veranda&setlang=nl'],['bing2','https://www.bing.com/search?q=%22comfort+bv%22+veranda+kozijnen+Nieuwegein&setlang=nl']]) {
  await p.goto(u, { waitUntil: 'load', timeout: 45000 }).catch(e=>console.log('err', e.message));
  await p.waitForTimeout(5000);
  for (const t of ['Alles weigeren','Optionele cookies weigeren','Decline optional cookies','Alleen essentiële cookies toestaan','Weigeren']) { const k = p.getByRole('button', { name: t }).first(); if (await k.count()) { await k.click().catch(()=>{}); await p.waitForTimeout(2000); break; } }
  const c = p.locator('[aria-label="Sluiten"], [aria-label="Close"]').first(); if (await c.count()) await c.click().catch(()=>{});
  for (let i=0;i<4;i++){ await p.mouse.wheel(0,1500); await p.waitForTimeout(1200); }
  await p.screenshot({ path: `bron/soc/${n}.png` });
  fs.writeFileSync(`bron/soc/${n}.txt`, p.url() + '\n' + await p.evaluate(() => document.body.innerText));
  const links = await p.evaluate(() => [...document.querySelectorAll('a[href]')].map(a => a.href).filter(h => /facebook|instagram|comfort/i.test(h)));
  fs.appendFileSync(`bron/soc/${n}.txt`, '\n\nLINKS\n' + [...new Set(links)].join('\n'));
  console.log(n, p.url());
}
fs.writeFileSync('bron/soc/imgs.txt', [...imgs].join('\n'));
await b.close();
