import { chromium } from 'playwright'; import fs from 'node:fs';
const ids = process.argv.slice(2);
const b = await chromium.launch(); const ctx = await b.newContext({ locale: 'nl-NL', viewport: { width: 1600, height: 1000 } }); const p = await ctx.newPage();
fs.writeFileSync('bron/fb/meta.txt', '');
for (const id of ids) {
  await p.goto('https://www.facebook.com/photo.php?fbid=' + id, { waitUntil: 'domcontentloaded' }); await p.waitForTimeout(3500);
  const r = await p.evaluate(() => { const im = [...document.images].filter(i => i.src.includes('fbcdn')).sort((a, b) => b.naturalWidth * b.naturalHeight - a.naturalWidth * a.naturalHeight)[0]; return im ? { src: im.src, w: im.naturalWidth, h: im.naturalHeight, txt: document.body.innerText.slice(0, 1200) } : null; });
  if (!r) { console.log('none', id); continue; }
  fs.writeFileSync(`bron/fb/${id}.jpg`, Buffer.from(await (await ctx.request.get(r.src)).body()));
  fs.appendFileSync('bron/fb/meta.txt', `${id}.jpg ${r.w}x${r.h}\n${r.txt.replace(/\n+/g, ' | ').slice(0, 700)}\n\n`);
  console.log(id, r.w, r.h);
}
await b.close();
