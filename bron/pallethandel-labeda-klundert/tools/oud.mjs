import { chromium } from 'playwright';
const b = await chromium.launch();
for (const [u, s] of [['https://pallethandellabeda.nl/', 'home'], ['https://pallethandellabeda.nl/2017/12/02/hello-world/', 'hello-world']]) for (const [w, h] of [[1440, 900], [390, 844]]) {
  const p = await (await b.newContext({ viewport: { width: w, height: h }, isMobile: w < 500, hasTouch: w < 500, locale: 'nl-NL' })).newPage();
  const t0 = Date.now(); await p.goto(u, { waitUntil: 'networkidle', timeout: 60000 }).catch(() => console.log('timeout')); const ms = Date.now() - t0;
  await p.waitForTimeout(1200);
  await p.screenshot({ path: `bron/web/oud-${s}-${w}.png` });
  await p.screenshot({ path: `bron/web/oud-${s}-${w}-full.png`, fullPage: true });
  console.log(s, w, ms + 'ms', JSON.stringify(await p.evaluate(() => ({ sw: document.documentElement.scrollWidth, h: document.documentElement.scrollHeight, tel: [...document.querySelectorAll('a[href^="tel:"]')].length, wa: document.querySelectorAll('a[href*="wa.me"],a[href*="whatsapp"]').length, h1: [...document.querySelectorAll('h1,h2')].map(e => e.textContent.trim()).join(' | '), title: document.title, desc: document.querySelector('meta[name=description]')?.content, imgs: document.images.length, noAlt: [...document.images].filter(i => !i.alt).length, gen: document.querySelector('meta[name=generator]')?.content, og: !!document.querySelector('meta[property="og:image"]') }))));
  await p.context().close();
}
await b.close();
