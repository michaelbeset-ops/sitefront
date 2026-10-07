// Screenshots zonder cookiemelding (alleen "Akkoord", geen weigeren): niet klikken, laag verbergen. Plus: trackers vóór keuze.
import { chromium } from 'playwright'; import fs from 'node:fs';
const b = await chromium.launch(); const log = {};
const verberg = (p) => p.evaluate(() => {
  let n = 0;
  document.querySelectorAll('body *').forEach((e) => { const cs = getComputedStyle(e); if ((cs.position === 'fixed' || cs.position === 'absolute') && /Welkom bij Bolidt/.test(e.innerText || '') && !e.querySelector('nav')) { e.style.display = 'none'; n++; } });
  document.querySelectorAll('.modal-backdrop').forEach((e) => e.remove()); document.body.classList.remove('modal-open'); document.documentElement.style.overflow = 'auto'; document.body.style.overflow = 'auto'; scrollTo(0, 0);
  return n;
});
for (const [w, h, n] of [[1440, 900, '1440'], [390, 844, '390']]) {
  const ctx = await b.newContext({ viewport: { width: w, height: h }, isMobile: w < 500, hasTouch: w < 500, locale: 'nl-NL' }); const p = await ctx.newPage();
  const tr = new Set(); p.on('request', (r) => { const u = r.url(); if (/facebook|googletagmanager|google-analytics|doubleclick|hotjar|linkedin|leadinfo/.test(u)) tr.add(new URL(u).host + new URL(u).pathname.slice(0, 30)); });
  await p.goto('https://www.bolidt.com/nl/home', { waitUntil: 'domcontentloaded', timeout: 60000 }); await p.waitForTimeout(9000);
  log[n] = { trackersVoorKeuze: [...tr], verborgen: await verberg(p) }; await p.waitForTimeout(800);
  await p.screenshot({ path: `bron/web/oud-home-${n}.png` });
  await p.screenshot({ path: `bron/web/oud-home-${n}-full.png`, fullPage: true });
  if (w < 500) { await p.locator('#slide-in-menu-opener').first().click({ force: true, timeout: 5000 }).catch((e) => console.log('menu', e.message.slice(0, 80))); await p.waitForTimeout(1500); await p.screenshot({ path: `bron/web/oud-menu-390.png` }); }
  else { await p.getByRole('link', { name: 'SEGMENTEN' }).first().hover({ timeout: 5000 }).catch(() => {}); await p.waitForTimeout(1200); await p.screenshot({ path: `bron/web/oud-menu-1440.png` }); }
  await ctx.close();
}
fs.writeFileSync('bron/web/metingen2.json', JSON.stringify(log, null, 2)); console.log(JSON.stringify(log, null, 1));
await b.close();
