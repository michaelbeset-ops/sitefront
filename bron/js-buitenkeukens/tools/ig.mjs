import { chromium } from 'playwright'; import fs from 'node:fs';
const b = await chromium.launch({ channel: 'chrome', args: ['--headless=new','--disable-blink-features=AutomationControlled'] });
const c = await b.newContext({ locale: 'nl-NL', viewport: { width: 1280, height: 1000 }, userAgent: 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/141.0.0.0 Safari/537.36' });
const p = await c.newPage(); await p.goto('https://www.instagram.com/jsbuitenkeukens/', { waitUntil: 'domcontentloaded' }); await p.waitForTimeout(6000);
for (const t of ['Optionele cookies weigeren', 'Decline optional cookies', 'Alleen essentiële cookies toestaan']) { const k = p.locator(`button:has-text("${t}")`).first(); if (await k.count()) { await k.click().catch(() => {}); await p.waitForTimeout(3000); } }
const x = p.locator('[aria-label="Sluiten"], [aria-label="Close"]').first(); if (await x.count()) { await x.click().catch(()=>{}); await p.waitForTimeout(1500); }
for (let i=0;i<4;i++){ await p.mouse.wheel(0, 1500); await p.waitForTimeout(1500); }
await p.screenshot({ path: 'bron/ig/profiel.png', fullPage: false });
fs.writeFileSync('bron/ig/profiel.txt', await p.evaluate(() => document.body.innerText));
const meta = await p.evaluate(() => [...document.querySelectorAll('meta')].map(m => (m.getAttribute('property')||m.getAttribute('name'))+': '+m.content).join('\n'));
fs.writeFileSync('bron/ig/meta.txt', meta);
const L = await p.evaluate(() => [...document.querySelectorAll('a[href*="/p/"], a[href*="/reel/"]')].map(a => ({ h: a.href, alt: a.querySelector('img')?.alt, src: a.querySelector('img')?.currentSrc })));
console.log(L.length); fs.writeFileSync('bron/ig/posts.json', JSON.stringify(L, null, 1));
for (const [i, x] of L.entries()) { if (!x.src) continue; const r = await p.request.get(x.src); fs.writeFileSync(`bron/ig/foto/ig${String(i).padStart(2, '0')}.jpg`, await r.body()); }
await b.close();
