import { chromium } from 'playwright';
const b = await chromium.launch();
for (const [pad, tag] of [['', 'home'], ['pelletkachels/onze-pelletkachels/', 'onze-pelletkachels'], ['contact/', 'contact']]) for (const [w, h] of [[1440, 900], [390, 844]]) {
  const p = await (await b.newContext({ viewport: { width: w, height: h }, isMobile: w < 500, hasTouch: w < 500, locale: 'nl-NL' })).newPage();
  await p.goto('https://www.ecologicpelletkachels.nl/' + pad, { waitUntil: 'networkidle', timeout: 60000 }).catch(() => {});
  await p.waitForTimeout(2500);
  await p.screenshot({ path: `bron/web/oud-${tag}-${w}.png` });
  if (tag === 'home') await p.screenshot({ path: `bron/web/oud-${tag}-${w}-full.png`, fullPage: true });
  console.log(tag, w, JSON.stringify(await p.evaluate(() => ({ sw: document.documentElement.scrollWidth, h: document.documentElement.scrollHeight, vp: document.querySelector('meta[name=viewport]')?.content || 'GEEN', tel: document.querySelectorAll('a[href^="tel:"]').length, wa: document.querySelectorAll('a[href*="wa.me"],a[href*="whatsapp"]').length, h1: [...document.querySelectorAll('h1')].map(e => e.innerText.trim()).join(' / '), title: document.title, fout: document.body.innerText.includes('Contact formulier niet gevonden'), foutZichtbaar: [...document.querySelectorAll('body *')].some(e => e.children.length === 0 && /Contact formulier niet gevonden/.test(e.textContent) && e.offsetParent !== null), forms: document.querySelectorAll('form').length, cart: /€0,00/.test(document.body.innerText) }))));
  await p.context().close();
}
await b.close();
