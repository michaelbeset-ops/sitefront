import { chromium } from 'playwright'; import fs from 'node:fs';
const b = await chromium.launch();
const p = await (await b.newContext({ locale: 'nl-NL', viewport: { width: 1400, height: 1000 } })).newPage();
const seen = new Set(), todo = ['http://www.stefig.nl/'], imgs = new Set(); let out = '';
while (todo.length && seen.size < 40) {
  const u = todo.shift().split('#')[0]; if (seen.has(u)) continue; seen.add(u);
  try {
    const r = await p.goto(u, { waitUntil: 'networkidle', timeout: 40000 }); await p.waitForTimeout(800);
    const d = await p.evaluate(() => ({ t: document.body.innerText, title: document.title, links: [...document.querySelectorAll('a[href]')].map(a => a.href + ' | ' + a.innerText.trim().replace(/\s+/g,' ')), imgs: [...document.querySelectorAll('img')].map(i => (i.getAttribute('data-src')||i.currentSrc||i.src) + ' | ' + i.naturalWidth + 'x' + i.naturalHeight + ' | ' + (i.alt||'')), bg: [...document.querySelectorAll('*')].map(e=>getComputedStyle(e).backgroundImage).filter(x=>x.includes('url(')) }));
    out += `\n\n######## ${u} [${r.status()}] ${d.title}\n${d.t}\nLINKS:\n${d.links.join('\n')}\nIMGS:\n${d.imgs.join('\n')}\nBG:\n${d.bg.join('\n')}`;
    d.imgs.forEach(i => imgs.add(i)); d.bg.forEach(i => imgs.add(i));
    for (const l of d.links) { const h = l.split(' | ')[0]; if (/stefig\.nl/.test(h) && !/\.(jpg|png|pdf)$/i.test(h) && !h.includes('/j/') && !h.includes('login')) todo.push(h.split('#')[0]); }
    console.log('ok', u);
  } catch (e) { console.log('fout', u, e.message); }
}
fs.writeFileSync('bron/web/crawl.txt', out); fs.writeFileSync('bron/web/imgs.txt', [...imgs].join('\n'));
await b.close();
