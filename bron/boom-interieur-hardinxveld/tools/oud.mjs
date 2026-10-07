// Bewijs huidige site: screenshots 1440 en 390 + metingen, naar bron/web/.
import { chromium } from 'playwright';
const b = await chromium.launch();
const B = 'https://www.boominterieurbv.nl';
const sites = [[B + '/', 'oud-home'], [B + '/pg-26392-7-58400/pagina/contact.html', 'oud-contact'], [B + '/pg-26392-7-58398/pagina/fotos.html', 'oud-fotoarchief'], [B + '/nw-26392-1/nieuws', 'oud-nieuws']];
for (const [u, n] of sites) for (const [w, h] of [[1440, 900], [390, 844]]) {
  const p = await (await b.newContext({ viewport: { width: w, height: h }, isMobile: w < 500, hasTouch: w < 500, userAgent: w < 500 ? 'Mozilla/5.0 (Linux; Android 14) AppleWebKit/537.36 Chrome/130 Mobile Safari/537.36' : undefined })).newPage();
  try { await p.goto(u, { waitUntil: 'load', timeout: 45000 }); } catch (e) { console.log('ERR', u, e.message); }
  await p.waitForTimeout(2000);
  await p.screenshot({ path: `bron/web/${n}-${w}.png` });
  await p.screenshot({ path: `bron/web/${n}-${w}-full.png`, fullPage: true });
  console.log(n, w, p.url(), JSON.stringify(await p.evaluate(() => {
    const logo = [...document.images].map((i) => ({ src: i.src.split('/').pop(), w: i.getBoundingClientRect().width, h: i.getBoundingClientRect().height })).filter((i) => i.w > 0).slice(0, 6);
    const afgekapt = [...document.querySelectorAll('body *')].filter((e) => e.children.length === 0 && e.scrollWidth > e.clientWidth + 2 && getComputedStyle(e).overflow !== 'visible').map((e) => e.textContent.trim().slice(0, 50)).filter(Boolean).slice(0, 10);
    return { title: document.title, sw: document.documentElement.scrollWidth, h: document.documentElement.scrollHeight, vp: document.querySelector('meta[name=viewport]')?.content || 'GEEN viewport', tel: [...document.querySelectorAll('a[href^="tel:"]')].map((a) => a.href), h1: [...document.querySelectorAll('h1')].map((x) => x.textContent.trim()), fs: getComputedStyle(document.body).fontSize, logo, afgekapt };
  })));
  await p.context().close();
}
await b.close();
