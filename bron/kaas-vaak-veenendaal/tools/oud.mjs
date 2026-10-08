import { chromium } from 'playwright';
const b = await chromium.launch();
const sites = [['http://www.kaas-vaak.nl/', 'kaas-vaak-nl'], ['http://www.kaasvaak.com/', 'kaasvaak-com'], ['http://www.eapbouman.eu/', 'eapbouman-eu']];
for (const [u, n] of sites) for (const [w, h, m] of [[390, 844, 'm'], [1440, 900, 'd']]) {
  const c = await b.newContext({ viewport: { width: w, height: h }, isMobile: w < 500, hasTouch: w < 500 }); const p = await c.newPage();
  const chain = []; p.on('response', (r) => { if (r.request().isNavigationRequest()) chain.push(r.status() + ' ' + r.url().slice(0, 90)); });
  await p.goto(u, { waitUntil: 'load', timeout: 45000 }).catch((e) => chain.push('ERR ' + e.message.slice(0, 80)));
  await p.waitForTimeout(2500);
  const r = await p.evaluate(() => ({ sw: document.documentElement.scrollWidth, H: document.documentElement.scrollHeight, title: document.title, tels: document.querySelectorAll('a[href^=tel]').length, wa: document.querySelectorAll('a[href*="wa.me"],a[href*="whatsapp"]').length, lorem: /lorem|perspiciatis|Klik hier en begin/i.test(document.body.innerText) }));
  console.log(n, m, JSON.stringify(r)); if (m === 'm') console.log('  ' + chain.join('\n  '));
  await p.screenshot({ path: `bron/web/${n}-${m}.png` }); await p.screenshot({ path: `bron/web/${n}-${m}-full.png`, fullPage: true }); await c.close();
}
await b.close();
