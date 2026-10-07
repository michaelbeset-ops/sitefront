// public/og.jpg (1200x630): het eerste scherm (header + hero), zonder voorstelbalk.
import { chromium } from 'playwright'; import sharp from 'sharp';
const b = await chromium.launch(); const p = await b.newPage({ viewport: { width: 1200, height: 760 } });
await p.goto('http://localhost:4444/sitefront/ton-stassen-zonwering-barendrecht/', { waitUntil: 'networkidle' });
await p.waitForTimeout(800);
const top = await p.evaluate(() => document.querySelector('header').getBoundingClientRect().top);
const buf = await p.screenshot({ clip: { x: 0, y: top, width: 1200, height: 630 } });
await sharp(buf).jpeg({ quality: 80, mozjpeg: true }).toFile('public/og.jpg');
await b.close();
