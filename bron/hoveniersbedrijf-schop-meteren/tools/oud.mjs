// Controle huidige site op een telefoon (390) en desktop.
import { chromium } from 'playwright';
const b = await chromium.launch();
for (const [w, h, m] of [[390, 844, true], [1440, 900, false]]) {
  const p = await (await b.newContext({ viewport: { width: w, height: h }, isMobile: m, hasTouch: m, deviceScaleFactor: m ? 3 : 1 })).newPage();
  await p.goto('http://www.hoveniersbedrijfschop.nl/', { waitUntil: 'networkidle' });
  const r = await p.evaluate(() => ({ vp: !!document.querySelector('meta[name=viewport]'), sw: document.documentElement.scrollWidth, iw: innerWidth, fs: getComputedStyle(document.body).fontSize, tel: !!document.querySelector('a[href^="tel:"]') }));
  console.log(w, JSON.stringify(r));
  await p.screenshot({ path: `shots/oud-${w}.png` });
}
await b.close();
