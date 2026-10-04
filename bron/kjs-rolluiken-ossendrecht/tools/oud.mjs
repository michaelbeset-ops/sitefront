import { chromium, devices } from 'playwright';
const b = await chromium.launch();
for (const [naam, opt] of [['390', { ...devices['iPhone 13'] }], ['1280', { viewport: { width: 1280, height: 800 } }]]) {
  const p = await (await b.newContext(opt)).newPage();
  const errs = []; p.on('console', (m) => m.type() === 'error' && errs.push(m.text().slice(0, 120)));
  const r = await p.goto('https://www.kjsrolluiken.nl/', { waitUntil: 'networkidle', timeout: 60000 });
  await p.waitForTimeout(2000);
  const info = await p.evaluate(() => ({ sw: document.documentElement.scrollWidth, iw: innerWidth, h: document.documentElement.scrollHeight,
    vp: [...document.querySelectorAll('meta[name=viewport]')].map((m) => m.content),
    imgs: [...document.images].filter((i) => i.naturalWidth && i.getBoundingClientRect().width > i.naturalWidth * 1.3).map((i) => i.src.split('/').pop() + ' ' + i.naturalWidth + '->' + Math.round(i.getBoundingClientRect().width)),
    tel: [...document.querySelectorAll('a[href^="tel:"]')].length, wa: [...document.querySelectorAll('a[href*="wa.me"],a[href*="whatsapp"]')].length,
    fs: getComputedStyle(document.querySelector('p')).fontSize }));
  console.log(naam, r.status(), JSON.stringify(info), errs.slice(0, 5).join(' | '));
  await p.screenshot({ path: `bron/oud-${naam}.png` });
  await p.screenshot({ path: `bron/oud-${naam}-full.png`, fullPage: true });
}
await b.close();
