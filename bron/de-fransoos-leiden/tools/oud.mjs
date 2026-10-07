import { chromium } from 'playwright';
const b = await chromium.launch();
for (const [w, pad] of [[390, ''], [1440, ''], [1440, 'over/'], [390, 'over/'], [1440, 'winkel/']]) {
  const p = await (await b.newContext({ viewport: { width: w, height: 844 }, isMobile: w < 500, hasTouch: w < 500 })).newPage();
  await p.goto('https://defransoos.nl/' + pad, { waitUntil: 'networkidle' }).catch(() => {});
  await p.waitForTimeout(1500);
  const r = await p.evaluate(() => ({ sw: document.documentElement.scrollWidth, h: document.documentElement.scrollHeight, tel: [...document.querySelectorAll('a[href^="tel"]')].map(a => a.href), h1: document.querySelector('h1')?.innerText }));
  console.log(w, pad, JSON.stringify(r));
  const n = pad ? pad.replace('/', '') : 'home';
  await p.screenshot({ path: `bron/web/oud-${n}-${w}.png` });
  await p.screenshot({ path: `bron/web/oud-${n}-${w}-full.png`, fullPage: true });
}
await b.close();
