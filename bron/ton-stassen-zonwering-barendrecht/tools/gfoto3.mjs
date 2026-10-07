import { chromium } from 'playwright'; import fs from 'node:fs';
const b = await chromium.launch(); const ctx = await b.newContext({ userAgent: 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/141.0.0.0 Safari/537.36', locale: 'nl-NL', viewport: { width: 1400, height: 1000 } }); const p = await ctx.newPage();
p.setDefaultTimeout(8000);
await p.goto('https://www.google.com/maps/place/Ton+Stassen+Zonwering+Barendrecht/@51.8480217,4.5274699,17z/data=!3m1!4b1!4m6!3m5!1s0x47c431ce58ab011d:0xf6852d147545d579!8m2!3d51.8480217!4d4.5274699!16s%2Fg%2F11h81j6vtr?hl=nl', { waitUntil: 'domcontentloaded' });
await p.waitForTimeout(2500);
if (p.url().includes('consent')) { await p.getByRole('button', { name: /Alles afwijzen|Reject all/ }).first().click(); await p.waitForTimeout(4000); }
await p.waitForTimeout(3000);
await p.locator('button[aria-label*="Foto" i]').first().click(); await p.waitForTimeout(4000);
const all = new Set();
for (let i = 0; i < 10; i++) {
  (await p.evaluate(() => [...document.querySelectorAll('*')].map(e => e.style?.backgroundImage || e.src || '').join(' ').match(/https:\/\/lh\d\.googleusercontent\.com\/(gps-cs-s|grass-cs|p)\/[A-Za-z0-9_-]+/g) || [])).forEach(u => all.add(u));
  await p.mouse.move(200, 600); await p.mouse.wheel(0, 800); await p.waitForTimeout(900);
}
fs.writeFileSync('bron/google/alle-fotos.txt', [...all].join('\n')); console.log(all.size);
await b.close();
