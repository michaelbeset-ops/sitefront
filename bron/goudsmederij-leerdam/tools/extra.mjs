import { chromium } from 'playwright'; import fs from 'node:fs';
const b = await chromium.launch(); const p = await b.newPage({ viewport: { width: 1440, height: 900 } });
for (const [u, n] of [['https://goudsmederijleerdam.nl/goudsmederij-leerdam/', 'extra1'], ['https://www.goudsmederijleerdam.nl/sitemap.xml', 'sitemap'], ['https://www.goudsmederijleerdam.nl/wp-sitemap.xml', 'wpsitemap']]) {
  const r = await p.goto(u, { waitUntil: 'networkidle' }).catch(() => null); await p.waitForTimeout(1500);
  fs.writeFileSync(`bron/site/${n}.txt`, u + ' ' + (r && r.status()) + '\n\n' + await p.evaluate(() => document.body.innerText));
  await p.screenshot({ path: `bron/site/${n}.png`, fullPage: true });
  console.log(n, r && r.status(), (await p.evaluate(() => [...document.querySelectorAll('img')].map(i => i.currentSrc + ' ' + i.naturalWidth).join('\n'))));
}
await b.close();
