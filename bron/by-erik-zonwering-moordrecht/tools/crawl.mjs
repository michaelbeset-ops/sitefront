import { chromium } from 'playwright'; import fs from 'node:fs';
const pages = ['', 'Over-BY-ERIK', 'Producten', 'Team', 'Algemene-voorwaarden', 'Contact', 'Knikarmschermen', 'Rolluiken', 'Screens', 'Overkapping', 'Pergola', 'Horren', 'Uitvalschermen', 'Acties-en-Posts', 'Webshop', 'Boerenlint'];
fs.mkdirSync('bron/web/pag', { recursive: true });
const b = await chromium.launch(); const c = await b.newContext({ viewport: { width: 1440, height: 900 } });
const imgs = new Set();
for (const s of pages) { const p = await c.newPage();
  await p.goto('https://www.by-erik.nl/' + s, { waitUntil: 'networkidle', timeout: 40000 }).catch(() => {}); await p.waitForTimeout(1200);
  const t = await p.evaluate(() => document.body.innerText);
  const im = await p.evaluate(() => [...document.querySelectorAll('img')].map(i => i.currentSrc || i.src).concat([...document.querySelectorAll('*')].map(e => getComputedStyle(e).backgroundImage).filter(x => x.includes('url(')).map(x => x.match(/url\("?([^")]+)/)[1])));
  im.forEach(u => imgs.add(s + '\t' + u));
  fs.writeFileSync(`bron/web/pag/${s || 'home'}.txt`, t);
  console.log(s || 'home', t.length, im.length); await p.close(); }
fs.writeFileSync('bron/web/pag/_imgs.txt', [...imgs].join('\n'));
await b.close();
