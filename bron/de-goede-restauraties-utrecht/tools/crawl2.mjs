import { chromium } from 'playwright'; import fs from 'node:fs';
const OUT = 'C:/Users/Micha/Downloads/Sitefront/demos/de-goede-restauraties-utrecht/bron/web/';
const b = await chromium.launch();
const p = await (await b.newContext({ locale: 'nl-NL', viewport: { width: 1400, height: 1000 } })).newPage();
let out = '';
for (const u of ['https://www.degoederestauraties.nl/diensten','https://www.degoederestauraties.nl/stoel','https://www.degoederestauraties.nl/objecten']) {
  await p.goto(u, { waitUntil: 'load', timeout: 60000 }); await p.waitForTimeout(3000);
  await p.evaluate(async () => { for (let y = 0; y < document.body.scrollHeight; y += 400) { scrollTo(0, y); await new Promise(r => setTimeout(r, 200)); } });
  await p.waitForTimeout(2000);
  const d = await p.evaluate(() => ({ t: document.body.innerText, title: document.title,
    gal: [...document.querySelectorAll('[data-hook*="title"],[data-hook*="description"],[class*="info-element-title"],[class*="info-element-description"]')].map(e => e.getAttribute('data-hook')+': '+e.textContent.trim()),
    aria: [...document.querySelectorAll('[aria-label]')].map(e=>e.getAttribute('aria-label')).filter(x=>x.length>3),
    imgs: [...document.querySelectorAll('img')].map(i => (i.currentSrc||i.src).split('/v1/')[0] + ' | ' + (i.alt||'')) }));
  out += `\n\n######## ${u} ${d.title}\n${d.t}\nGAL:\n${d.gal.join('\n')}\nARIA:\n${[...new Set(d.aria)].join('\n')}\nIMGS:\n${d.imgs.join('\n')}`;
}
fs.writeFileSync(OUT + 'crawl2.txt', out); await b.close();
