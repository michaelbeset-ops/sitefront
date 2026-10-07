// Bewijs huidige online reis: screenshots + metingen van corporate site, werken-bij-site en vacaturesysteem (CATS).
import { chromium } from 'playwright'; import fs from 'node:fs';
const doelen = [
  ['corp-home', 'https://kooimanmarinegroup.nl/index.html'],
  ['corp-contact', 'https://kooimanmarinegroup.nl/contact-2.html'],
  ['corp-carriere', 'https://kooimanmarinegroup.nl/carriere-23.html'],
  ['wb-home', 'https://werkenbijkooiman.nl/'],
  ['wb-vacatures', 'https://werkenbijkooiman.nl/vacatures/'],
  ['cats-portal', 'https://kooimanmarinegroup.catsone.nl/careers/5459'],
  ['cats-apply', 'https://kooimanmarinegroup.catsone.nl/careers/5459/jobs/1066018-Veiligheidskundige-Scheepswerf/apply'],
];
const b = await chromium.launch(); const uit = [];
for (const [n, u] of doelen) for (const [w, h] of [[1440, 900], [390, 844]]) {
  const ctx = await b.newContext({ viewport: { width: w, height: h }, isMobile: w < 500, hasTouch: w < 500, deviceScaleFactor: 1 });
  const p = await ctx.newPage(); let bytes = 0; const hosts = new Set();
  p.on('response', async (r) => { try { hosts.add(new URL(r.url()).host); const l = +(r.headers()['content-length'] || 0); bytes += l; } catch {} });
  const t0 = Date.now();
  try { await p.goto(u, { waitUntil: 'load', timeout: 60000 }); } catch (e) { console.log('timeout', n); }
  const tijd = Date.now() - t0;
  // cookiemelding: afwijzen
  for (const t of ['Afwijzen', 'Weigeren', 'Alles weigeren', 'Reject']) { const k = p.getByRole('button', { name: t, exact: true }); if (await k.count()) { await k.first().click().catch(() => {}); await p.waitForTimeout(600); break; } }
  await p.waitForTimeout(2500);
  await p.screenshot({ path: `bron/web/${n}-${w}.png`, timeout: 90000, animations: 'disabled' }).catch((e) => console.log('shotfout', n, w));
  if (w === 1440) await p.screenshot({ path: `bron/web/${n}-${w}-full.png`, fullPage: true }).catch(() => {});
  const m = await p.evaluate(() => ({ title: document.title, sw: document.documentElement.scrollWidth, H: document.documentElement.scrollHeight,
    vp: document.querySelector('meta[name=viewport]')?.content || 'GEEN', tel: [...document.querySelectorAll('a[href^="tel:"]')].map((a) => a.getAttribute('href')),
    mail: [...new Set([...document.querySelectorAll('a[href^="mailto:"]')].map((a) => a.getAttribute('href')))], h1: [...document.querySelectorAll('h1')].map((x) => x.innerText.trim()).slice(0, 3),
    lang: document.documentElement.lang, desc: document.querySelector('meta[name=description]')?.content || 'GEEN',
    imgsZonderAlt: [...document.querySelectorAll('img')].filter((i) => !i.alt).length, imgs: document.querySelectorAll('img').length,
    kleineTekst: [...document.querySelectorAll('p,li,a,span')].filter((e) => e.offsetParent && parseFloat(getComputedStyle(e).fontSize) < 12 && e.innerText.trim()).length }));
  uit.push({ n, w, u, tijdMs: tijd, kB: Math.round(bytes / 1024), hosts: [...hosts].length, ...m });
  await ctx.close();
}
await b.close();
fs.writeFileSync('bron/web/metingen.json', JSON.stringify(uit, null, 1));
for (const r of uit) console.log(r.n, r.w, 'sw', r.sw, 'H', r.H, r.tijdMs + 'ms', r.kB + 'kB', 'hosts', r.hosts, 'vp', r.vp, 'tel', r.tel.length, 'h1', JSON.stringify(r.h1), 'alt-', r.imgsZonderAlt + '/' + r.imgs, 'klein', r.kleineTekst, r.lang, '|', r.title, '|', r.desc.slice(0, 80));
