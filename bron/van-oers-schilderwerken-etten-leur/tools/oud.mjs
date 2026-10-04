// Controle huidige site: mobiel, https, formulier. Screenshots in bron/.
import { chromium } from 'playwright';
const b = await chromium.launch();
for (const [w, h, naam] of [[390, 844, 'm'], [1280, 800, 'd']]) {
  const ctx = await b.newContext({ viewport: { width: w, height: h }, isMobile: w < 500, hasTouch: w < 500, deviceScaleFactor: 1 });
  const p = await ctx.newPage();
  await p.goto('http://www.vanoers-schilderwerken.nl/', { waitUntil: 'networkidle' });
  const info = await p.evaluate(() => ({ vw: innerWidth, sw: document.documentElement.scrollWidth, meta: !!document.querySelector('meta[name=viewport]'), fs: getComputedStyle(document.querySelector('#content-main p')).fontSize, tel: !!document.querySelector('a[href^="tel:"]'), h: document.documentElement.scrollHeight }));
  console.log(naam, JSON.stringify(info));
  await p.screenshot({ path: `bron/oud-${naam}.png` });
  await ctx.close();
}
const ctx = await b.newContext({ viewport: { width: 1280, height: 800 } }); const p = await ctx.newPage();
const blocked = []; p.on('console', (m) => blocked.push(m.text().slice(0, 140)));
await p.goto('https://www.vanoers-schilderwerken.nl/', { waitUntil: 'networkidle' });
console.log('https url', p.url(), 'css applied?', await p.evaluate(() => getComputedStyle(document.body).backgroundImage + ' / ' + getComputedStyle(document.querySelector('#nav')).width));
console.log(blocked.slice(0, 4).join('\n'));
await p.screenshot({ path: 'bron/oud-https.png' });
await p.goto('http://www.vanoers-schilderwerken.nl/contact/', { waitUntil: 'networkidle' });
console.log('form', await p.evaluate(() => [...document.querySelectorAll('form input, form textarea')].map((i) => i.name || i.type).join(',')));
await p.screenshot({ path: 'bron/oud-contact.png', fullPage: true });
await b.close();
