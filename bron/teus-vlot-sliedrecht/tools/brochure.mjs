import { chromium } from 'playwright'; import fs from 'node:fs';
const b = await chromium.launch(); const p = await b.newPage({ viewport: { width: 1600, height: 1000 } });
const reqs = new Set(); p.on('response', r => { const u = r.url(); if (/\.(jpe?g|png|webp|svg|xml|js|json)(\?|$)/i.test(u) && r.status() === 200) reqs.add(u); });
await p.goto('https://teusvlot.com/files/brochure_nl/index.html', { waitUntil: 'networkidle', timeout: 60000 });
await p.waitForTimeout(4000); await p.screenshot({ path: 'bron/brochure/b0.png' });
for (let i = 1; i < 14; i++) { await p.keyboard.press('ArrowRight'); await p.waitForTimeout(1800); await p.screenshot({ path: `bron/brochure/b${i}.png` }); }
fs.writeFileSync('bron/brochure/_reqs.txt', [...reqs].join('\n')); console.log(reqs.size);
await b.close();
