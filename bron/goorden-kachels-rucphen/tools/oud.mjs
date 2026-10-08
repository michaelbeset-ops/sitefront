import { chromium } from 'playwright';
const b = await chromium.launch();
for (const [pad, tag] of [['', 'home'], ['product-categorie/gebruikte-kachels/', 'gebruikt'], ['contact/', 'contact']]) for (const [w, h] of [[1440, 900], [390, 844]]) {
  const p = await (await b.newContext({ viewport: { width: w, height: h }, isMobile: w < 500, hasTouch: w < 500, locale: 'nl-NL' })).newPage();
  await p.goto('https://goordenkachels.nl/' + pad, { waitUntil: 'networkidle', timeout: 60000 }).catch(() => {});
  await p.waitForTimeout(2500);
  await p.screenshot({ path: `bron/web/oud-${tag}-${w}.png` });
  if (tag !== 'contact') await p.screenshot({ path: `bron/web/oud-${tag}-${w}-full.png`, fullPage: true });
  console.log(tag, w, JSON.stringify(await p.evaluate(() => ({ sw: document.documentElement.scrollWidth, h: document.documentElement.scrollHeight, vp: document.querySelector('meta[name=viewport]')?.content || 'GEEN', tel: document.querySelectorAll('a[href^="tel:"]').length, callto: document.querySelectorAll('a[href^="callto:"]').length, wa: document.querySelectorAll('a[href*="wa.me"],a[href*="whatsapp"]').length, h1: [...document.querySelectorAll('h1')].map(e => e.innerText.trim()).join(' / '), title: document.title, imgs: [...document.images].filter(i=>i.naturalWidth).map(i => i.naturalWidth + 'x' + i.naturalHeight + ' ' + i.src.split('/').slice(-3).join('/')).slice(0, 25), copy: (document.body.innerText.match(/(©|copyright)[^\n]{0,60}/gi) || []) }))));
  await p.context().close();
}
await b.close();
