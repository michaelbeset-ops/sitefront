import { chromium } from 'playwright'; import fs from 'node:fs';
const b = await chromium.launch(); const ctx = await b.newContext({ userAgent: 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/141.0.0.0 Safari/537.36', locale: 'nl-NL', viewport: { width: 1400, height: 1000 } }); const p = await ctx.newPage();
p.setDefaultTimeout(8000);
await p.goto('https://www.google.com/maps/place/Ton+Stassen+Zonwering+Barendrecht/@51.8480217,4.5274699,17z/data=!3m1!4b1!4m6!3m5!1s0x47c431ce58ab011d:0xf6852d147545d579!8m2!3d51.8480217!4d4.5274699!16s%2Fg%2F11h81j6vtr?hl=nl', { waitUntil: 'domcontentloaded' });
await p.waitForTimeout(2500);
if (p.url().includes('consent')) { await p.getByRole('button', { name: /Alles afwijzen|Reject all/ }).first().click(); await p.waitForTimeout(4000); }
await p.waitForTimeout(3000);
console.log(await p.evaluate(() => [...document.querySelectorAll('button')].slice(0,40).map(b => (b.getAttribute('aria-label')||'').slice(0,50) + '/' + b.className.slice(0,20)).join(' | '))); await p.locator('button[aria-label*="Foto" i]').first().click().catch(() => console.log('geen hero'));
await p.waitForTimeout(4000);
console.log(await p.evaluate(() => [...document.querySelectorAll('button[role=tab], [role=tab]')].map(b => b.textContent.trim()).join(' / ')));
await p.screenshot({ path: 'bron/google/gal0.png' });
for (const t of ['Van eigenaar', 'Alle', 'Nieuwste']) {
  const tab = p.getByRole('tab', { name: t }); if (await tab.count()) { await tab.first().click(); await p.waitForTimeout(3000); await p.screenshot({ path: `bron/google/gal-${t.replace(/\W/g,'')}.png` }); 
  const urls = await p.evaluate(() => { const s = new Set(); document.querySelectorAll('*').forEach((e) => { const bg = e.style && e.style.backgroundImage; const m = bg && bg.match(/(https?:)?\/\/lh\d\.googleusercontent\.com\/(gps-cs-s|grass-cs|p)\/[^"=)]+/); if (m) s.add(m[0].replace(/^\/\//, 'https://')); }); return [...s]; });
  fs.writeFileSync(`bron/google/gal-${t.replace(/\W/g,'')}.txt`, urls.join('\n')); console.log(t, urls.length); }
}
await b.close();
