import { chromium } from 'playwright';
const b = await chromium.launch();
const sites = [['https://www.ritmeester-bv.nl/', 'oud-ritmeester-bv'], ['https://ritmeesteralblasserdam.nl/', 'oud-ritmeesteralblasserdam'], ['https://ritmeesteralblasserdam.nl/categorie/64.html', 'oud-ra-algemeen'], ['https://ritmeesteralblasserdam.nl/categorie/1005.html', 'oud-ra-cnc-zwijndrecht']];
for (const [u, n] of sites) for (const [w, h] of [[1440, 900], [390, 844]]) {
  const p = await (await b.newContext({ viewport: { width: w, height: h }, isMobile: w < 500, hasTouch: w < 500, userAgent: w<500 ? 'Mozilla/5.0 (Linux; Android 14) AppleWebKit/537.36 Chrome/130 Mobile Safari/537.36' : undefined })).newPage();
  try { await p.goto(u, { waitUntil: 'load', timeout: 45000 }); } catch (e) { console.log('ERR', u, e.message); }
  await p.waitForTimeout(1500);
  await p.screenshot({ path: `bron/web/${n}-${w}.png` });
  if (w === 1440) await p.screenshot({ path: `bron/web/${n}-${w}-full.png`, fullPage: true });
  console.log(n, w, JSON.stringify(await p.evaluate(() => ({ title: document.title, sw: document.documentElement.scrollWidth, h: document.documentElement.scrollHeight, vp: document.querySelector('meta[name=viewport]')?.content || 'GEEN viewport', links: document.querySelectorAll('a').length, cat: document.querySelectorAll('a[href*="/categorie/"]').length, tel: document.querySelectorAll('a[href^="tel:"]').length, frames: document.querySelectorAll('frame,iframe').length, fs: getComputedStyle(document.body).fontSize, frameSrc: [...document.querySelectorAll('frame,iframe')].map(f=>f.src).join(' ') }))));
  await p.context().close();
}
await b.close();
