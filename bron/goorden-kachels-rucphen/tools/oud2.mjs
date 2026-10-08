import { chromium } from 'playwright';
const b = await chromium.launch();
for (const [pad, tag] of [['product-categorie/nieuwe-kachels/', 'nieuwe-kachels'], ['wie-zijn-wij/', 'lorem-wie-zijn-wij'], ['algemene-voorwaarden/', 'lorem-voorwaarden']]) for (const [w, h] of [[1440, 900], [390, 844]]) {
  const p = await (await b.newContext({ viewport: { width: w, height: h }, isMobile: w < 500, locale: 'nl-NL' })).newPage();
  await p.goto('https://goordenkachels.nl/' + pad, { waitUntil: 'networkidle', timeout: 60000 }).catch(() => {});
  await p.waitForTimeout(2000);
  await p.screenshot({ path: `bron/web/oud-${tag}-${w}.png` });
  console.log(tag, w, (await p.evaluate(() => document.querySelector('main, #main, .content')?.innerText || document.body.innerText)).replace(/\s+/g, ' ').slice(0, 300));
  await p.context().close();
}
const p = await (await b.newContext({ viewport: { width: 1440, height: 900 } })).newPage();
await p.goto('https://goordenkachels.nl/contact/', { waitUntil: 'networkidle' }); await p.waitForTimeout(2000);
console.log('CONTACT', (await p.evaluate(() => document.body.innerText)).replace(/\s+/g, ' '));
await p.screenshot({ path: 'bron/web/oud-contact-1440-full.png', fullPage: true });
await b.close();
