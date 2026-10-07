// Bewijs oude site: desktop + 390 screenshots en maten
import { chromium } from 'playwright';
const b = await chromium.launch();
for (const [w, h, n] of [[1440, 900, 'desktop'], [390, 844, '390']]) {
  const c = await b.newContext({ viewport: { width: w, height: h }, isMobile: w < 500, hasTouch: w < 500, deviceScaleFactor: w < 500 ? 2 : 1 });
  const p = await c.newPage();
  for (const pg of ['', 'prijs.html', 'contact.html']) {
    await p.goto('http://recreatieboerderijhollywoud.nl/' + pg, { waitUntil: 'load' }); await p.waitForTimeout(1500);
    const m = await p.evaluate(() => ({ sw: document.documentElement.scrollWidth, H: document.documentElement.scrollHeight, vp: !!document.querySelector('meta[name=viewport]'), fs: getComputedStyle(document.querySelector('#mainContent p')).fontSize, https: location.protocol }));
    console.log(n, pg || 'home', JSON.stringify(m));
    await p.screenshot({ path: `bron/web/oud-${n}-${(pg || 'home').replace('.html', '')}.png` });
  }
  await c.close();
}
const p = await b.newPage(); const r = await p.goto('https://recreatieboerderijhollywoud.nl/').catch((e) => e.message.slice(0, 120)); console.log('https:', typeof r === 'string' ? r : r.status());
await b.close();
