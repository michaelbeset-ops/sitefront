import { chromium } from 'playwright';
const q = process.argv[2];
const b = await chromium.launch({ channel: 'chrome', args: ['--headless=new','--disable-blink-features=AutomationControlled'] }); const ctx = await b.newContext({ userAgent: 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/141.0.0.0 Safari/537.36', locale: 'nl-NL', viewport: { width: 1400, height: 1600 } }); const p = await ctx.newPage();
await p.goto('https://www.google.com/maps/search/' + encodeURIComponent(q) + '?hl=nl', { waitUntil: 'load', timeout: 45000 }).catch(() => {});
await p.waitForTimeout(2500);
const r = p.locator('button:has-text("Alles afwijzen")').first(); if (await r.count()) { await r.click(); await p.waitForTimeout(4000); }
const f = p.locator('a.hfpxzc').first(); if (await f.count()) { await f.click().catch(() => {}); }
await p.waitForTimeout(4000);
console.log((await p.evaluate(() => [...document.querySelectorAll('[role=main]')].pop()?.innerText || '')).replace(/\n\s*\n+/g,'\n').slice(0,2500));
const t = p.locator('button[role=tab]:has-text("Over")').first(); if (await t.count()) { await t.click(); await p.waitForTimeout(2500); console.log('=== OVER\n'+(await p.evaluate(() => [...document.querySelectorAll('[role=main]')].pop()?.innerText || '')).replace(/\n\s*\n+/g,'\n').slice(0,2000)); }
await b.close();
