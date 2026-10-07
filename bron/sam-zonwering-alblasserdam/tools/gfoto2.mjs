import { chromium } from 'playwright'; import fs from 'node:fs';
const b = await chromium.launch(); const ctx = await b.newContext({ locale: 'nl-NL', viewport: { width: 1400, height: 900 } }); const p = await ctx.newPage();
await p.goto('https://www.google.com/maps/search/Montage-+en+Zonweringsbedrijf+Sam+Ruigenhil+58+Alblasserdam?hl=nl', { waitUntil: 'domcontentloaded' });
await p.waitForTimeout(2500);
if (p.url().includes('consent')) { await p.getByRole('button', { name: /Alles afwijzen|Reject all/ }).first().click(); await p.waitForTimeout(3000); }
await p.waitForSelector('h1', { timeout: 20000 }).catch(()=>{}); await p.waitForTimeout(3000);
const uren = await p.evaluate(() => [...document.querySelectorAll('[aria-label]')].map((e) => e.getAttribute('aria-label')).filter((t) => /maandag|dinsdag|woensdag/i.test(t)).join('\n'));
fs.writeFileSync('bron/google/uren.txt', uren);
const all = new Set(); const grab = async () => (await p.evaluate(() => { const s = []; document.querySelectorAll('*').forEach((e) => { const t = (e.style && e.style.backgroundImage || '') + ' ' + (e.src || ''); const m = t.match(/https?:\/\/lh\d\.googleusercontent\.com\/(gps-cs-s|grass-cs|p|geougc-cs)\/[^"=)\s]+/g); if (m) s.push(...m); }); return s; })).forEach((u) => all.add(u));
await grab();
await p.getByRole('button', { name: /Foto's bekijken|Foto van/ }).first().click().catch(e=>console.log('klik', e.message)); await p.waitForTimeout(4000);
await p.screenshot({ path: 'bron/google/fotos.png' });
for (let i = 0; i < 15; i++) { await p.mouse.move(300, 500); await p.mouse.wheel(0, 2500); await p.waitForTimeout(700); await grab(); }
console.log(await p.evaluate(() => [...document.querySelectorAll('[role=tab]')].map(t=>t.textContent.trim()).join(' | ')));
fs.writeFileSync('bron/google/foto-urls.txt', [...all].join('\n')); console.log(all.size);
await b.close();
