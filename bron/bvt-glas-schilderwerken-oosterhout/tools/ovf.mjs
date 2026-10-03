import { chromium } from 'playwright';
const b = await chromium.launch();
for (const w of [1440, 320]) {
  const p = await b.newPage({ viewport: { width: w, height: 900 } });
  await p.goto('http://localhost:4789/sitefront/bvt-glas-schilderwerken-oosterhout/', { waitUntil: 'networkidle' });
  console.log(w, await p.evaluate((w) => [...document.querySelectorAll('body *')].filter(e => e.getBoundingClientRect().right > w + 1).slice(0, 8).map(e => e.tagName + '.' + String(e.className).slice(0, 60) + ' ' + Math.round(e.getBoundingClientRect().right)), w));
}
await b.close();
