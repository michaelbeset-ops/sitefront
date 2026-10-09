import { chromium } from 'playwright'; import fs from 'node:fs';
const b = await chromium.launch({ channel: 'chrome', args: ['--headless=new','--disable-blink-features=AutomationControlled'] });
const UA = 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/141.0.0.0 Safari/537.36';
const UAM = 'Mozilla/5.0 (iPhone; CPU iPhone OS 17_0 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/17.0 Mobile/15E148 Safari/604.1';
const doe = async (naam, url, w, h, opts = {}) => {
  const c = await b.newContext({ locale: 'nl-NL', viewport: { width: w, height: h }, userAgent: w < 500 ? UAM : UA, isMobile: w < 500, hasTouch: w < 500 });
  const p = await c.newPage();
  try {
    await p.goto(url, { waitUntil: 'domcontentloaded', timeout: 40000 }); await p.waitForTimeout(3500);
    for (const t of ['Alles afwijzen', 'Weigeren', 'Optionele cookies weigeren', 'Reject', 'Alle cookies weigeren']) { const k = p.locator(`button:has-text("${t}")`).first(); if (await k.count()) { await k.click().catch(() => {}); await p.waitForTimeout(2500); break; } }
    await p.waitForTimeout(2000);
    await p.screenshot({ path: `bron/web/${naam}-${w}.png`, fullPage: !!opts.full });
    if (opts.txt) fs.writeFileSync(`bron/web/${naam}.txt`, url + '\n\n' + await p.evaluate(() => document.body.innerText));
  } catch (e) { console.log(naam, w, e.message); }
  await c.close();
};
const bing = 'https://www.bing.com/search?q=%22JS+buitenkeukens%22&setlang=nl&cc=NL';
const ddg = 'https://html.duckduckgo.com/html/?q=%22JS+buitenkeukens%22';
for (const [w, h] of [[1440, 900], [390, 844]]) {
  await doe('bing-js-buitenkeukens', bing, w, h, { txt: w === 1440 });
  await doe('ddg-js-buitenkeukens', ddg, w, h, { txt: w === 1440 });
  await doe('instagram-profiel', 'https://www.instagram.com/jsbuitenkeukens/', w, h);
  await doe('google-profiel', 'https://www.google.com/maps/place/JS+buitenkeukens/data=!4m2!3m1!1s0xaee74a88e505de81:0xc11e8254c7f62d15?hl=nl', w, h, { txt: w === 1440 });
  await doe('jebuitenkeuken-nl-ANDER-BEDRIJF', 'https://jebuitenkeuken.nl/', w, h, { txt: w === 1440, full: false });
}
await b.close();
