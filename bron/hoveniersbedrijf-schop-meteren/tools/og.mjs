// public/og.jpg (1200x630): eigen projectfoto (rietgedekte villa) met donkere gradient, woordmerk en kop in Alegreya Sans 800.
import { chromium } from 'playwright'; import fs from 'node:fs'; import sharp from 'sharp';
const font = fs.readFileSync('node_modules/@fontsource/alegreya-sans/files/alegreya-sans-latin-800-normal.woff2').toString('base64');
const foto = (await sharp('src/assets/hero.jpg').resize(1200, 630, { fit: 'cover', position: 'centre' }).jpeg({ quality: 85 }).toBuffer()).toString('base64');
const b = await chromium.launch(); const p = await b.newPage({ viewport: { width: 1200, height: 630 } });
await p.setContent(`<style>@font-face{font-family:A;src:url(data:font/woff2;base64,${font}) format('woff2');font-weight:800}
body{margin:0;width:1200px;height:630px;position:relative;overflow:hidden;font-family:A;color:#f7f5f0}
img{position:absolute;inset:0;width:1200px;height:630px;object-fit:cover}
.g{position:absolute;inset:0;background:linear-gradient(90deg,#1b1922f0 0%,#1b1922b0 45%,#1b192230 100%)}
.m{position:absolute;left:72px;top:64px;font-size:34px;letter-spacing:.02em}.m i{font-style:normal;color:#c4aef0}
h1{position:absolute;left:72px;bottom:120px;margin:0;font-size:92px;line-height:.95;letter-spacing:-.02em;width:700px}h1 span{color:#c4aef0}
p{position:absolute;left:72px;bottom:62px;margin:0;font-family:system-ui;font-size:20px;letter-spacing:.14em;text-transform:uppercase;font-weight:600}</style>
<img src="data:image/jpeg;base64,${foto}"><div class=g></div><div class=m>D<i>.</i>SCHOP</div>
<h1>Een tuin die past bij <span>úw huis.</span></h1><p>Hoveniersbedrijf in Meteren</p>`);
await p.waitForTimeout(300);
await p.screenshot({ path: 'public/og.jpg', type: 'jpeg', quality: 84 }); await b.close();
