import { chromium } from 'playwright'; import fs from 'node:fs';
const links = JSON.parse(fs.readFileSync('bron/fb/links.json'));
const b = await chromium.launch(); const ctx = await b.newContext({ locale: 'nl-NL', viewport: { width: 1600, height: 1000 } }); const p = await ctx.newPage();
const seen = new Map();
async function grab() {
  await p.waitForTimeout(2500);
  const r = await p.evaluate(() => { const im = [...document.images].filter(i => i.src.includes('fbcdn')).sort((a, b) => b.naturalWidth * b.naturalHeight - a.naturalWidth * a.naturalHeight)[0]; const txt = document.querySelector('[role=complementary]')?.innerText || document.body.innerText.slice(0, 1500); return im ? { src: im.src, w: im.naturalWidth, h: im.naturalHeight, txt } : null; });
  return r;
}
await p.goto(links[1].href, { waitUntil: 'domcontentloaded' });
try { await p.getByRole('button', { name: /alleen essentiële|weigeren|Decline optional/i }).first().click({ timeout: 3000 }); } catch {}
for (let i = 0; i < 80; i++) {
  const r = await grab(); const key = p.url().match(/fbid=(\d+)/)?.[1] || p.url();
  if (!r || seen.has(key)) { console.log('stop', i, key, !!r); break; }
  seen.set(key, r);
  const buf = Buffer.from(await (await ctx.request.get(r.src)).body());
  fs.writeFileSync(`bron/fb/f${String(i).padStart(2, '0')}.jpg`, buf);
  fs.appendFileSync('bron/fb/meta.txt', `f${String(i).padStart(2, '0')}.jpg ${r.w}x${r.h} ${p.url()}\n${r.txt.replace(/\n+/g, ' | ').slice(0, 600)}\n\n`);
  try { await p.locator('[aria-label="Volgende foto"], [aria-label="Next photo"]').first().click({ timeout: 4000 }); } catch { console.log('no next', i); break; }
}
console.log('saved', seen.size);
await b.close();
