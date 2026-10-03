import { chromium } from 'playwright';
const b = await chromium.launch();
for (const w of [1440, 390]) {
  const p = await (await b.newContext({ viewport: { width: w, height: 900 } })).newPage();
  await p.goto('http://localhost:4771/sitefront/timmerbedrijf-van-der-meij-pijnacker/');
  console.log(w, (await p.evaluate(() => [...document.querySelectorAll('main > section, footer, header')].map(s => (s.id || s.getAttribute('aria-label') || s.tagName).slice(0, 14) + ':' + Math.round(s.offsetHeight)))).join('  '));
}
await b.close();
