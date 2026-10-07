import { chromium } from 'playwright'; import fs from 'node:fs';
const b = await chromium.launch(); const ctx = await b.newContext({ userAgent: 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/141.0.0.0 Safari/537.36', locale: 'nl-NL', viewport: { width: 1400, height: 1000 } }); const p = await ctx.newPage();
p.setDefaultTimeout(8000);
await p.goto('https://www.google.com/maps/place/Ton+Stassen+Zonwering+Barendrecht/@51.8480217,4.5274699,17z/data=!3m1!4b1!4m6!3m5!1s0x47c431ce58ab011d:0xf6852d147545d579!8m2!3d51.8480217!4d4.5274699!16s%2Fg%2F11h81j6vtr?hl=nl', { waitUntil: 'domcontentloaded' });
await p.waitForTimeout(2500);
if (p.url().includes('consent')) { await p.getByRole('button', { name: /Alles afwijzen|Reject all/ }).first().click(); await p.waitForTimeout(4000); }
await p.waitForTimeout(3000);
await p.locator('button[aria-label*="Foto" i]').first().click(); await p.waitForTimeout(4000);
const out = [];
for (let i = 0; i < 8; i++) {
  const info = await p.evaluate(() => { const h = document.querySelector('h1')?.textContent; const t = [...document.querySelectorAll('div')].filter(d => /^Foto - |^Video - /.test(d.textContent?.trim() || '') && d.children.length === 0).map(d => d.textContent.trim())[0]; const who = [...document.querySelectorAll('a[href*="contrib"], .YI4FTb, .hp7c9b')].map(a=>a.textContent.trim()).join(','); const img = [...document.querySelectorAll('img, div')].map(e => (e.src || e.style?.backgroundImage || '')).find(s => /googleusercontent\.com\/(gps-cs-s|grass-cs|p)\/.*=w\d{3,}/.test(s)); return { t, who, img: (img || '').slice(0, 300) }; });
  out.push(JSON.stringify(info)); await p.screenshot({ path: `bron/google/gv${i}.png`, scale: 'css' });
  const nx = p.locator('button[aria-label="Volgende"], button[aria-label*="Volgende foto"]'); if (await nx.count()) await nx.first().click().catch(()=>{}); else await p.keyboard.press('ArrowRight'); await p.waitForTimeout(2500);
}
fs.writeFileSync('bron/google/gviewer.txt', out.join('\n')); console.log(out.join('\n'));
await b.close();
