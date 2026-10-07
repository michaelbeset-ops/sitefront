import { chromium } from 'playwright'; import fs from 'node:fs';
const b = await chromium.launch();
const ctx = await b.newContext({ locale: 'nl-NL', viewport: { width: 1440, height: 900 } });
const p = await ctx.newPage();
const seen = new Set(); const todo = ['http://www.msitransport.nl/'];
while (todo.length && seen.size < 20) {
  const u = todo.shift(); if (seen.has(u)) continue; seen.add(u);
  try { const r = await p.goto(u, { waitUntil: 'load', timeout: 40000 }); await p.waitForTimeout(2500);
    const slug = (new URL(p.url()).pathname.replace(/\W+/g, '_') || 'home').replace(/^_|_$/g,'') || 'home';
    console.log(u, '->', p.url(), r?.status(), slug);
    fs.writeFileSync(`bron/web/${slug}.html`, await p.content());
    fs.writeFileSync(`bron/web/${slug}.txt`, await p.evaluate(() => document.body.innerText));
    const links = await p.evaluate(() => [...new Set([...document.querySelectorAll('a[href]')].map(a => a.href + ' | ' + a.innerText.trim().replace(/\s+/g,' ')))]);
    fs.writeFileSync(`bron/web/${slug}-links.txt`, links.join('\n'));
    const imgs = await p.evaluate(() => [...document.querySelectorAll('img')].map(i => (i.currentSrc || i.src) + ' ' + i.naturalWidth + 'x' + i.naturalHeight).concat([...document.querySelectorAll('*')].map(e=>getComputedStyle(e).backgroundImage).filter(x=>x&&x!=='none')));
    fs.writeFileSync(`bron/web/${slug}-imgs.txt`, [...new Set(imgs)].join('\n'));
    for (const l of links) { const h = l.split(' | ')[0].split('#')[0]; if (/msitransport\.nl/.test(h) && !seen.has(h) && !/\.(jpg|png|pdf)$/i.test(h)) todo.push(h); }
  } catch (e) { console.log('ERR', u, e.message); }
}
await b.close();
