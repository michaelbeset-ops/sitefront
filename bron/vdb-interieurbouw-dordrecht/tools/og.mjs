// public/og.jpg (1200x630): eigen slaapkamerfoto + kop in Rufina + lichtlijn.
import { chromium } from 'playwright'; import fs from 'node:fs'; import sharp from 'sharp';
const font = fs.readFileSync('node_modules/@fontsource/rufina/files/rufina-latin-400-normal.woff2').toString('base64');
const foto = (await sharp('src/assets/slaapkamer.jpg').extract({ left: 0, top: 0, width: 1700, height: 1063 }).resize(1300).jpeg({ quality: 80 }).toBuffer()).toString('base64');
const b = await chromium.launch(); const p = await b.newPage({ viewport: { width: 1200, height: 630 } });
await p.setContent(`<style>@font-face{font-family:R;src:url(data:font/woff2;base64,${font}) format('woff2')}
body{margin:0;width:1200px;height:630px;background:#141218;color:#fff;position:relative;overflow:hidden;font-family:system-ui,sans-serif}
img{position:absolute;inset:0;width:100%;height:100%;object-fit:cover;object-position:40% 50%}
.g{position:absolute;inset:0;background:linear-gradient(90deg,#141218f2 0%,#141218b3 45%,#14121820 85%)}
small{position:absolute;left:72px;top:96px;font:600 26px system-ui;color:#b2a2ff}
h1{position:absolute;left:68px;top:140px;margin:0;font:400 104px/1.02 R;letter-spacing:-.015em}
p{position:absolute;left:72px;top:400px;margin:0;font-size:28px;color:#ffffffe6;max-width:700px;line-height:1.4}
.l{position:absolute;left:0;right:0;bottom:80px;height:3px;background:linear-gradient(90deg,#7b5cff 0%,#c9bdff 40%,#7b5cff 75%,#7b5cff00);box-shadow:0 0 26px 4px #7b5cff88}
</style><img src="data:image/jpeg;base64,${foto}"><div class=g></div><small>VDB interieurbouw · Dordrecht</small>
<h1>Maatwerk voor<br>elk interieur.</h1><p>Keuken op maat, walk-in closet of een totaal project.<br>Bel of app 06 48 25 66 97.</p><div class=l></div>`);
await p.waitForTimeout(500);
await p.screenshot({ path: 'public/og.jpg', type: 'jpeg', quality: 82 }); await b.close();
console.log(fs.statSync('public/og.jpg').size);
