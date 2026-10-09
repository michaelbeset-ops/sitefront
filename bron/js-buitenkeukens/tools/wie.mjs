import { chromium } from 'playwright'; import fs from 'node:fs';
const b = await chromium.launch({ channel: 'chrome', args: ['--headless=new','--disable-blink-features=AutomationControlled'] });
const ctx = await b.newContext({ locale: 'nl-NL', userAgent: 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/141.0.0.0 Safari/537.36', viewport: { width: 1400, height: 1000 } });
const p = await ctx.newPage();
await p.goto('https://www.google.com/maps/search/JS%20buitenkeukens?hl=nl', { waitUntil: 'domcontentloaded' });
await p.waitForTimeout(3000);
if (p.url().includes('consent')) { await p.getByRole('button', { name: /Alles afwijzen/ }).first().click(); await p.waitForTimeout(4000); }
await p.waitForTimeout(5000);
await p.locator('button[aria-label*="Foto"]').first().click(); await p.waitForTimeout(4000);
const out = [];
for (let i = 0; i < 30; i++) {
  const r = await p.evaluate(() => {
    const hdr = [...document.querySelectorAll('div')].filter(d => /Foto -|Video -/.test(d.innerText) && d.innerText.length < 120).map(d => d.innerText.replace(/\s+/g, ' ')).sort((a,b)=>a.length-b.length)[0];
    const u = location.href; return { hdr, u: u.slice(0, 200) };
  });
  out.push(i + ' | ' + r.hdr + ' | ' + r.u); 
  const n = p.locator('button[aria-label="Volgende"]').last();
  if (!(await n.count())) break; await n.click().catch(()=>{}); await p.waitForTimeout(1800);
}
await p.screenshot({ path: 'bron/gfoto/_wie-laatste.png' });
fs.writeFileSync('bron/gfoto/wie.txt', out.join('\n')); console.log(out.join('\n'));
await b.close();
