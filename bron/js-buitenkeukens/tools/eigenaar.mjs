import { chromium } from 'playwright'; import fs from 'node:fs';
const b = await chromium.launch({ channel: 'chrome', args: ['--headless=new','--disable-blink-features=AutomationControlled'] });
const ctx = await b.newContext({ locale: 'nl-NL', userAgent: 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/141.0.0.0 Safari/537.36', viewport: { width: 1400, height: 1000 } });
const p = await ctx.newPage();
await p.goto('https://www.google.com/maps/search/JS%20buitenkeukens?hl=nl', { waitUntil: 'domcontentloaded' });
await p.waitForTimeout(3000);
if (p.url().includes('consent')) { await p.getByRole('button', { name: /Alles afwijzen/ }).first().click(); await p.waitForTimeout(4000); }
await p.waitForTimeout(5000);
const grab = async () => p.evaluate(() => [...document.querySelectorAll('[style*="googleusercontent"], img[src*="googleusercontent"]')].map(e => e.src || (e.style.backgroundImage.match(/url\("?(.*?)"?\)/) || [])[1]).filter(Boolean).map(u=>u.split('=')[0]));
for (const tab of ['Van eigenaar', 'Binnen']) {
  const t = p.locator(`button:has-text("${tab}"), [role=tab]:has-text("${tab}")`).first();
  console.log(tab, await t.count());
  if (!(await t.count())) continue;
  await t.click().catch(e=>console.log('klik', e.message)); await p.waitForTimeout(5000);
  await p.screenshot({ path: `bron/gfoto/_tab-${tab}.png` });
  const s = new Set();
  for (let i = 0; i < 20; i++) { (await grab()).forEach(u => s.add(u)); await p.evaluate(() => document.querySelectorAll('div').forEach(d => { if (d.scrollHeight > d.clientHeight + 50 && d.clientHeight > 300) d.scrollBy(0, 1200); })); await p.waitForTimeout(700); }
  fs.writeFileSync(`bron/gfoto/tab-${tab}.txt`, [...s].join('\n')); console.log(tab, s.size);
  await p.goBack().catch(()=>{}); await p.waitForTimeout(3000);
}
await b.close();
