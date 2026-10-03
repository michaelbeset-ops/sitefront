import { chromium } from 'playwright';
const b = await chromium.launch({ channel: 'chrome', args: ['--headless=new','--disable-blink-features=AutomationControlled'] });
const p = await (await b.newContext({ locale: 'nl-NL', viewport:{width:1280,height:1600}, userAgent: 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/141.0.0.0 Safari/537.36' })).newPage();
await p.goto('https://www.bing.com/search?setlang=nl&cc=NL&q=' + encodeURIComponent('Autoserviceonline Strijen facebook'), { waitUntil: 'domcontentloaded' }); await p.waitForTimeout(2500);
const hrefs = await p.evaluate(() => [...document.querySelectorAll('li.b_algo')].map(l => [l.querySelector('h2')?.innerText, l.querySelector('h2 a')?.href]));
console.log(hrefs.slice(0,4));
const h = hrefs.find(x => /^Autoserviceonline/.test(x[0]||''));
if (h) { await p.goto(h[1], { waitUntil: 'load' }); await p.waitForTimeout(6000); console.log('URL', p.url());
  const c = p.locator('[aria-label="Sluiten"], [aria-label="Close"]').first(); if (await c.count()) { await c.click().catch(()=>{}); await p.waitForTimeout(1500); }
  console.log((await p.evaluate(() => document.body.innerText)).slice(0, 4000));
  await p.screenshot({ path: 'bron/facebook.png', fullPage: false });
  const imgs = await p.evaluate(() => [...document.images].map(i => [i.naturalWidth, i.src]).filter(x => x[0] > 200));
  console.log(JSON.stringify(imgs.slice(0,20)));
}
await b.close();
