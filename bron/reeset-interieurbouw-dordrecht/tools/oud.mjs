import { chromium } from 'playwright';
const b = await chromium.launch();
for (const s of ['', 'watdoenwij/', 'wiezijnwij/', 'contact/']) for (const [w, h] of [[1440, 900], [390, 844]]) {
  const p = await (await b.newContext({ viewport: { width: w, height: h }, isMobile: w < 500, hasTouch: w < 500, locale: 'nl-NL' })).newPage();
  const t0 = Date.now();
  await p.goto('https://reeset-interieurbouw.nl/' + s, { waitUntil: 'networkidle', timeout: 60000 }).catch(e => console.log('timeout', s));
  const ms = Date.now() - t0;
  await p.waitForTimeout(1500);
  const n = (s.replace('/', '') || 'home');
  await p.screenshot({ path: `bron/web/oud-${n}-${w}.png` });
  if (w === 390) await p.screenshot({ path: `bron/web/oud-${n}-${w}-full.png`, fullPage: true });
  console.log(n, w, ms + 'ms', JSON.stringify(await p.evaluate(() => ({ sw: document.documentElement.scrollWidth, H: document.documentElement.scrollHeight, title: document.title, desc: document.querySelector('meta[name=description]')?.content || 'GEEN', h1: [...document.querySelectorAll('h1')].map(e => e.innerText.slice(0, 60)), tel: [...document.querySelectorAll('a[href^="tel:"]')].map(a => a.getAttribute('href')), wa: document.querySelectorAll('a[href*="wa.me"],a[href*="whatsapp"]').length, imgs: document.images.length, bytes: performance.getEntriesByType('resource').reduce((a, r) => a + (r.transferSize || 0), 0) }))));
  await p.context().close();
}
await b.close();
