// Haalt de evenementpagina's en de uitgeklapte tijdlijn van facebook.com/KaffeedeBonnefooi op (bron/fb/events.txt).
import { chromium } from 'playwright'; import fs from 'node:fs';
const b = await chromium.launch({ args: ['--disable-blink-features=AutomationControlled'] });
const ctx = await b.newContext({ locale: 'nl-NL', viewport: { width: 1280, height: 1800 }, userAgent: 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/140.0.0.0 Safari/537.36' });
const p = await ctx.newPage(); const out = [];
const save = () => fs.writeFileSync('bron/fb/events.txt', out.join('\n'));
const cookies = async () => {
  for (const t of ['Optionele cookies afwijzen', 'Alleen essentiële cookies toestaan']) { const x = p.locator(`[role=button]:has-text("${t}")`).first(); if (await x.count()) { await x.click({ timeout: 3000 }).catch(() => {}); await p.waitForTimeout(1500); } }
  const c = p.locator('[aria-label="Sluiten"]').first(); if (await c.count()) await c.click({ timeout: 2000 }).catch(() => {});
};
const meer = async (n) => { for (const m of (await p.locator('[role=button]:has-text("Meer weergeven")').all()).slice(0, n)) { await m.click({ timeout: 1500 }).catch(() => {}); await p.waitForTimeout(250); } };
await p.goto('https://www.facebook.com/KaffeedeBonnefooi/events', { waitUntil: 'domcontentloaded' }); await p.waitForTimeout(5000); await cookies();
const links = await p.evaluate(() => [...new Set([...document.querySelectorAll('a[href*="/events/"]')].map(a => a.href.split('?')[0]))]);
out.push('LINKS', ...links); save(); console.log(links.join(' '));
for (const l of links.filter(l => /events\/\d+/.test(l)).slice(0, 8)) {
  try {
    await p.goto(l, { waitUntil: 'domcontentloaded', timeout: 30000 }); await p.waitForTimeout(4000); await cookies(); await meer(3); await p.waitForTimeout(600);
    out.push('######## ' + l, (await p.evaluate(() => document.body.innerText)).slice(0, 3500)); save();
  } catch (e) { out.push('ERR ' + l); }
}
await p.goto('https://www.facebook.com/KaffeedeBonnefooi/', { waitUntil: 'domcontentloaded' }); await p.waitForTimeout(5000); await cookies();
for (let i = 0; i < 6; i++) { const c = p.locator('[aria-label="Sluiten"]').first(); if (await c.count()) await c.click({ timeout: 1500 }).catch(() => {}); await p.mouse.wheel(0, 1400); await p.waitForTimeout(1300); }
await meer(25); await p.waitForTimeout(800);
out.push('######## FEED', await p.evaluate(() => document.body.innerText)); save();
await b.close(); console.log('ok');
