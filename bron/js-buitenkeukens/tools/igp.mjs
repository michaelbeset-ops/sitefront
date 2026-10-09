import { chromium } from 'playwright'; import fs from 'node:fs';
const b = await chromium.launch({ channel: 'chrome', args: ['--headless=new','--disable-blink-features=AutomationControlled'] });
const c = await b.newContext({ locale: 'nl-NL', viewport: { width: 1280, height: 1000 }, userAgent: 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/141.0.0.0 Safari/537.36' });
const L = JSON.parse(fs.readFileSync('bron/ig/posts.json'));
const out = [];
for (const [i, x] of L.entries()) {
  const p = await c.newPage();
  try {
    await p.goto(x.h, { waitUntil: 'domcontentloaded', timeout: 30000 }); await p.waitForTimeout(3500);
    const m = await p.evaluate(() => ({ d: document.querySelector('meta[property="og:description"]')?.content, img: document.querySelector('meta[property="og:image"]')?.content, t: document.querySelector('meta[property="og:title"]')?.content, h1: document.querySelector('h1')?.innerText }));
    out.push({ i, h: x.h, alt: x.alt, ...m });
    if (m.img) { const r = await p.request.get(m.img); fs.writeFileSync(`bron/ig/groot/ig${String(i).padStart(2,'0')}.jpg`, await r.body()); }
    // grootste img in pagina
    const big = await p.evaluate(() => [...document.querySelectorAll('img')].map(im => ({ s: im.currentSrc, w: im.naturalWidth })).sort((a,b)=>b.w-a.w)[0]);
    if (big && big.w > 700) { const r = await p.request.get(big.s); fs.writeFileSync(`bron/ig/groot/ig${String(i).padStart(2,'0')}-max.jpg`, await r.body()); out[out.length-1].big = big.w; }
  } catch (e) { out.push({ i, h: x.h, err: e.message }); }
  await p.close();
}
fs.writeFileSync('bron/ig/captions.json', JSON.stringify(out, null, 1));
for (const o of out) console.log(o.i, o.big||'', '|', o.t, '|', o.h1, '|', o.d);
await b.close();
