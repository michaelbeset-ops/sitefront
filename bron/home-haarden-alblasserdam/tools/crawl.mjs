import { chromium } from 'playwright'; import fs from 'node:fs';
const b = await chromium.launch();
const ctx = await b.newContext({ locale: 'nl-NL', viewport: { width: 1440, height: 900 }, userAgent: 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/140.0.0.0 Safari/537.36' });
const p = await ctx.newPage();
const todo = ['https://home-haarden.nl/'], done = new Set(), imgs = new Map(); let out = '';
while (todo.length && done.size < 40) {
  const u = todo.shift(); if (done.has(u)) continue; done.add(u);
  let r; try { r = await p.goto(u, { waitUntil: 'networkidle', timeout: 45000 }); } catch (e) { out += `\n\n##### ${u} FOUT ${e.message}\n`; continue; }
  await p.waitForTimeout(1200);
  await p.evaluate(async () => { for (let y = 0; y < document.body.scrollHeight; y += 600) { scrollTo(0, y); await new Promise(r => setTimeout(r, 120)); } });
  const d = await p.evaluate(() => ({
    title: document.title, final: location.href,
    text: document.body.innerText,
    links: [...document.querySelectorAll('a[href]')].map(a => [a.href, (a.innerText || a.getAttribute('aria-label') || '').trim().slice(0, 60)]),
    imgs: [...document.querySelectorAll('img')].map(i => [i.currentSrc || i.src, i.naturalWidth, i.naturalHeight, i.alt]),
    bg: [...document.querySelectorAll('*')].map(e => getComputedStyle(e).backgroundImage).filter(x => x.includes('url(')).map(x => x.match(/url\("?(.*?)"?\)/)[1]),
  }));
  const slug = (new URL(d.final).pathname.replace(/\W+/g, '-').replace(/^-|-$/g, '') || 'home');
  await p.screenshot({ path: `bron/site/${slug}.png`, fullPage: true }).catch(() => {});
  out += `\n\n##### ${u} -> ${d.final} [${r?.status()}] ${d.title}\n${d.text}\n--- LINKS\n${d.links.map(l => l.join(' | ')).join('\n')}\n--- IMGS\n${d.imgs.map(i => i.join(' | ')).join('\n')}\n${d.bg.join('\n')}`;
  for (const [s, w, h, a] of d.imgs) if (s && !imgs.has(s)) imgs.set(s, [w, h, a, slug]);
  for (const s of d.bg) if (!imgs.has(s)) imgs.set(s, [0, 0, 'bg', slug]);
  for (const [h] of d.links) { try { const x = new URL(h); if (x.hostname.replace('www.', '') === 'home-haarden.nl' && !/\.(jpe?g|png|pdf|webp)$/i.test(x.pathname)) { x.hash = ''; if (!done.has(x.href) && !todo.includes(x.href)) todo.push(x.href); } } catch {} }
}
fs.writeFileSync('bron/site/tekst.txt', out);
fs.writeFileSync('bron/site/imgs.txt', [...imgs].map(([s, v]) => [s, ...v].join(' | ')).join('\n'));
console.log([...done].join('\n')); await b.close();
