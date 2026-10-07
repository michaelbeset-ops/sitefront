import { chromium } from 'playwright'; import fs from 'node:fs';
const html = fs.readFileSync('bron/web/home-20250225001055.u.html', 'utf8').replace('<head>', '<head><base href="https://www.ccrolluiken.nl/">');
const b = await chromium.launch();
for (const w of [390, 1440]) {
  const p = await (await b.newContext({ viewport: { width: w, height: 844 }, isMobile: w<500, hasTouch: w<500 })).newPage();
  await p.route('https://www.ccrolluiken.nl/**', r => r.abort());
  await p.setContent(html, { waitUntil: 'load', timeout: 60000 }).catch(e=>console.log(e.message));
  await p.waitForTimeout(4000);
  console.log(w, await p.evaluate(() => [document.documentElement.scrollWidth, document.documentElement.scrollHeight]));
  await p.screenshot({ path: `bron/web/oud-${w}.png` });
  await p.screenshot({ path: `bron/web/oud-full-${w}.png`, fullPage: true });
}
await b.close();
