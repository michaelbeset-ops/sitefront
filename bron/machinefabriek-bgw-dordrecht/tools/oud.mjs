import { chromium } from 'playwright';
const b = await chromium.launch();
for (const s of ['index', 'geschiedenis', 'contact']) for (const [w, h] of [[1440, 900], [390, 844]]) {
  const p = await (await b.newContext({ viewport: { width: w, height: h }, isMobile: w < 500, hasTouch: w < 500, locale: 'nl-NL' })).newPage();
  await p.goto('https://www.machinefabriekbgw.nl/' + s + '.html', { waitUntil: 'networkidle', timeout: 60000 }).catch(e => console.log('timeout', s));
  await p.waitForTimeout(800);
  await p.screenshot({ path: `bron/web/oud-${s}-${w}.png` });
  console.log(s, w, JSON.stringify(await p.evaluate(() => ({ sw: document.documentElement.scrollWidth, iw: innerWidth, vp: document.querySelector('meta[name=viewport]')?.content || 'GEEN viewport', tel: document.querySelectorAll('a[href^="tel:"]').length, mail: document.querySelectorAll('a[href^="mailto:"]').length, imgs: document.images.length, fs: getComputedStyle(document.querySelector('p')||document.body).fontSize, https: location.protocol }))));
  await p.context().close();
}
await b.close();
