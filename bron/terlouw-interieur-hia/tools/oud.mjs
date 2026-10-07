// Oude site via webarchief (16-06-2026), omdat terlouwinterieur.nl ons IP na de crawl tijdelijk blokkeerde.
import { chromium } from 'playwright';
const U = 'https://web.archive.org/web/20260616124453if_/https://www.terlouwinterieur.nl/';
const b = await chromium.launch();
for (const [w, h, n] of [[1440, 900, 'oud-home-1440'], [390, 844, 'oud-home-390']]) {
  const p = await (await b.newContext({ viewport: { width: w, height: h }, isMobile: w < 500, hasTouch: w < 500 })).newPage();
  await p.goto(U, { waitUntil: 'load', timeout: 90000 }); await p.waitForTimeout(4000);
  await p.screenshot({ path: `bron/web/${n}.png` });
  await p.screenshot({ path: `bron/web/${n}-full.png`, fullPage: true });
  console.log(n, await p.evaluate(() => ({ sw: document.documentElement.scrollWidth, h: document.documentElement.scrollHeight, tel: [...document.querySelectorAll('a[href^="tel:"]')].map(a => a.getAttribute('href')).join(','), wa: document.querySelectorAll('a[href*="wa.me"],a[href*="whatsapp"]').length, title: document.title, h1: [...document.querySelectorAll('h1')].map(x => x.textContent.trim()).join(' | ') })));
}
await b.close();
