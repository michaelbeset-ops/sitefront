import { chromium } from 'playwright'; import fs from 'node:fs';
const b = await chromium.launch(); const ctx = await b.newContext({ locale: 'nl-NL', viewport: { width: 1400, height: 900 } }); const p = await ctx.newPage();
await p.goto('https://www.google.com/maps/search/Montage-+en+Zonweringsbedrijf+Sam+Ruigenhil+58+Alblasserdam?hl=nl', { waitUntil: 'domcontentloaded' });
await p.waitForTimeout(2500);
if (p.url().includes('consent')) { await p.getByRole('button', { name: /Alles afwijzen|Reject all/ }).first().click(); await p.waitForTimeout(3000); }
await p.waitForSelector('h1', { timeout: 20000 }).catch(()=>{}); await p.waitForTimeout(3000);
await p.getByRole('button', { name: /Foto van/ }).first().click(); await p.waitForTimeout(4000);
const seen = [];
for (let i = 0; i < 40; i++) {
  const info = await p.evaluate(() => { const t = document.body.innerText.match(/(Foto|Video) - [a-z]+ \d{4}/)?.[0]; const who = [...document.querySelectorAll('a,button,div')].map(e=>e.innerText).find(x=>/^[A-Z][\w. ]+$/.test(x||''))?.slice(0,30); const im = [...document.querySelectorAll('img,canvas')].map(e=>e.src).filter(s=>s&&/googleusercontent/.test(s)); return { t, url: location.href.slice(0,400), im: im.slice(0,3) }; });
  const key = info.url.match(/!1s([^!]+)/)?.[1] || info.url;
  if (seen.find(s => s.key === key)) break;
  seen.push({ key, ...info });
  await p.screenshot({ path: `bron/google/g${String(i).padStart(2,'0')}.jpg`, type: 'jpeg', quality: 70 });
  await p.keyboard.press('ArrowRight'); await p.waitForTimeout(1800);
}
fs.writeFileSync('bron/google/fotos.json', JSON.stringify(seen, null, 1)); console.log(seen.length, seen.map(s=>s.t).join(', '));
await b.close();
