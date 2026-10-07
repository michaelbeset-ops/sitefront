import { chromium } from 'playwright';
const b = await chromium.launch();
for (const [w,h,n] of [[1440,900,'oud-1440'],[390,844,'oud-390']]) {
  const p = await (await b.newContext({ viewport: { width: w, height: h } })).newPage();
  await p.goto('https://web.archive.org/web/20251016162938if_/https://www.bglgoldandsilver.nl/', { waitUntil: 'load', timeout: 90000 }).catch(e=>console.log(e.message));
  await p.waitForTimeout(5000);
  await p.screenshot({ path: `bron/web/${n}.png` });
  await p.screenshot({ path: `bron/web/${n}-full.png`, fullPage: true });
  console.log(n, await p.evaluate(() => [document.documentElement.scrollWidth, document.querySelector('meta[name=viewport]')?.content, getComputedStyle(document.body).fontSize]));
}
await b.close();
