// public/og.jpg (1200x630): screenshot van de hero van de lokale preview, zonder voorstelbalk.
import { chromium } from 'playwright'; import sharp from 'sharp';
const b = await chromium.launch(); const p = await (await b.newContext({ viewport: { width: 1200, height: 630 }, deviceScaleFactor: 2 })).newPage();
await p.goto('http://localhost:4431/sitefront/pallethandel-labeda-klundert/', { waitUntil: 'networkidle' });
await p.evaluate(async () => { await document.fonts.ready; document.querySelector('body > div.relative.z-50')?.remove(); const s = document.querySelector('main section'); s.querySelector('.grid.gap-8')?.remove(); s.style.minHeight = '630px'; s.style.height = '630px'; });
await p.waitForTimeout(800);
await sharp(await p.screenshot()).resize(1200, 630).jpeg({ quality: 80, mozjpeg: true }).toFile('public/og.jpg');
await b.close();
