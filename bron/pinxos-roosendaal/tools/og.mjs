// og.jpg (1200x630) van de hero via de eigen preview op 4505 (zelfde werkwijze als werkwijze/tools/ogshot.mjs).
import { chromium } from 'playwright'; import sharp from 'sharp';
const b = await chromium.launch(); const p = await (await b.newContext({ viewport: { width: 1200, height: 630 }, deviceScaleFactor: 2 })).newPage();
await p.goto('http://127.0.0.1:4505/sitefront/pinxos-roosendaal/', { waitUntil: 'networkidle' });
await p.evaluate(async () => { await document.fonts.ready;
  for (const el of document.querySelectorAll('body *')) { if (/Ontwerpvoorstel van Sitefront/.test(el.textContent) && el.children.length < 4 && el.getBoundingClientRect().top < 80 && el.getBoundingClientRect().height < 90) { (el.closest('div,aside,section,p') || el).style.display = 'none'; break; } }
  for (const el of document.querySelectorAll('[class*="fixed"],[class*="bottom-0"]')) if (el.getBoundingClientRect().top > 400) el.style.display = 'none'; });
await p.waitForTimeout(1500);
await sharp(await p.screenshot({ type: 'png' })).resize(1200, 630).jpeg({ quality: 82, mozjpeg: true }).toFile('public/og.jpg');
await b.close(); console.log('ok');
