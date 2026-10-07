import { chromium } from 'playwright'; import fs from 'node:fs';
const b = await chromium.launch(); const ctx = await b.newContext({ userAgent: 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/141.0.0.0 Safari/537.36', locale: 'nl-NL', viewport: { width: 1400, height: 1000 } }); const p = await ctx.newPage();
p.setDefaultTimeout(8000);
await p.goto('https://www.google.com/maps/place/Ton+Stassen+Zonwering+Barendrecht/@51.8480217,4.5274699,17z/data=!3m1!4b1!4m6!3m5!1s0x47c431ce58ab011d:0xf6852d147545d579!8m2!3d51.8480217!4d4.5274699!16s%2Fg%2F11h81j6vtr?hl=nl', { waitUntil: 'domcontentloaded' });
await p.waitForTimeout(2500);
if (p.url().includes('consent')) { await p.getByRole('button', { name: /Alles afwijzen|Reject all/ }).first().click(); await p.waitForTimeout(4000); }
await p.waitForTimeout(3000);
const oh = await p.evaluate(() => [...document.querySelectorAll('[aria-label]')].map(e => e.getAttribute('aria-label')).filter(s => /maandag|zaterdag/i.test(s)).join(' // '));
fs.writeFileSync('bron/google/tijden.txt', oh); console.log('tijden', oh);
await p.getByRole('tab', { name: /Reviews/ }).first().click(); await p.waitForTimeout(3000);
for (let i = 0; i < 12; i++) { await p.evaluate(() => { const e = document.querySelector('div.jftiEf')?.closest('div.m6QErb[tabindex]') || document.querySelectorAll('div.m6QErb.DxyBCb')[0]; if (e) e.scrollTop = e.scrollHeight; }); await p.waitForTimeout(800); }
const n = await p.evaluate(() => { let c = 0; document.querySelectorAll('button.w8nwRe, button[aria-label="Meer weergeven"], button[aria-label="Meer"]').forEach(b => { b.click(); c++; }); return c; });
console.log('meer', n); await p.waitForTimeout(1200);
const rev = await p.evaluate(() => [...document.querySelectorAll('div.jftiEf')].map(r => ['NAAM: ' + r.querySelector('.d4r55')?.textContent, r.querySelector('.kvMYJc')?.getAttribute('aria-label'), r.querySelector('.rsqaWe')?.textContent, '\n' + (r.querySelector('.wiI7pd')?.textContent || '(geen tekst)'), '\nEIGENAAR: ' + (r.querySelector('.CDe7pd')?.innerText || '').slice(0, 300)].join(' | ')));
fs.writeFileSync('bron/google/reviews.txt', rev.join('\n\n')); console.log('reviews', rev.length);
await p.screenshot({ path: 'bron/google/reviews.png' });
await b.close();
