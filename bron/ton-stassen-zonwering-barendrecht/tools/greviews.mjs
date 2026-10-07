import { chromium } from 'playwright'; import fs from 'node:fs';
const b = await chromium.launch(); const ctx = await b.newContext({ userAgent: 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/141.0.0.0 Safari/537.36', locale: 'nl-NL', viewport: { width: 1400, height: 900 } }); const p = await ctx.newPage();
p.setDefaultTimeout(8000);
await p.goto('https://www.google.com/maps/place/Ton+Stassen+Zonwering+Barendrecht/@51.8480217,4.5274699,17z/data=!3m1!4b1!4m6!3m5!1s0x47c431ce58ab011d:0xf6852d147545d579!8m2!3d51.8480217!4d4.5274699!16s%2Fg%2F11h81j6vtr?hl=nl', { waitUntil: 'domcontentloaded' });
await p.waitForTimeout(2500);
if (p.url().includes('consent')) { await p.getByRole('button', { name: /Alles afwijzen|Reject all/ }).first().click(); await p.waitForTimeout(4000); }
await p.waitForTimeout(3000);
// openingstijden
const oh = await p.evaluate(() => [...document.querySelectorAll('[aria-label]')].map(e => e.getAttribute('aria-label')).filter(s => /maandag|dinsdag/i.test(s)).join('\n'));
fs.writeFileSync('bron/google/tijden.txt', oh); console.log('tijden', oh.slice(0, 400));
await p.locator('button[role=tab]:has-text("Reviews")').first().click(); await p.waitForTimeout(3000);
try { await p.locator('button[aria-label*="sorteren" i], button:has-text("Sorteren")').first().click(); await p.waitForTimeout(1200); await p.locator('[role=menuitemradio]:has-text("Nieuwste")').first().click(); await p.waitForTimeout(3000); } catch (e) { console.log('sort fail'); }
for (let i = 0; i < 10; i++) { await p.mouse.move(300, 600); await p.mouse.wheel(0, 3000); await p.waitForTimeout(700); }
for (const m of await p.locator('button.w8nwRe').all()) await m.click({ timeout: 2000 }).catch(() => {});
await p.waitForTimeout(800);
const rev = await p.evaluate(() => [...document.querySelectorAll('div.jftiEf')].map(r => ['NAAM: ' + r.querySelector('.d4r55')?.textContent, r.querySelector('.kvMYJc')?.getAttribute('aria-label') || r.querySelector('.fzvQIb')?.textContent, r.querySelector('.rsqaWe')?.textContent || r.querySelector('.xRkPPb')?.textContent, '\n' + (r.querySelector('.wiI7pd')?.textContent || '(geen tekst)'), '\nEIGENAAR: ' + (r.querySelector('.CDe7pd')?.innerText || '').slice(0, 300)].join(' | ')));
fs.writeFileSync('bron/google/reviews.txt', rev.join('\n\n')); console.log('reviews', rev.length);
await p.screenshot({ path: 'bron/google/reviews.png' });
// foto's
await p.locator('button[role=tab]:has-text("Overzicht")').first().click().catch(()=>{}); await p.waitForTimeout(1500);
await p.locator('button[aria-label^="Foto van"]').first().click().catch(() => console.log('geen foto-knop')); await p.waitForTimeout(4000);
const labs = await p.evaluate(() => [...document.querySelectorAll('button[role=tab]')].map(b => b.textContent.trim()));
console.log('fototabs', labs.join(' / '));
for (let i = 0; i < 8; i++) { await p.mouse.move(300, 500); await p.mouse.wheel(0, 3000); await p.waitForTimeout(600); }
const urls = await p.evaluate(() => { const s = new Set(); document.querySelectorAll('*').forEach((e) => { const bg = e.style && e.style.backgroundImage; const m = bg && bg.match(/(https?:)?\/\/lh\d\.googleusercontent\.com\/(gps-cs-s|grass-cs|p)\/[^"=)]+/); if (m) s.add(m[0].replace(/^\/\//, 'https://')); }); document.querySelectorAll('img').forEach(i => { const m = i.src.match(/https:\/\/lh\d\.googleusercontent\.com\/(gps-cs-s|grass-cs|p)\/[^=]+/); if (m) s.add(m[0]); }); return [...s]; });
fs.writeFileSync('bron/google/foto-urls.txt', urls.join('\n')); console.log('fotos', urls.length);
await p.screenshot({ path: 'bron/google/fotos.png' });
await b.close();
