// Zelfde werkwijze als werkwijze/tools/ogshot.mjs (OG_LOCAL), maar tegen de al draaiende preview op poort 4460 (4999 startte niet).
import { chromium } from 'playwright';
import sharp from 'sharp';
const b = await chromium.launch();
const p = await (await b.newContext({ viewport: { width: 1200, height: 630 }, deviceScaleFactor: 2 })).newPage();
await p.goto('http://localhost:4460/sitefront/diepeveen-interieur-veenendaal/', { waitUntil: 'load' });
await p.evaluate(async () => {
  await document.fonts.ready;
  for (const el of document.querySelectorAll('body *')) { if (/Ontwerpvoorstel van Sitefront/.test(el.textContent) && el.children.length < 4 && el.getBoundingClientRect().top < 80 && el.getBoundingClientRect().height < 90) { (el.closest('div,aside,section,p') || el).style.display = 'none'; break; } }
  for (const el of document.querySelectorAll('[class*="fixed"],[class*="bottom-0"]')) if (el.getBoundingClientRect().top > 400) el.style.display = 'none';
});
await p.waitForTimeout(1500);
const buf = await p.screenshot({ type: 'png' });
await sharp(buf).resize(1200, 630).jpeg({ quality: 82, mozjpeg: true }).toFile('public/og.jpg');
await b.close(); console.log('ok');
