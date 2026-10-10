import { chromium } from 'playwright';
const b = await chromium.launch();
for (const [w, h] of [[1440, 1000], [390, 844]]) {
  const p = await (await b.newContext({ viewport: { width: w, height: h } })).newPage();
  await p.goto('http://127.0.0.1:4495/sitefront/sps-parket/#aanvraag', { waitUntil: 'networkidle' });
  await p.selectOption('#vloer', 'visgraatvloer'); await p.fill('#m2', '42'); await p.selectOption('#ruimte', 'eetkamer'); await p.selectOption('#wens', 'laten schuren en lakken'); await p.fill('#naam', 'Sanne');
  await p.locator('#aanvraag').scrollIntoViewIfNeeded(); await p.waitForTimeout(1200);
  await p.locator('#aanvraag').screenshot({ path: `shots/wow-${w}.png` });
  console.log(w, decodeURIComponent((await p.locator('[data-stuur]').getAttribute('href')).split('text=')[1]), await p.evaluate(() => document.documentElement.scrollWidth));
}
await b.close();
