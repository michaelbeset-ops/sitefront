import { chromium } from 'playwright'; import fs from 'node:fs';
const b = await chromium.launch();
const out = [];
const seen = new Set(); const todo = ['http://www.restaurant-salsuta.nl/'];
const ctx = await b.newContext({ locale: 'nl-NL', viewport: { width: 1440, height: 900 } });
const p = await ctx.newPage();
const imgs = new Set();
while (todo.length && seen.size < 25) {
  const u = todo.shift(); if (seen.has(u)) continue; seen.add(u);
  try { const r = await p.goto(u, { waitUntil: 'networkidle', timeout: 45000 }); out.push('######## ' + u + ' -> ' + p.url() + ' status ' + r?.status()); } catch (e) { out.push('ERR ' + u + ' ' + e.message); continue; }
  await p.waitForTimeout(1500);
  for (let y = 0; y < 30000; y += 800) { await p.evaluate((y) => scrollTo(0, y), y); await p.waitForTimeout(60); }
  out.push('TITLE: ' + await p.title());
  out.push('META: ' + await p.evaluate(() => document.querySelector('meta[name=description]')?.content));
  out.push('LANG: ' + await p.evaluate(() => document.documentElement.lang) + ' H=' + await p.evaluate(() => document.documentElement.scrollHeight));
  out.push(await p.evaluate(() => document.body.innerText));
  const links = await p.evaluate(() => [...document.querySelectorAll('a[href]')].map(a => a.href + ' | ' + a.innerText.trim().slice(0, 40)));
  out.push('LINKS:', ...links);
  for (const l of links) { const h = l.split(' | ')[0].split('#')[0]; if (/restaurant-salsuta\.nl/.test(h) && !/\.(jpg|png|pdf)$/i.test(h)) todo.push(h); }
  (await p.evaluate(() => [...document.querySelectorAll('img')].map(i => i.currentSrc || i.src).concat([...document.querySelectorAll('*')].map(e => getComputedStyle(e).backgroundImage).filter(x => x.startsWith('url')).map(x => x.slice(5, -2))))).forEach(x => imgs.add(x));
  const nm = (new URL(p.url()).pathname.replace(/\W+/g, '_') || 'home');
  await p.screenshot({ path: `bron/site/${nm}-1440.png` });
}
fs.writeFileSync('bron/site/site.txt', out.join('\n'));
fs.writeFileSync('bron/site/imgs.txt', [...imgs].join('\n'));
// mobiel
const m = await (await b.newContext({ viewport: { width: 390, height: 844 }, isMobile: true, userAgent: 'Mozilla/5.0 (iPhone; CPU iPhone OS 17_0 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/17.0 Mobile/15E148 Safari/604.1' })).newPage();
await m.goto('http://www.restaurant-salsuta.nl/', { waitUntil: 'networkidle' }); await m.waitForTimeout(1500);
for (let y = 0; y < 40000; y += 800) { await m.evaluate((y) => scrollTo(0, y), y); await m.waitForTimeout(60); }
console.log('mobiel H', await m.evaluate(() => document.documentElement.scrollHeight), 'sw', await m.evaluate(() => document.documentElement.scrollWidth), 'url', m.url());
await m.evaluate(() => scrollTo(0, 0)); await m.waitForTimeout(500);
await m.screenshot({ path: 'bron/site/mobiel-view.png' });
console.log('pages', seen.size, 'imgs', imgs.size);
await b.close();
