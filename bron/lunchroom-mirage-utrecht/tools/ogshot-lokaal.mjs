// Maakt public/og.jpg (1200x630) als screenshot van de hero van de live demo, zonder voorstelbalk.
// Gebruik: node ogshot.mjs <slug> [<slug> ...]   (live)
//         OG_LOCAL=1 node ogshot.mjs <slug>    (lokaal: bouwt niet zelf; serveert demos/<slug>/dist via astro preview op poort 4999, zodat og.jpg in dezelfde commit kan)
import { chromium } from 'playwright';
import sharp from 'sharp';
const b = await chromium.launch();
for (const s of process.argv.slice(2)) {
  const p = await (await b.newContext({ viewport: { width: 1200, height: 630 }, deviceScaleFactor: 2 })).newPage();
  let srv;
  // astro preview is bezet door andere bouwers: eigen statische server op 4550 (tools/serve.mjs)
  await p.goto(`http://127.0.0.1:4550/sitefront/${s}/`, { waitUntil: 'networkidle' });
  await p.evaluate(async () => {
    await document.fonts.ready;
    for (const el of document.querySelectorAll('body *')) { if (/Ontwerpvoorstel van Sitefront/.test(el.textContent) && el.children.length < 4 && el.getBoundingClientRect().top < 80 && el.getBoundingClientRect().height < 90) { (el.closest('div,aside,section,p') || el).style.display = 'none'; break; } }
    for (const el of document.querySelectorAll('[class*="fixed"],[class*="bottom-0"]')) if (el.getBoundingClientRect().top > 400) el.style.display = 'none';
  });
  await p.waitForTimeout(1500);
  const buf = await p.screenshot({ type: 'png' });
  await sharp(buf).resize(1200, 630).jpeg({ quality: 82, mozjpeg: true }).toFile(`public/og.jpg`);
  console.log(s, 'ok'); await p.close(); if (srv) { try { process.platform === 'win32' ? (await import('node:child_process')).execSync(`taskkill /pid ${srv.pid} /T /F`) : srv.kill(); } catch {} }
}
await b.close();
