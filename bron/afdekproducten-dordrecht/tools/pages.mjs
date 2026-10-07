// Haalt tekst van hun eigen pagina's op (bron/web/<slug>.txt)
import { chromium } from 'playwright'; import fs from 'node:fs';
const pages = process.argv.slice(2);
const b = await chromium.launch();
const p = await (await b.newContext({ locale: 'nl-NL', viewport: { width: 1400, height: 1000 } })).newPage();
for (const u of pages) {
  const r = await p.goto('https://www.afdekproducten.nl/' + u, { waitUntil: 'domcontentloaded', timeout: 60000 }).catch(e => null);
  await p.waitForTimeout(1500);
  const t = await p.evaluate(() => (document.querySelector('main, #main, .site-content, #content') || document.body).innerText);
  const imgs = await p.evaluate(() => [...document.querySelectorAll('img')].map(i => (i.currentSrc || i.src) + ' ' + i.naturalWidth + 'x' + i.naturalHeight + ' alt=' + i.alt).filter(s => s.includes('uploads')));
  const slug = (u.replace(/\/$/, '') || 'home').replace(/\//g, '_');
  fs.writeFileSync(`bron/web/${slug}.txt`, t + '\n\n--IMGS--\n' + imgs.join('\n'));
  console.log(r && r.status(), u, t.length);
}
await b.close();
