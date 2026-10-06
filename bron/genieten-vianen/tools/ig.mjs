import { chromium } from 'playwright'; import fs from 'node:fs';
const b = await chromium.launch({ args: ['--disable-blink-features=AutomationControlled'] });
const ctx = await b.newContext({ locale: 'nl-NL', viewport: { width: 1280, height: 1600 }, userAgent: 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/140.0.0.0 Safari/537.36' });
const p = await ctx.newPage();
await p.goto('https://www.instagram.com/nelliesprivatedining/', { waitUntil: 'domcontentloaded' }); await p.waitForTimeout(6000);
const x = p.locator('button:has-text("Optionele cookies afwijzen")').first(); if (await x.count()) { await x.click().catch(()=>{}); await p.waitForTimeout(3000); }
const seen = new Map();
const grab = async () => (await p.evaluate(() => [...document.querySelectorAll('img')].map(i => [i.src, i.alt || '', i.naturalWidth]))).forEach(([s, a, w]) => { if (/cdninstagram|fbcdn/.test(s) && !seen.has(s)) seen.set(s, [a, w]); });
await grab();
for (let i = 0; i < 16; i++) { await p.mouse.wheel(0, 1400); await p.waitForTimeout(1800); const c = p.locator('[aria-label="Sluiten"], [aria-label="Close"]').first(); if (await c.count()) await c.click().catch(()=>{}); await grab(); }
await p.evaluate(() => scrollTo(0,0)); await p.waitForTimeout(800);
await p.screenshot({ path: 'bron/ig.png' });
const bio = await p.evaluate(() => document.querySelector('header')?.innerText || '');
let n = 0; const out = [];
for (const [s, [a, w]] of seen) { const r = await fetch(s); if (!r.ok) continue; const buf = Buffer.from(await r.arrayBuffer()); n++; const f = `ig-${String(n).padStart(2,'0')}.jpg`; fs.writeFileSync('bron/ig/' + f, buf); out.push(`${f} | w${w} | ${a.replace(/\s+/g,' ').slice(0,300)} | ${s.split('?')[0]}`); }
fs.writeFileSync('bron/ig/ig.txt', 'BIO:\n' + bio + '\n\n' + out.join('\n'));
console.log(n); await b.close();
