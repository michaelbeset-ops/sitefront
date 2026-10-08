import { chromium } from 'playwright'; import fs from 'node:fs';
const OUT = 'C:/Users/Micha/Downloads/Sitefront/demos/de-goede-restauraties-utrecht/bron/web/';
const b = await chromium.launch();
const p = await (await b.newContext({ locale: 'nl-NL', viewport: { width: 1400, height: 1000 } })).newPage();
const seen = new Set(), todo = ['https://www.degoederestauraties.nl/'], imgs = new Set(); let out = '';
while (todo.length && seen.size < 40) {
  const u = todo.shift().split('#')[0].replace(/\/$/, '') || ''; if (seen.has(u)) continue; seen.add(u);
  try {
    const r = await p.goto(u, { waitUntil: 'load', timeout: 60000 }); await p.waitForTimeout(3000);
    await p.evaluate(async () => { for (let y = 0; y < document.body.scrollHeight; y += 500) { scrollTo(0, y); await new Promise(r => setTimeout(r, 150)); } });
    await p.waitForTimeout(3000);
    const d = await p.evaluate(() => ({ t: document.body.innerText, title: document.title, links: [...document.querySelectorAll('a[href]')].map(a => a.href + ' | ' + a.innerText.trim().replace(/\s+/g,' ')), imgs: [...document.querySelectorAll('img')].map(i => (i.currentSrc||i.src) + ' | ' + i.naturalWidth + 'x' + i.naturalHeight + ' | ' + (i.alt||'')) }));
    out += `\n\n######## ${u} [${r.status()}] ${d.title}\n${d.t}\nLINKS:\n${d.links.join('\n')}\nIMGS:\n${d.imgs.join('\n')}`;
    d.imgs.forEach(i => imgs.add(i));
    for (const l of d.links) { const h = l.split(' | ')[0]; if (/degoederestauraties\.nl/.test(h) && !/\.(jpg|png|pdf)$/i.test(h)) todo.push(h.split('#')[0].split('?')[0]); }
    console.log('ok', u, r.status());
  } catch (e) { console.log('fout', u, e.message); }
}
fs.writeFileSync(OUT + 'crawl.txt', out); fs.writeFileSync(OUT + 'imgs.txt', [...imgs].join('\n'));
await b.close();
