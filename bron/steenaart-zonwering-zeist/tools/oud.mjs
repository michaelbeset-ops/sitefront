import { chromium } from 'playwright'; import fs from 'node:fs';
const b = await chromium.launch();
const out = {};
for (const [w, h] of [[1440, 900], [390, 844]]) {
  const p = await (await b.newContext({ viewport: { width: w, height: h }, locale: 'nl-NL' })).newPage();
  await p.goto('https://www.steenaartzonwering.nl/', { waitUntil: 'networkidle', timeout: 40000 });
  await p.waitForTimeout(1500);
  await p.screenshot({ path: `bron/web/oud-view-${w}.png` });
  await p.screenshot({ path: `bron/web/oud-full-${w}.png`, fullPage: true });
  out[w] = await p.evaluate(() => ({
    scrollWidth: document.documentElement.scrollWidth, height: document.documentElement.scrollHeight,
    h1: document.querySelectorAll('h1').length, links: [...document.querySelectorAll('a[href]')].filter(a=>!/foto\//.test(a.getAttribute('href'))).map(a=>a.getAttribute('href')),
    bodyFont: getComputedStyle(document.querySelector('#contenttekst p')).fontSize,
    sliderH: document.querySelector('#slider img')?.getBoundingClientRect().height,
    galleryTiles: document.querySelectorAll('.gallerij li').length,
    tileSize: (()=>{const r=document.querySelector('.gallerij li a').getBoundingClientRect();return [Math.round(r.width),Math.round(r.height)]})(),
    menuBtn: !!document.querySelector('#mobile-menu-button'),
    https: location.protocol,
  }));
  await p.context().close();
}
fs.writeFileSync('bron/web/meting.json', JSON.stringify(out, null, 1)); console.log(JSON.stringify(out));
await b.close();
