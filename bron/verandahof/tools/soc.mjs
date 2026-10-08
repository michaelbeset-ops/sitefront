import { chromium } from 'playwright'; import fs from 'node:fs';
const b = await chromium.launch({ channel: 'chrome', args: ['--headless=new','--disable-blink-features=AutomationControlled'] });
const ctx = await b.newContext({ locale: 'nl-NL', viewport: { width: 1280, height: 1000 }, userAgent: 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/141.0.0.0 Safari/537.36' });
const p = await ctx.newPage();
const list = JSON.parse(process.argv[2]);
for (const [n,u] of list) {
  await p.goto(u, { waitUntil: 'load', timeout: 45000 }).catch(e=>console.log('err', e.message));
  await p.waitForTimeout(4000);
  for (const t of ['Alles weigeren','Alles afwijzen','Optionele cookies weigeren','Decline optional cookies','Alleen essentiële cookies toestaan','Weigeren']) { const k = p.getByRole('button', { name: t }).first(); if (await k.count()) { await k.click().catch(()=>{}); await p.waitForTimeout(2000); break; } }
  const c = p.locator('[aria-label="Sluiten"], [aria-label="Close"]').first(); if (await c.count()) await c.click().catch(()=>{});
  for (let i=0;i<3;i++){ await p.mouse.wheel(0,1500); await p.waitForTimeout(1000); }
  await p.screenshot({ path: `bron/soc/${n}.png` });
  const links = await p.evaluate(() => [...document.querySelectorAll('a[href]')].map(a => a.href).filter(h => !/bing\.com|microsoft|msn\.com|go\.microsoft/.test(h)));
  fs.writeFileSync(`bron/soc/${n}.txt`, p.url() + '\n' + await p.evaluate(() => document.body.innerText) + '\n\nLINKS\n' + [...new Set(links)].join('\n'));
  console.log(n, p.url());
}
await b.close();
