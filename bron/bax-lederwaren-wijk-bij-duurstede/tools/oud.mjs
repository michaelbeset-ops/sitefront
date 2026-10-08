import { chromium } from 'playwright';
const b = await chromium.launch();
for (const [url, n] of [['http://www.baxluxelederwaren.nl/', 'domein'], ['https://www.facebook.com/baxluxelederwaren', 'facebook']]) {
  for (const [w, h] of [[1440, 900], [390, 844]]) {
    const c = await b.newContext({ viewport: { width: w, height: h }, isMobile: w < 500, hasTouch: w < 500, locale: 'nl-NL' }); const p = await c.newPage();
    await p.goto(url, { waitUntil: 'domcontentloaded' }); await p.waitForTimeout(4000);
    const r = await p.evaluate(() => ({ title: document.title, tels: document.querySelectorAll('a[href^="tel:"]').length, txt: document.body.innerText.slice(0, 300).replace(/\s+/g, ' ') }));
    console.log(n, w, JSON.stringify(r));
    await p.screenshot({ path: `bron/web/${n}-${w}.png` }); await c.close();
  }
}
await b.close();
