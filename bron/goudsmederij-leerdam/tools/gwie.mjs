import { chromium } from 'playwright';
const b = await chromium.launch({ channel: 'chrome', args: ['--headless=new','--disable-blink-features=AutomationControlled'] }); const ctx = await b.newContext({ userAgent: 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/141.0.0.0 Safari/537.36', locale: 'nl-NL', viewport: { width: 1400, height: 1600 } }); const p = await ctx.newPage();
await p.goto('https://www.google.com/maps/search/' + encodeURIComponent('Goudsmederij Leerdam Kerkstraat 40 Leerdam') + '?hl=nl', { waitUntil: 'load', timeout: 45000 }).catch(() => {});
await p.waitForTimeout(2500);
const r = p.locator('button:has-text("Alles afwijzen")').first(); if (await r.count()) { await r.click(); await p.waitForTimeout(4000); }
const btn = p.locator('button:has-text("Foto\'s bekijken"), [aria-label^="Foto"]').first();
if (await btn.count()) { await btn.click().catch(() => {}); await p.waitForTimeout(3500); }
for (let i = 0; i < 26; i++) {
  const info = await p.evaluate(() => { const t = document.body.innerText; const m = t.match(/\n([^\n]+)\n(Foto|Video)[^\n]*\d{4}/); return m ? m[1] + ' | ' + m[0].split('\n').pop() : '?'; });
  const u = decodeURIComponent(p.url()); const id = (u.match(/(grass-cs|gps-cs-s|p)\/[A-Za-z0-9_-]{30}/) || [''])[0];
  console.log(i, info, id);
  await p.keyboard.press('ArrowRight'); await p.waitForTimeout(1300);
}
await b.close();
