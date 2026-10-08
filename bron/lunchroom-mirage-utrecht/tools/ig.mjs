import { chromium } from 'playwright'; import fs from 'node:fs';
const b = await chromium.launch({ args: ['--disable-blink-features=AutomationControlled'] });
const ctx = await b.newContext({ locale: 'nl-NL', userAgent: 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/140.0.0.0 Safari/537.36', viewport: { width: 1300, height: 1000 } });
const p = await ctx.newPage(); fs.mkdirSync('bron/ig', { recursive: true });
await p.goto('https://www.instagram.com/lunchroommirage/', { waitUntil: 'domcontentloaded' }); await p.waitForTimeout(5000);
const items = await p.evaluate(() => [...document.querySelectorAll('a[href*="/p/"], a[href*="/reel/"]')].map(a => { const i = a.querySelector('img'); return { id: a.href.split('/').filter(Boolean).pop(), alt: i?.alt, src: (i?.srcset?.split(',').pop().trim().split(' ')[0]) || i?.src }; }));
console.log(items.length);
for (const it of items) { if (!it.src) continue; const r = await fetch(it.src); fs.writeFileSync(`bron/ig/${it.id}.jpg`, Buffer.from(await r.arrayBuffer())); }
fs.writeFileSync('bron/ig/ig.txt', items.map(i => i.id + ' | ' + i.alt).join('\n'));
await b.close();
