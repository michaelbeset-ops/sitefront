import { chromium } from 'playwright'; import fs from 'node:fs';
const ids = process.argv.slice(2);
const b = await chromium.launch({ args: ['--disable-blink-features=AutomationControlled'] });
const ctx = await b.newContext({ locale: 'nl-NL', userAgent: 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/140.0.0.0 Safari/537.36', viewport: { width: 1400, height: 1000 } });
const p = await ctx.newPage(); fs.mkdirSync('bron/fb', { recursive: true });
const log = [];
for (const id of ids) {
  await p.goto(`https://www.facebook.com/photo.php?fbid=${id}&set=pb.100063771810042.-2207520000&type=3`, { waitUntil: 'domcontentloaded' });
  await p.waitForTimeout(3500);
  const r = await p.evaluate(() => { const im = [...document.images].filter(i => /scontent/.test(i.src) && i.naturalWidth > 300).sort((a, b) => b.naturalWidth - a.naturalWidth)[0]; const t = document.body.innerText; return { s: im?.src, w: im?.naturalWidth, h: im?.naturalHeight, d: (t.match(/\n([^\n]+), bericht bekijken/) || [])[1], txt: (t.split('— bij')[0].split('·\n').slice(2).join(' ')).slice(0, 1500) }; });
  if (r.s) { const res = await fetch(r.s); fs.writeFileSync(`bron/fb/${id}.jpg`, Buffer.from(await res.arrayBuffer())); }
  log.push(`${id} | ${r.d} | ${r.w}x${r.h} | ${(r.txt || '').replace(/\s+/g, ' ')}`);
  console.log(id, r.d, r.w);
}
fs.appendFileSync('bron/fb/fb.txt', log.join('\n') + '\n'); await b.close();
