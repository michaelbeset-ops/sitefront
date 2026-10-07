import { chromium } from 'playwright';
const b = await chromium.launch();
for (const [w, h, n] of [[1440, 900, 'oud-home-1440'], [390, 844, 'oud-home-390']]) {
  const p = await (await b.newContext({ viewport: { width: w, height: h }, isMobile: w < 500, hasTouch: w < 500 })).newPage();
  await p.goto('https://delaatkachels.nl/', { waitUntil: 'networkidle' });
  await p.screenshot({ path: `bron/web/${n}.png` });
  console.log(n, await p.evaluate(() => ({ sw: document.documentElement.scrollWidth, vp: document.querySelector('meta[name=viewport]')?.content || 'GEEN viewport', tel: document.querySelectorAll('a[href^="tel:"]').length, wa: document.querySelectorAll('a[href*="wa.me"],a[href*="whatsapp"]').length, h: document.documentElement.scrollHeight, title: document.title })));
}
await b.close();
