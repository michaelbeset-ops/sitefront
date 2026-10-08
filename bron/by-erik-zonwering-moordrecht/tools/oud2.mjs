import { chromium } from 'playwright';
const b = await chromium.launch();
for (const s of ['Webshop', 'Contact', 'Acties-en-Posts']) for (const [w, h, t] of [[390, 844, 'm'], [1440, 900, 'd']]) {
  const c = await b.newContext({ viewport: { width: w, height: h }, isMobile: w < 500 }); const p = await c.newPage();
  await p.goto('https://www.by-erik.nl/' + s, { waitUntil: 'networkidle' }); await p.waitForTimeout(1500);
  await p.screenshot({ path: `bron/web/${s.toLowerCase()}-${w}-full.png`, fullPage: true });
  console.log(s, w, await p.evaluate(() => [document.documentElement.scrollWidth, document.documentElement.scrollHeight])); await c.close(); }
await b.close();
