import { chromium } from 'playwright'; import fs from 'node:fs';
const b = await chromium.launch();
const seen = new Set(); const out = [];
const queue = ['http://www.transportbedrijfinrotterdam.nl/', 'http://www.armtransport.nl/'];
const ctx = await b.newContext({ locale: 'nl-NL', viewport: { width: 1440, height: 900 } });
while (queue.length && seen.size < 40) {
  const u = queue.shift(); const key = u.replace(/[#?].*$/, '').replace(/\/$/, ''); if (seen.has(key)) continue; seen.add(key);
  const p = await ctx.newPage();
  try {
    const r = await p.goto(u, { waitUntil: 'load', timeout: 40000 }); await p.waitForTimeout(1500);
    const d = await p.evaluate(() => ({ url: location.href, title: document.title, t: document.body.innerText, links: [...document.querySelectorAll('a[href]')].map(a => a.href + ' | ' + a.innerText.trim().replace(/\s+/g, ' ')), imgs: [...document.querySelectorAll('img')].map(i => (i.currentSrc || i.src) + ' ' + i.naturalWidth + 'x' + i.naturalHeight), bg: [...document.querySelectorAll('*')].map(e => getComputedStyle(e).backgroundImage).filter(x => x.includes('url(')), vp: document.querySelector('meta[name=viewport]')?.content, gen: document.querySelector('meta[name=generator]')?.content }));
    out.push(`\n########## ${u} -> ${d.url} [${r?.status()}] title=${d.title} vp=${d.vp} gen=${d.gen}\n${d.t}\nLINKS:\n${d.links.join('\n')}\nIMGS:\n${d.imgs.join('\n')}\nBG:\n${[...new Set(d.bg)].join('\n')}`);
    for (const l of d.links) { const h = l.split(' | ')[0]; try { const x = new URL(h); if (/armtransport\.nl|transportbedrijfinrotterdam\.nl/.test(x.host) && !/\.(jpg|png|pdf)$/i.test(x.pathname)) queue.push(x.href); } catch {} }
  } catch (e) { out.push(`\n########## ${u} FOUT ${e.message}`); }
  await p.close();
}
fs.writeFileSync('bron/web/crawl.txt', out.join('\n')); console.log([...seen].join('\n')); await b.close();
