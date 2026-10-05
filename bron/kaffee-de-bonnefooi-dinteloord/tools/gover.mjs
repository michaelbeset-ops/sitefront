import { chromium } from 'playwright'; import fs from 'node:fs';
const b = await chromium.launch({ channel: 'chrome', args: ['--headless=new','--disable-blink-features=AutomationControlled'] });
const p = await (await b.newContext({ locale: 'nl-NL', viewport: { width: 1400, height: 1400 }, userAgent: 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/141.0.0.0 Safari/537.36' })).newPage();
await p.goto('https://www.google.com/maps/search/Kaffee+de+Bonnefooi+Stoofdijk+26+Dinteloord?hl=nl', { waitUntil: 'load' }); await p.waitForTimeout(2500);
const r = p.locator('button:has-text("Alles afwijzen")').first(); if (await r.count()) { await r.click(); await p.waitForTimeout(4000); }
const f = p.locator('a.hfpxzc').first(); if (await f.count()) { await f.click().catch(() => {}); } await p.waitForTimeout(4000);
await p.screenshot({ path: 'bron/google/profiel.png' });
const t = p.getByRole('tab', { name: /^Over/ }).first(); console.log('tabs', await p.getByRole('tab').allInnerTexts()); await t.click({ timeout: 5000 }).catch(e => console.log('noclick')); await p.waitForTimeout(3000);
const txt = await p.evaluate(() => document.body.innerText);
await p.screenshot({ path: 'bron/google/over.png' });
fs.writeFileSync('bron/google/over.txt', txt); console.log(txt); await b.close();
