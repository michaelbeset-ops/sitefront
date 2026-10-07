// public/og.jpg (1200x630): hun foto van rollen met groen band, kop in Saira Stencil One.
import { chromium } from 'playwright'; import fs from 'node:fs'; import sharp from 'sharp';
const font = fs.readFileSync('node_modules/@fontsource/saira-stencil-one/files/saira-stencil-one-latin-400-normal.woff2').toString('base64');
const sans = fs.readFileSync('node_modules/@fontsource/barlow/files/barlow-latin-600-normal.woff2').toString('base64');
const foto = (await sharp('src/assets/rollen-band.jpg').resize(1400).jpeg({ quality: 82 }).toBuffer()).toString('base64');
const b = await chromium.launch(); const p = await b.newPage({ viewport: { width: 1200, height: 630 } });
await p.setContent(`<style>@font-face{font-family:S;src:url(data:font/woff2;base64,${font}) format('woff2')}
@font-face{font-family:B;src:url(data:font/woff2;base64,${sans}) format('woff2');font-weight:600}
body{margin:0;width:1200px;height:630px;background:#0c100e;color:#fff;position:relative;overflow:hidden;font-family:B}
img{position:absolute;inset:0;width:100%;height:100%;object-fit:cover;object-position:30% 60%}
.g{position:absolute;inset:0;background:linear-gradient(90deg,#0c100ef5 0%,#0c100eb0 48%,#0c100e1a 85%)}
small{position:absolute;left:72px;top:96px;font-size:26px;color:#5ccfa5}
h1{position:absolute;left:70px;top:140px;margin:0;font:400 104px/0.98 S;text-transform:uppercase;letter-spacing:-1px}
p{position:absolute;left:72px;top:390px;margin:0;font-size:28px;color:#ffffffe6;max-width:640px;line-height:1.35}
.band{position:absolute;left:0;right:0;bottom:44px;height:18px;background:repeating-linear-gradient(115deg,#ffffff14 0 2px,transparent 2px 6px),linear-gradient(180deg,#34b88d,#27a07a 45%,#1d8464)}
</style>
<img src="data:image/jpeg;base64,${foto}"><div class=g></div><small>Ropapin Verpakkingen · Ridderkerk</small>
<h1>Geen dozen-<br>schuivers.</h1><p>Verpakkingsmaterialen op aanvraag. Specialist in palletstabilisatie.</p><div class=band></div>`);
await p.waitForTimeout(500);
await p.screenshot({ path: 'public/og.jpg', type: 'jpeg', quality: 82 }); await b.close();
console.log(fs.statSync('public/og.jpg').size);
