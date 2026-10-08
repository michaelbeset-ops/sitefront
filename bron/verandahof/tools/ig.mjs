import { chromium } from 'playwright'; import fs from 'node:fs';
const b = await chromium.launch({ channel: 'chrome', args: ['--headless=new','--disable-blink-features=AutomationControlled'] });
const ctx = await b.newContext({ locale: 'nl-NL', viewport: { width: 1280, height: 1000 }, userAgent: 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/141.0.0.0 Safari/537.36' });
const p = await ctx.newPage();
const imgs = new Map();
p.on('response', async r => { const u = r.url(); if (/cdninstagram|fbcdn/.test(u) && /\.(jpg|webp|heic)/.test(u)) { try { const buf = await r.body(); const id = u.split('?')[0].split('/').pop(); if (!imgs.has(id) || imgs.get(id).length < buf.length) imgs.set(id, buf); } catch {} } });
await p.goto('https://www.instagram.com/veranda.hof/', { waitUntil: 'load', timeout: 45000 });
await p.waitForTimeout(4000);
await p.getByRole('button', { name: /Optionele cookies afwijzen/ }).first().click({ timeout: 4000 }).catch(()=>console.log('no consent'));
await p.waitForTimeout(3000);
for (const s of ['[aria-label="Sluiten"]','svg[aria-label="Sluiten"]']) await p.locator(s).first().click({ timeout: 1500 }).catch(()=>{});
for (let i=0;i<6;i++){ await p.mouse.wheel(0,1200); await p.waitForTimeout(1500); for (const s of ['[aria-label="Sluiten"]']) await p.locator(s).first().click({ timeout: 800 }).catch(()=>{}); }
await p.evaluate(()=>scrollTo(0,0)); await p.waitForTimeout(1000);
await p.screenshot({ path: 'bron/soc/ig-full.png', fullPage: true });
const posts = await p.evaluate(() => [...document.querySelectorAll('a[href*="/p/"], a[href*="/reel/"]')].map(a => ({ href: a.href, alt: a.querySelector('img')?.alt || '', src: a.querySelector('img')?.src || '' })));
fs.writeFileSync('bron/soc/ig-posts.json', JSON.stringify(posts, null, 1));
fs.writeFileSync('bron/soc/ig-full.txt', await p.evaluate(() => document.body.innerText));
console.log('posts', posts.length);
let n=0; for (const [id, buf] of imgs) { if (buf.length < 20000) continue; n++; fs.writeFileSync(`bron/soc/ig-${String(n).padStart(2,'0')}.jpg`, buf); fs.appendFileSync('bron/soc/ig-ids.txt', `ig-${String(n).padStart(2,'0')}.jpg ${id}\n`); }
console.log('saved', n);
await b.close();
