import { chromium } from 'playwright'; import fs from 'node:fs';
const b = await chromium.launch({ channel: 'chrome', args: ['--headless=new','--disable-blink-features=AutomationControlled'] });
const ctx = await b.newContext({ locale: 'nl-NL', viewport: { width: 1300, height: 1400 }, userAgent:'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/141.0.0.0 Safari/537.36' }); const p = await ctx.newPage();
const q = process.argv[2];
await p.goto(q, { waitUntil: 'domcontentloaded', timeout: 40000 }).catch(()=>{});
await p.waitForTimeout(5000);
for (const t of ['Optionele cookies afwijzen','Alleen essentiële cookies toestaan','Optionele cookies weigeren','Alles afwijzen']) { const r=p.locator(`[role=button]:has-text("${t}"), button:has-text("${t}")`).first(); if (await r.count()) { await r.click().catch(()=>{}); await p.waitForTimeout(2000);} }
const cl = p.locator('[aria-label="Sluiten"], [aria-label="Close"]').first(); if (await cl.count()) await cl.click().catch(()=>{});
for (let i=0;i<6;i++){ await p.mouse.wheel(0,1500); await p.waitForTimeout(1500); const c = p.locator('[aria-label="Sluiten"]').first(); if (await c.count()) await c.click().catch(()=>{}); }
const out = process.argv[3];
fs.writeFileSync(out + '.txt', p.url() + '\n' + await p.evaluate(()=>document.body.innerText));
fs.writeFileSync(out + '-imgs.txt', (await p.evaluate(()=>[...document.querySelectorAll('img')].filter(i=>i.naturalWidth>150).map(i=>i.naturalWidth+'x'+i.naturalHeight+' '+i.src+' | '+(i.alt||'')))).join('\n'));
fs.writeFileSync(out + '-links.txt', (await p.evaluate(()=>[...document.querySelectorAll('a[href]')].map(a=>a.href))).join('\n'));
await p.evaluate(()=>scrollTo(0,0)); await p.screenshot({ path: out + '.png' });
await b.close();
