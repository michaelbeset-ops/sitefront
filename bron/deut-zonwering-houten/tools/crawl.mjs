import { chromium } from 'playwright'; import fs from 'node:fs';
const b = await chromium.launch();
const p = await (await b.newContext({ locale: 'nl-NL', viewport: { width: 1400, height: 1000 } })).newPage();
const start = 'https://www.deutzonwering.nl/';
const todo = [start], seen = new Set(), imgs = new Set(), out = [];
while (todo.length && seen.size < 40) {
  const u = todo.shift(); if (seen.has(u)) continue; seen.add(u);
  try {
    const r = await p.goto(u, { waitUntil: 'load', timeout: 40000 }); await p.waitForTimeout(1200);
    const d = await p.evaluate(() => ({ t: document.body.innerText, title: document.title, links: [...document.querySelectorAll('a[href]')].map(a => a.href.split('#')[0]), im: [...document.querySelectorAll('img')].map(i => (i.currentSrc || i.src) + ' ' + i.naturalWidth + 'x' + i.naturalHeight + ' alt=' + i.alt), bg: [...document.querySelectorAll('*')].map(e => getComputedStyle(e).backgroundImage).filter(x => x.includes('url')) }));
    out.push(`######## ${u} [${r.status()}] ${d.title}\n${d.t}`);
    d.im.concat(d.bg).forEach(x => imgs.add(u + ' :: ' + x));
    for (const l of d.links) if (l.startsWith('https://www.deutzonwering.nl') && !seen.has(l) && !todo.includes(l) && !/\.(jpg|png|pdf)$/i.test(l)) todo.push(l);
    console.log('ok', u);
  } catch (e) { console.log('fout', u, e.message.slice(0, 80)); }
}
fs.writeFileSync('bron/web/alle-paginas.txt', out.join('\n\n'));
fs.writeFileSync('bron/web/imgs.txt', [...imgs].join('\n'));
fs.writeFileSync('bron/web/links.txt', [...seen].join('\n'));
await b.close();
