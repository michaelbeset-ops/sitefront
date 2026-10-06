import { chromium } from 'playwright';
const b = await chromium.launch();
for (const [u, n] of [['http://www.basvandervencatering.nl/', 'oud'], ['https://www.basenanneloes.nl/', 'nieuw']]) {
  for (const w of [1440, 390]) {
    const p = await (await b.newContext({ viewport: { width: w, height: w > 1000 ? 900 : 844 } })).newPage();
    await p.goto(u, { waitUntil: 'load', timeout: 45000 }).catch(e => console.log('ERR', e.message));
    await p.waitForTimeout(2500);
    await p.screenshot({ path: `bron/${n}-${w}.png` });
    console.log(n, w, 'sw', await p.evaluate(() => document.documentElement.scrollWidth), 'H', await p.evaluate(() => document.documentElement.scrollHeight));
    await p.context().close();
  }
}
await b.close();
