import { chromium } from 'playwright'; import fs from 'node:fs';
const b = await chromium.launch({ args: ['--disable-blink-features=AutomationControlled'] });
const ctx = await b.newContext({ locale: 'nl-NL', userAgent: 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/140.0.0.0 Safari/537.36', viewport: { width: 1300, height: 1000 } });
const p = await ctx.newPage(); fs.mkdirSync('bron/ig/groot', { recursive: true });
for (const id of process.argv.slice(2)) {
  await p.goto(`https://www.instagram.com/p/${id}/`, { waitUntil: 'domcontentloaded' }); await p.waitForTimeout(4500);
  const r = await p.evaluate(() => ({ og: document.querySelector('meta[property="og:image"]')?.content, desc: document.querySelector('meta[property="og:description"]')?.content, title: document.title, imgs: [...document.images].filter(i => i.naturalWidth > 500).map(i => i.currentSrc + ' ' + i.naturalWidth + 'x' + i.naturalHeight), vid: document.querySelector('video')?.poster }));
  console.log(id, JSON.stringify({ desc: r.desc, title: r.title, imgs: r.imgs.length && r.imgs[0].split(' ').slice(1) }));
  const src = r.imgs[0]?.split(' ')[0] || r.og; if (src) { const x = await fetch(src); fs.writeFileSync(`bron/ig/groot/${id}.jpg`, Buffer.from(await x.arrayBuffer())); }
  fs.appendFileSync('bron/ig/captions.txt', id + ' | ' + r.desc + '\n');
}
await b.close();
