import { chromium } from 'playwright';
const b = await chromium.launch();
for (const [w, h, n] of [[1440, 900, 'oud-desktop'], [390, 844, 'oud-390']]) {
  const p = await (await b.newContext({ viewport: { width: w, height: h }, locale: 'nl-NL' })).newPage();
  await p.goto('https://www.grandcafemnmoeder.nl/', { waitUntil: 'networkidle' }).catch(()=>{}); await p.waitForTimeout(2500);
  await p.screenshot({ path: `bron/web/${n}.png` });
  console.log(n, await p.evaluate(() => [document.title, document.documentElement.scrollWidth, document.body.innerText.replace(/\s+/g,' ').slice(0,300)]));
}
await b.close();
