import { chromium } from 'playwright';
const b = await chromium.launch({ args: ['--disable-blink-features=AutomationControlled'] });
for (const [w, h, n] of [[1440, 900, 'fb-desktop'], [390, 844, 'fb-390']]) {
  const ctx = await b.newContext({ viewport: { width: w, height: h }, locale: 'nl-NL', userAgent: w<500 ? 'Mozilla/5.0 (Linux; Android 14; Pixel 8) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/140.0.0.0 Mobile Safari/537.36' : 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/140.0.0.0 Safari/537.36' });
  const p = await ctx.newPage();
  await p.goto('https://www.facebook.com/ohojcoffee', { waitUntil: 'domcontentloaded' }).catch(()=>{}); await p.waitForTimeout(5000);
  const btn = p.getByRole('button', { name: /Optionele cookies weigeren|Decline optional cookies|Alleen essentiële/ }).first(); if (await btn.count()) { await btn.click().catch(()=>{}); await p.waitForTimeout(2500); }
  await p.screenshot({ path: `bron/web/${n}.png` });
  await p.mouse.wheel(0, 900); await p.waitForTimeout(2500); await p.screenshot({ path: `bron/web/${n}-scroll.png` });
  console.log(n, (await p.evaluate(() => document.body.innerText.replace(/\s+/g,' ').slice(0,400))));
  await ctx.close();
}
await b.close();
