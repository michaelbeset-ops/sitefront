import { chromium } from 'playwright'; import fs from 'node:fs';
const b = await chromium.launch();
const p = await (await b.newContext({ locale: 'nl-NL', viewport: { width: 1000, height: 1400 }, userAgent: 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/140.0.0.0 Safari/537.36' })).newPage();
const ids = fs.readFileSync('bron/ighi/captions.txt', 'utf8').match(/\/p\/[A-Za-z0-9_-]+/g).map(x => x.slice(3));
fs.mkdirSync('bron/igfull', { recursive: true });
let n = 0;
for (const id of ids) {
  n++;
  await p.goto(`https://www.instagram.com/p/${id}/embed/`, { waitUntil: 'networkidle' }).catch(()=>{}); await p.waitForTimeout(1500);
  const srcs = await p.evaluate(() => [...document.querySelectorAll('img')].map(i => { let bw = 0, bu = i.src; (i.srcset||'').split(',').forEach(s => { const [u, w] = s.trim().split(' '); const W = parseInt(w); if (W > bw) { bw = W; bu = u; } }); return [bw, bu, i.className]; }).filter(x => /cdninstagram|fbcdn/.test(x[1]) && !/s150x150|profile/i.test(x[1])));
  const best = srcs.sort((a,b)=>b[0]-a[0])[0];
  if (!best) { console.log(n, id, 'geen'); continue; }
  const buf = Buffer.from(await (await fetch(best[1])).arrayBuffer());
  fs.writeFileSync(`bron/igfull/p${String(n).padStart(2,'0')}.jpg`, buf); console.log(n, id, best[0], buf.length);
}
await b.close();
