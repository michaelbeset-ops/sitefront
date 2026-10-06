import { chromium } from 'playwright'; import fs from 'node:fs';
const b = await chromium.launch();
const seen = new Set(); const todo = ['https://bakkerijvanbeijnen.nl/', ...['boulangerie','het-ambacht','historie','locaties','onze-historie','patisserie','so-nature','vacatures','van-tim','vanbeijnen','magazine','webshop'].map(x => 'https://bakkerijvanbeijnen.nl/' + x + '/')]; const out = []; const imgs = new Map();
const p = await (await b.newContext({ viewport: { width: 1440, height: 900 }, locale: 'nl-NL' })).newPage();
while (todo.length && seen.size < 40) {
  const u = todo.shift(); if (seen.has(u)) continue; seen.add(u);
  try { await p.goto(u, { waitUntil: 'domcontentloaded', timeout: 40000 }); await p.waitForTimeout(4000); } catch (e) { out.push('ERR ' + u + e.message.slice(0,80)); continue; }
  await p.evaluate(async () => { for (let y = 0; y < document.body.scrollHeight; y += 600) { scrollTo(0, y); await new Promise(r => setTimeout(r, 100)); } });
  const name = (new URL(u).pathname.replace(/\W+/g, '-').replace(/^-|-$/g, '') || 'home');
  const txt = await p.evaluate(() => document.body.innerText);
  const H = await p.evaluate(() => document.documentElement.scrollHeight);
  out.push(`######## ${u} (H=${H}) title=${await p.title()}\n${txt}`);
  await p.screenshot({ path: `bron/bvb/${name}-1440.png`, fullPage: true }).catch(()=>{});
  (await p.evaluate(() => [...document.images].map(i => [i.currentSrc || i.src, i.naturalWidth, i.naturalHeight, i.alt]).concat([...document.querySelectorAll('*')].map(e => getComputedStyle(e).backgroundImage).filter(x => x.startsWith('url(')).map(x => [x.slice(5, -2), 0, 0, 'bg'])))).forEach(([s, w, h, a]) => { if (!imgs.has(s)) imgs.set(s, `${w}x${h} ${a} @${name}`); });
  const links = await p.evaluate(() => [...document.querySelectorAll('a[href]')].map(a => a.href));
  for (const l of links) { const x = l.split('#')[0]; if (/^https:\/\/(www\.)?bakkerijvanbeijnen\.nl\//.test(x) && !/wp-(admin|login)|\.(jpg|png|pdf|jpeg|webp)$|cart|checkout|my-account|add-to-cart|\?/i.test(x) && !seen.has(x)) todo.push(x); }
}
fs.writeFileSync('bron/bvb/site.txt', out.join('\n\n')); fs.writeFileSync('bron/bvb/imgs.txt', [...imgs].map(([s, v]) => s + ' | ' + v).join('\n'));
console.log([...seen].join('\n')); await b.close();
