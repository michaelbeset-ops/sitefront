import { chromium } from 'playwright';
const b = await chromium.launch();
for (const [w, h, n] of [[1440, 900, 'oud-home-1440'], [390, 844, 'oud-home-390']]) {
  const p = await (await b.newContext({ viewport: { width: w, height: h }, isMobile: w < 500, hasTouch: w < 500 })).newPage();
  await p.goto('https://stassenzonwering.nl/', { waitUntil: 'networkidle', timeout: 60000 }).catch(()=>{});
  await p.waitForTimeout(2000);
  await p.screenshot({ path: `bron/web/${n}.png` });
  await p.screenshot({ path: `bron/web/${n}-full.png`, fullPage: true });
  console.log(n, await p.evaluate(() => ({ sw: document.documentElement.scrollWidth, h: document.documentElement.scrollHeight, forms: document.querySelectorAll('form').length, tel: [...document.querySelectorAll('a[href^="tel:"]')].map(a=>a.href), wa: document.querySelectorAll('a[href*="wa.me"],a[href*="whatsapp"]').length, h1: [...document.querySelectorAll('h1')].map(h=>h.textContent.trim()) })));
}
for (const [pad, n] of [['acties/', 'oud-acties-1440'], ['terrasoverkappingen/', 'oud-terrasoverkappingen-1440'], ['service/', 'oud-service-1440']]) {
  const p = await (await b.newContext({ viewport: { width: 1440, height: 900 } })).newPage();
  await p.goto('https://stassenzonwering.nl/' + pad, { waitUntil: 'networkidle', timeout: 60000 }).catch(()=>{}); await p.waitForTimeout(1500);
  await p.screenshot({ path: `bron/web/${n}.png` });
}
await b.close();
