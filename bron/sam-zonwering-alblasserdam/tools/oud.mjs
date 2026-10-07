import { chromium } from 'playwright';
const b = await chromium.launch();
for (const [w, h, n, u] of [[1440, 900, 'oud-home-1440', ''], [390, 844, 'oud-home-390', ''], [1440, 900, 'oud-projecten-1440', 'onze-projecten/'], [390, 844, 'oud-offerte-390', 'offerte-aanvragen/']]) {
  const p = await (await b.newContext({ viewport: { width: w, height: h }, isMobile: w < 500, hasTouch: w < 500 })).newPage();
  await p.goto('https://www.sam-zonwering.nl/' + u, { waitUntil: 'networkidle' }); await p.waitForTimeout(1500);
  await p.screenshot({ path: `bron/web/${n}.png` });
  console.log(n, JSON.stringify(await p.evaluate(() => ({ sw: document.documentElement.scrollWidth, vp: document.querySelector('meta[name=viewport]')?.content || 'GEEN', tel: [...document.querySelectorAll('a[href^="tel:"]')].map(a=>a.getAttribute('href')), wa: document.querySelectorAll('a[href*="wa.me"],a[href*="whatsapp"]').length, h: document.documentElement.scrollHeight, title: document.title, lees: [...document.querySelectorAll('a')].filter(a=>/Lees meer|Bekijk meer/.test(a.textContent)).map(a=>a.getAttribute('href')), forms: document.querySelectorAll('form').length }))));
}
await b.close();
