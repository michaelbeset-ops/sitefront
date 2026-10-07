import { chromium } from 'playwright';
const b = await chromium.launch();
const sites = [['https://teusvlot.com/nl/', 'groep'], ['https://teusvlotdieselmarine.com/', 'tvdm'], ['https://teusvlot.com/nl/vacatures', 'vacatures']];
for (const [u, s] of sites) for (const [w, h] of [[1440, 900], [390, 844]]) {
  const p = await (await b.newContext({ viewport: { width: w, height: h }, isMobile: w < 500, hasTouch: w < 500, locale: 'nl-NL' })).newPage();
  const t0 = Date.now();
  await p.goto(u, { waitUntil: 'networkidle', timeout: 60000 }).catch(e => console.log('timeout', u));
  const ms = Date.now() - t0;
  await p.waitForTimeout(1500);
  await p.screenshot({ path: `bron/web/oud-${s}-${w}.png` });
  await p.screenshot({ path: `bron/web/oud-${s}-${w}-full.png`, fullPage: true }).catch(() => {});
  console.log(s, w, ms + 'ms', JSON.stringify(await p.evaluate(() => ({ sw: document.documentElement.scrollWidth, h: document.documentElement.scrollHeight, vp: document.querySelector('meta[name=viewport]')?.content || 'GEEN viewport', tel: document.querySelectorAll('a[href^="tel:"]').length, mail: document.querySelectorAll('a[href^="mailto:"]').length, h1: [...document.querySelectorAll('h1')].map(e => e.textContent.trim()).join(' | '), title: document.title, desc: document.querySelector('meta[name=description]')?.content || 'GEEN', imgs: document.images.length, noAlt: [...document.images].filter(i => !i.alt).length, http: [...document.querySelectorAll('a[href^="http:"]')].length }))));
  await p.context().close();
}
await b.close();
