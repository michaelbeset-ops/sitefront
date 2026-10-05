import { chromium } from 'playwright'; import fs from 'node:fs';
const b = await chromium.launch();
const ctx = await b.newContext({ locale: 'nl-NL', viewport: { width: 1280, height: 1600 }, userAgent: 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/140.0.0.0 Safari/537.36' });
const p = await ctx.newPage();
const seen = new Set(); const queue = ['https://tkapelletje.menukaart.net/']; const out = [];
while (queue.length && seen.size < 25) {
  const u = queue.shift(); if (seen.has(u)) continue; seen.add(u);
  try { await p.goto(u, { waitUntil: 'networkidle', timeout: 40000 }); await p.waitForTimeout(2000);
    const t = await p.evaluate(() => document.body.innerText);
    out.push('######## ' + u, t);
    const links = await p.evaluate(() => [...document.querySelectorAll('a')].map(a => a.href));
    for (const l of links) if (l.startsWith('https://tkapelletje.menukaart.net') && !seen.has(l.split('#')[0])) queue.push(l.split('#')[0]);
    await p.screenshot({ path: `bron/menu/p${seen.size}.png`, fullPage: true });
    const imgs = await p.evaluate(() => [...document.querySelectorAll('img')].map(i => i.src + ' ' + i.naturalWidth + 'x' + i.naturalHeight + ' ' + i.alt));
    out.push('IMGS:', ...imgs);
  } catch (e) { out.push('ERR ' + u + ' ' + e.message); }
}
fs.writeFileSync('bron/menu/menu.txt', out.join('\n')); console.log([...seen].join('\n')); await b.close();
