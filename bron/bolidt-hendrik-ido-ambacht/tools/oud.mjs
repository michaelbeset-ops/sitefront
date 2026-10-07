// Bewijs huidige site: screenshots + metingen. Cookiemelding: alles afwijzen / alleen noodzakelijk.
import { chromium } from 'playwright'; import fs from 'node:fs';
const b = await chromium.launch(); const uit = {};
const weiger = async (p) => { for (const n of [/weiger/i, /alleen (noodzakelijk|functioneel)/i, /reject/i, /decline/i, /deny/i]) { const k = p.getByRole('button', { name: n }); if (await k.count()) { await k.first().click().catch(() => {}); await p.waitForTimeout(800); return 'geweigerd: ' + n; } } return 'geen knop'; };
for (const [w, h, n] of [[1440, 900, '1440'], [390, 844, '390']]) {
  const ctx = await b.newContext({ viewport: { width: w, height: h }, isMobile: w < 500, hasTouch: w < 500, locale: 'nl-NL' }); const p = await ctx.newPage();
  await p.goto('https://www.bolidt.com/nl/home', { waitUntil: 'load', timeout: 90000 }); await p.waitForTimeout(5000);
  await p.screenshot({ path: `bron/web/oud-home-${n}-cookie.png` });
  const c = await weiger(p);
  await p.waitForTimeout(1500);
  await p.screenshot({ path: `bron/web/oud-home-${n}.png` });
  await p.screenshot({ path: `bron/web/oud-home-${n}-full.png`, fullPage: true });
  uit[n] = { cookie: c, ...(await p.evaluate(() => ({ title: document.title, sw: document.documentElement.scrollWidth, h: document.documentElement.scrollHeight, tel: document.querySelectorAll('a[href^="tel:"]').length, mail: document.querySelectorAll('a[href^="mailto:"]').length, links: document.querySelectorAll('a[href]').length, h1: [...document.querySelectorAll('h1')].map(e => e.textContent.trim().replace(/\s+/g,' ')), select: [...document.querySelectorAll('select')].map(s => s.options.length), forms: document.forms.length, imgs: document.images.length, lang: document.documentElement.lang }))) };
  await ctx.close();
}
// netwerkgewicht home mobiel
const ctx = await b.newContext({ viewport: { width: 390, height: 844 }, isMobile: true }); const p = await ctx.newPage(); let bytes = 0, req = 0;
p.on('response', async (r) => { req++; try { const l = r.headers()['content-length']; if (l) bytes += +l; else bytes += (await r.body()).length; } catch {} });
await p.goto('https://www.bolidt.com/nl/home', { waitUntil: 'load', timeout: 90000 }); await p.waitForTimeout(8000);
uit.gewicht = { requests: req, MB: (bytes / 1e6).toFixed(1) };
// virtuele tour
await p.goto('https://forms.bolidt.nl/conference-call/', { waitUntil: 'load', timeout: 90000 }); await p.waitForTimeout(1500); await weiger(p);
await p.screenshot({ path: 'bron/web/oud-virtuele-tour-390.png', fullPage: true });
uit.tour = await p.evaluate(() => ({ title: document.title, tekst: document.body.innerText.replace(/\s+/g, ' ').slice(0, 900) }));
// productpagina leeg
await p.goto('https://www.bolidt.com/nl/bolicoat-coatingsystemen', { waitUntil: 'load', timeout: 90000 }); await p.waitForTimeout(1500); await weiger(p);
await p.screenshot({ path: 'bron/web/oud-bolicoat-390.png' });
fs.writeFileSync('bron/web/metingen.json', JSON.stringify(uit, null, 2)); console.log(JSON.stringify(uit, null, 1));
await b.close();
