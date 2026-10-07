import { chromium } from 'playwright'; import fs from 'node:fs';
const b = await chromium.launch({ channel: 'chrome', args: ['--headless=new'] });
const u = 'https://nlmapguide.org/details/boutique-mieke-ChIJv5D';
for (const w of [390, 1440]) {
  const p = await (await b.newContext({ viewport: { width: w, height: w < 500 ? 844 : 900 }, isMobile: w<500, hasTouch: w<500, locale: 'nl-NL' })).newPage();
  const resp = await p.goto(u, { waitUntil: 'networkidle', timeout: 45000 }).catch(e => null);
  await p.waitForTimeout(3000);
  console.log(w, resp?.status(), p.url(), await p.title());
  await p.screenshot({ path: `bron/web/oud-${w}.png` });
  await p.screenshot({ path: `bron/web/oud-full-${w}.png`, fullPage: true });
  if (w === 1440) fs.writeFileSync('bron/web/nlmapguide.txt', p.url() + '\n' + await p.evaluate(() => document.body.innerText) + '\nLINKS\n' + (await p.evaluate(() => [...document.querySelectorAll('a[href]')].map(a => a.href + ' | ' + a.innerText.trim().slice(0,60)))).join('\n'));
}
await b.close();
