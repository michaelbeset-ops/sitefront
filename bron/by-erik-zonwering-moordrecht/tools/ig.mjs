import { chromium } from 'playwright'; import fs from 'node:fs';
const b = await chromium.launch(); const c = await b.newContext({ locale: 'nl-NL', viewport: { width: 1280, height: 1000 } });
const p = await c.newPage(); await p.goto('https://www.instagram.com/byerikzonwering/', { waitUntil: 'domcontentloaded' }); await p.waitForTimeout(5000);
for (const t of ['Optionele cookies weigeren', 'Decline optional cookies', 'Alleen essentiële cookies toestaan']) { const k = p.locator(`button:has-text("${t}")`).first(); if (await k.count()) { await k.click().catch(() => {}); await p.waitForTimeout(3000); } }
const L = await p.evaluate(() => [...document.querySelectorAll('a[href*="/p/"]')].map(a => ({ h: a.href, alt: a.querySelector('img')?.alt, src: a.querySelector('img')?.currentSrc })));
console.log(L.length); fs.writeFileSync('bron/ig/posts.json', JSON.stringify(L, null, 1));
for (const [i, x] of L.entries()) { if (!x.src) continue; const r = await p.request.get(x.src); fs.writeFileSync(`bron/ig/foto/ig${String(i).padStart(2, '0')}-${x.h.split('/p/')[1].replace('/', '')}.jpg`, await r.body()); }
await b.close();
