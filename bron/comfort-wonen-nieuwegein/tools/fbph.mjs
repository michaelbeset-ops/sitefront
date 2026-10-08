import { chromium } from 'playwright'; import fs from 'node:fs';
const b = await chromium.launch({ channel: 'chrome', args: ['--headless=new','--disable-blink-features=AutomationControlled'] });
const ctx = await b.newContext({ locale: 'nl-NL', viewport: { width: 1440, height: 1000 }, userAgent: 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/141.0.0.0 Safari/537.36' });
ctx.setDefaultTimeout(4000);
const p = await ctx.newPage();
const imgs = new Map();
p.on('response', async r => { const u = r.url(); if (/fbcdn\.net\/v\/t39\.30808-6/.test(u)) { const id = u.match(/\/(\d+_\d+_\d+_n)\./)?.[1]; if (!id) return; try { const buf = await r.body(); if (!imgs.has(id) || imgs.get(id).length < buf.length) imgs.set(id, buf); } catch {} } });
const dicht = async () => { for (const s of ['div[aria-label="Sluiten"][role=button]', '[aria-label="Sluiten"]']) { const c = p.locator(s).first(); if (await c.count().catch(()=>0)) await c.click({ timeout: 1500 }).catch(()=>{}); } };
await p.goto('https://www.facebook.com/comfortBVveranda/photos', { waitUntil: 'domcontentloaded', timeout: 40000 }).catch(e=>console.log('err', e.message));
await p.waitForTimeout(5000);
await p.getByRole('button', { name: /Optionele cookies weigeren|Alleen essenti/ }).first().click({ timeout: 3000 }).catch(()=>{});
await p.waitForTimeout(1500); await dicht();
for (let i=0;i<8;i++){ await p.mouse.wheel(0,1200); await p.waitForTimeout(1200); await dicht(); }
await p.screenshot({ path: 'bron/soc/fbph.png' });
fs.writeFileSync('bron/soc/fbph.txt', await p.evaluate(() => document.body.innerText));
const links = [...new Set(await p.evaluate(() => [...document.querySelectorAll('a[href*="/photo"]')].map(a => a.href)))];
console.log('links', links.length);
fs.writeFileSync('bron/soc/fbph-links.txt', links.join('\n'));
for (const l of links.slice(0, 40)) {
  await p.goto(l, { waitUntil: 'domcontentloaded', timeout: 30000 }).catch(()=>{});
  await p.waitForTimeout(3500); await dicht();
  const info = await p.evaluate(() => { const i = [...document.querySelectorAll('img')].sort((a,b)=>b.naturalWidth-a.naturalWidth)[0]; return { src: i?.src, w: i?.naturalWidth, txt: document.body.innerText.slice(0, 600).replace(/\n+/g,' | ') }; });
  fs.appendFileSync('bron/soc/fbph-info.txt', l + '\n' + JSON.stringify(info) + '\n\n');
  console.log(info.w, l.slice(0, 90));
}
let n = 0;
for (const [id, buf] of imgs) { if (buf.length < 30000) continue; n++; fs.writeFileSync(`bron/soc/fb-${String(n).padStart(2,'0')}.jpg`, buf); fs.appendFileSync('bron/soc/fb-ids.txt', `fb-${String(n).padStart(2,'0')}.jpg ${id}\n`); }
console.log('saved', n);
await b.close();
