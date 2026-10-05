import { chromium } from 'playwright'; import fs from 'node:fs';
const b = await chromium.launch();
const p = await (await b.newContext({ viewport: { width: 1440, height: 900 } })).newPage();
const res = {};
for (const pg of ['', 'menu', 'klassieke-cocktails', 'speciale-nachten', 'restaurant-salsuta-heet-u-van-harte-welkom-voor-het-vieren-van-uw-evenementen', 'fotos', 'fotos-1', 'videos', 'salsuta']) {
  await p.goto('https://www.restaurant-salsuta.nl/' + pg, { waitUntil: 'networkidle' });
  for (let y = 0; y < 50000; y += 700) { await p.evaluate((y) => scrollTo(0, y), y); await p.waitForTimeout(50); }
  await p.waitForTimeout(1000);
  res[pg || 'home'] = await p.evaluate(() => [...document.querySelectorAll('img')].map(i => { const r = i.getBoundingClientRect(); return { src: (i.currentSrc || i.src), w: i.naturalWidth, h: i.naturalHeight, y: Math.round(r.top + scrollY), alt: i.alt, link: i.closest('a')?.href || '' }; }).filter(x => x.w > 150));
  res[pg || 'home'].push(...await p.evaluate(() => [...document.querySelectorAll('video')].map(v => ({ video: v.currentSrc || v.querySelector('source')?.src, poster: v.poster, y: Math.round(v.getBoundingClientRect().top + scrollY) }))));
}
fs.writeFileSync('bron/site/imgs.json', JSON.stringify(res, null, 1));
for (const [k, v] of Object.entries(res)) console.log(k, v.length);
await b.close();
