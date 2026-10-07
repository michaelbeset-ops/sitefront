import { chromium } from 'playwright';
const b = await chromium.launch();
for (const s of ['', 'contact/', 'particulier/rolluikken/', 'zakelijk/']) for (const [w, h] of [[1440, 900], [390, 844]]) {
  const p = await (await b.newContext({ viewport: { width: w, height: h }, isMobile: w < 500, hasTouch: w < 500, locale: 'nl-NL' })).newPage();
  await p.goto('https://www.menkrolluiken.nl/' + s, { waitUntil: 'networkidle', timeout: 60000 }).catch(e => console.log('timeout', s));
  await p.waitForTimeout(1000);
  const n = (s.replace(/\//g, '-').replace(/-$/, '') || 'home');
  await p.screenshot({ path: `bron/web/oud-${n}-${w}.png` });
  if (s === '') await p.screenshot({ path: `bron/web/oud-${n}-${w}-full.png`, fullPage: true });
  console.log(n, w, JSON.stringify(await p.evaluate(() => ({ sw: document.documentElement.scrollWidth, iw: innerWidth, vp: document.querySelector('meta[name=viewport]')?.content || 'GEEN viewport', tel: document.querySelectorAll('a[href^="tel:"]').length, mail: document.querySelectorAll('a[href^="mailto:"]').length, fs: getComputedStyle(document.querySelector('p')||document.body).fontSize, title: document.title, copy: (document.body.innerText.match(/©[^\n]*/)||[''])[0], h1: [...document.querySelectorAll('h1,h2')].map(e=>e.innerText).slice(0,6) }))));
  await p.context().close();
}
await b.close();
