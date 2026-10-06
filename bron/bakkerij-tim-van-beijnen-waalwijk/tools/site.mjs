import { chromium } from 'playwright'; import fs from 'node:fs';
const b = await chromium.launch();
const seen = new Set(); const todo = ['https://www.vantim.nl/']; const out = [];
const ctx = await b.newContext({ viewport: { width: 1440, height: 900 }, locale: 'nl-NL' });
const p = await ctx.newPage();
while (todo.length && seen.size < 40) {
  const u = todo.shift(); if (seen.has(u)) continue; seen.add(u);
  try { await p.goto(u, { waitUntil: 'networkidle', timeout: 30000 }); } catch (e) { out.push('ERR ' + u); continue; }
  const name = (new URL(u).pathname.replace(/\W+/g, '-').replace(/^-|-$/g, '') || 'home');
  const txt = await p.evaluate(() => document.body.innerText);
  const imgs = await p.evaluate(() => [...document.images].map(i => i.src + ' ' + i.naturalWidth + 'x' + i.naturalHeight + ' alt=' + i.alt));
  const H = await p.evaluate(() => document.documentElement.scrollHeight);
  out.push(`######## ${u} (H1440=${H}) title=${await p.title()}\n${txt}\nIMGS:\n${imgs.join('\n')}`);
  await p.screenshot({ path: `bron/site/${name}-1440.png`, fullPage: true });
  const links = await p.evaluate(() => [...document.querySelectorAll('a[href]')].map(a => a.href));
  for (const l of links) { const x = l.split('#')[0]; if (/^https:\/\/www\.vantim\.nl\//.test(x) && !/SignOn|Checkout|javascript|\.(jpg|png|pdf)$/i.test(x) && !seen.has(x)) todo.push(x); }
}
fs.writeFileSync('bron/site/site.txt', out.join('\n\n'));
// mobiel
const m = await (await b.newContext({ viewport: { width: 390, height: 844 }, isMobile: true, hasTouch: true, deviceScaleFactor: 1 })).newPage();
await m.goto('https://www.vantim.nl/', { waitUntil: 'networkidle' });
console.log('mobile scrollWidth', await m.evaluate(() => [document.documentElement.scrollWidth, document.documentElement.scrollHeight, innerWidth]));
await m.screenshot({ path: 'bron/site/home-390.png' }); await m.screenshot({ path: 'bron/site/home-390-full.png', fullPage: true });
console.log([...seen].join('\n')); await b.close();
