import { chromium } from 'playwright'; import fs from 'node:fs';
const posts = JSON.parse(fs.readFileSync('bron/soc/ig-posts.json','utf8'));
const b = await chromium.launch({ channel: 'chrome', args: ['--headless=new','--disable-blink-features=AutomationControlled'] });
const ctx = await b.newContext({ locale: 'nl-NL', viewport: { width: 1280, height: 1000 }, userAgent: 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/141.0.0.0 Safari/537.36' });
const p = await ctx.newPage();
let first = true; const out = [];
fs.mkdirSync('bron/soc/post', { recursive: true });
for (const [i, post] of posts.entries()) {
  const big = new Map();
  const h = async r => { const u = r.url(); if (/cdninstagram|fbcdn/.test(u) && /\.(jpg|webp)/.test(u) && !/s150x150|s320|profile/.test(u)) { try { const buf = await r.body(); if (buf.length > 40000) big.set(u.split('?')[0].split('/').pop(), buf); } catch {} } };
  p.on('response', h);
  await p.goto(post.href, { waitUntil: 'load', timeout: 45000 }).catch(()=>{});
  await p.waitForTimeout(4000);
  if (first) { await p.getByRole('button', { name: /Optionele cookies afwijzen/ }).first().click({ timeout: 4000 }).catch(()=>{}); first = false; await p.waitForTimeout(2000); }
  await p.locator('[aria-label="Sluiten"]').first().click({ timeout: 1500 }).catch(()=>{});
  // carousel: click next
  for (let k=0;k<8;k++) { const nx = p.locator('button[aria-label="Volgende"]').first(); if (!(await nx.count())) break; await nx.click({ timeout: 1500 }).catch(()=>{}); await p.waitForTimeout(1200); }
  const meta = await p.evaluate(() => ({ d: document.querySelector('meta[property="og:description"]')?.content || '', t: document.querySelector('meta[property="og:title"]')?.content || '', time: document.querySelector('time')?.getAttribute('datetime') || '', h1: document.querySelector('h1')?.innerText || '' }));
  p.off('response', h);
  let k = 0; for (const [id, buf] of big) { k++; fs.writeFileSync(`bron/soc/post/p${String(i+1).padStart(2,'0')}-${k}.jpg`, buf); }
  out.push({ i: i+1, href: post.href, alt: post.alt, ...meta, n: k });
  console.log(i+1, post.alt, k, (meta.h1 || meta.d).slice(0, 200).replace(/\n/g,' '));
}
fs.writeFileSync('bron/soc/ig-captions.json', JSON.stringify(out, null, 1));
await b.close();
