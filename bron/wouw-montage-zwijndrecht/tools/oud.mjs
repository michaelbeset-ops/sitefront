import { createRequire } from 'node:module';
const { chromium } = createRequire('C:/Users/Micha/Downloads/Sitefront/werkwijze/tools/')('playwright');
const b = await chromium.launch();
for (const [url, tag] of [['https://www.wouwmontage.nl/', 'montage'], ['https://www.wouwzonwering.nl/', 'zonwering'], ['https://www.wouwmontage.nl/diensten/garagedeuren', 'montage-404'], ['https://www.wouwzonwering.nl/aanbod/onderdelen', 'zonwering-onderdelen']])
  for (const [w, h] of [[1440, 900], [390, 844]]) {
    const p = await (await b.newContext({ viewport: { width: w, height: h }, isMobile: w < 500, hasTouch: w < 500 })).newPage();
    await p.goto(url, { waitUntil: 'networkidle' }).catch(() => {}); await p.waitForTimeout(1500);
    await p.screenshot({ path: `bron/web/oud-${tag}-${w}.png` });
    console.log(tag, w, JSON.stringify(await p.evaluate(() => ({ sw: document.documentElement.scrollWidth, H: document.documentElement.scrollHeight, tel: document.querySelectorAll('a[href^="tel:"]').length, wa: document.querySelectorAll('a[href*="wa.me"],a[href*="whatsapp"]').length, h1: document.querySelector('h1')?.innerText, imgs: document.images.length }))));
    await p.context().close();
  }
await b.close();
