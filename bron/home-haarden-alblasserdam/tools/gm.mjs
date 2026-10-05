import { chromium } from 'playwright'; import fs from 'node:fs';
const b = await chromium.launch({ args: ['--disable-blink-features=AutomationControlled'] });
const ctx = await b.newContext({ locale: 'nl-NL', viewport: { width: 1400, height: 1000 }, userAgent: 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/140.0.0.0 Safari/537.36' });
const p = await ctx.newPage();
await p.goto('https://www.google.com/maps/search/' + encodeURIComponent(process.argv[2] || 'Home-haarden Alblasserdam'), { waitUntil: 'domcontentloaded' });
await p.waitForTimeout(3000);
for (const t of ['Alles afwijzen', 'Reject all']) { const x = p.locator(`button:has-text("${t}")`).first(); if (await x.count()) { await x.click().catch(() => {}); break; } }
await p.waitForTimeout(6000);
const a = p.locator('a.hfpxzc').first(); if (await a.count()) { await a.click(); await p.waitForTimeout(5000); }
const t = await p.evaluate(() => document.querySelector('[role=main]')?.innerText || document.body.innerText);
const extra = await p.evaluate(() => [...document.querySelectorAll('[data-item-id], [aria-label]')].map(e => (e.getAttribute('data-item-id') || '') + ' :: ' + (e.getAttribute('aria-label') || '')).filter(s => /phone|address|authority|oloc|Openingstijden|uur|ster|review/i.test(s)).slice(0, 40).join('\n'));
fs.writeFileSync('bron/google.txt', p.url() + '\n\n' + t + '\n\n' + extra);
await p.screenshot({ path: 'bron/google.png' });
console.log(p.url()); console.log(t.slice(0, 2500)); console.log(extra);
await b.close();
