// public/og.jpg (1200x630): hero-beeld met lichte overloop, kop in Barlow Semi Condensed, logo nagetekend.
import { chromium } from 'playwright'; import fs from 'node:fs'; import sharp from 'sharp';
const font = fs.readFileSync('node_modules/@fontsource/barlow-semi-condensed/files/barlow-semi-condensed-latin-800-normal.woff2').toString('base64');
const foto = (await sharp('src/assets/lamellen-daglicht.jpg').resize(1400).jpeg({ quality: 80 }).toBuffer()).toString('base64');
const b = await chromium.launch(); const p = await b.newPage({ viewport: { width: 1200, height: 630 } });
await p.setContent(`<style>@font-face{font-family:B;src:url(data:font/woff2;base64,${font}) format('woff2')}
body{margin:0;width:1200px;height:630px;background:#f6f9fb;position:relative;overflow:hidden;font-family:system-ui}
.f{position:absolute;inset:0;width:1200px;height:630px;object-fit:cover;object-position:60% 50%}
.g{position:absolute;inset:0;background:linear-gradient(90deg,#f6f9fbf7 0%,#f6f9fbe6 45%,#f6f9fb59 75%,#f6f9fb00 100%)}
h1{position:absolute;left:72px;top:150px;margin:0;font:800 132px/0.92 B;color:#004078;letter-spacing:-2px}
small{position:absolute;left:76px;top:104px;font:600 24px system-ui;color:#004078}
p{position:absolute;left:76px;top:440px;margin:0;font-size:27px;color:#0c1a28}
.h{position:absolute;left:0;right:0;bottom:0;height:6px;background:#f8e048}.z{position:absolute;right:120px;bottom:6px;width:120px;height:60px;overflow:hidden}.z i{display:block;width:120px;height:120px;border-radius:50%;background:#f8e048}</style>
<img class=f src="data:image/jpeg;base64,${foto}"><div class=g></div><small>Sam Zonwering · Alblasserdam</small>
<h1>Sterk in<br>zonwering.</h1><p>Binnen- en buitenzonwering op maat, gratis inmeten.</p><div class=z><i></i></div><div class=h></div>`);
await p.waitForTimeout(400);
await p.screenshot({ path: 'public/og.jpg', type: 'jpeg', quality: 82 }); await b.close();
console.log(fs.statSync('public/og.jpg').size);
