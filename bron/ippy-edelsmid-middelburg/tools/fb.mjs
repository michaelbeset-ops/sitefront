import { chromium } from 'playwright'; import fs from 'node:fs';
const b = await chromium.launch({ args: ['--disable-blink-features=AutomationControlled'] });
const ctx = await b.newContext({ locale: 'nl-NL', viewport: { width: 1280, height: 1000 }, userAgent: 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/141.0.0.0 Safari/537.36' });
const p = await ctx.newPage();
fs.mkdirSync('bron/fb', { recursive: true });
const url = process.argv[2] || 'https://www.facebook.com/ippyedelsmid';
await p.goto(url, { waitUntil: 'domcontentloaded' }); await p.waitForTimeout(6000);
for (const lab of ['Optionele cookies weigeren', 'Alleen essentiële cookies toestaan', 'Decline optional cookies']) { const x = p.locator(`[aria-label="${lab}"], div[role=button]:has-text("${lab}")`).first(); if (await x.count()) { await x.click().catch(()=>{}); await p.waitForTimeout(2500); break; } }
const c = p.locator('[aria-label="Sluiten"], [aria-label="Close"]').first(); if (await c.count()) await c.click().catch(()=>{});
console.log('url', p.url());
const seen = new Map();
const grab = async () => (await p.evaluate(() => [...document.querySelectorAll('img')].map(i => [i.src, i.alt || '', i.naturalWidth]))).forEach(([s, a, w]) => { if (/fbcdn/.test(s) && w > 150 && !seen.has(s)) seen.set(s, [a, w]); });
await grab();
let txt = '';
for (let i = 0; i < 8; i++) { await p.mouse.wheel(0, 1300); await p.waitForTimeout(1800); const c = p.locator('[aria-label="Sluiten"], [aria-label="Close"]').first(); if (await c.count()) await c.click().catch(()=>{}); await grab(); }
txt = await p.evaluate(() => document.body.innerText);
await p.evaluate(() => scrollTo(0,0)); await p.waitForTimeout(800);
await p.screenshot({ path: 'bron/fb/fb.png' });
const tag = process.argv[3] || 'fb';
let n = 0; const out = [];
for (const [s, [a, w]] of seen) { const r = await fetch(s); if (!r.ok) continue; const buf = Buffer.from(await r.arrayBuffer()); n++; const f = `${tag}-${String(n).padStart(2,'0')}.jpg`; fs.writeFileSync('bron/fb/' + f, buf); out.push(`${f} | w${w} | ${a.replace(/\s+/g,' ').slice(0,300)} | ${s.split('?')[0]}`); }
fs.writeFileSync(`bron/fb/${tag}.txt`, 'TEXT:\n' + txt + '\n\nIMGS:\n' + out.join('\n'));
console.log(n); await b.close();
