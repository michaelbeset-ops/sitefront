// public/og.jpg (1200x630): donker vlak, woordmerk in Bodoni, kalfswang rechts.
import { chromium } from 'playwright'; import fs from 'node:fs';
const font = fs.readFileSync('node_modules/@fontsource-variable/bodoni-moda/files/bodoni-moda-latin-opsz-normal.woff2').toString('base64');
const fonti = fs.readFileSync('node_modules/@fontsource-variable/bodoni-moda/files/bodoni-moda-latin-opsz-italic.woff2').toString('base64');
const foto = fs.readFileSync('src/assets/kalfswang.jpg').toString('base64');
const b = await chromium.launch(); const p = await b.newPage({ viewport: { width: 1200, height: 630 } });
await p.setContent(`<style>@font-face{font-family:B;src:url(data:font/woff2;base64,${font}) format('woff2')}@font-face{font-family:B;font-style:italic;src:url(data:font/woff2;base64,${fonti}) format('woff2')}
body{margin:0;width:1200px;height:630px;background:#12100e;color:#ece5d8;font-family:B;position:relative;overflow:hidden}
.f{position:absolute;right:0;top:0;width:640px;height:630px;object-fit:cover;object-position:50% 62%}
.g{position:absolute;inset:0;background:linear-gradient(90deg,#12100e 45%,#12100e00 75%)}
h1{position:absolute;left:80px;top:200px;margin:0;font-weight:400;font-size:120px;line-height:1}
p{position:absolute;left:80px;top:350px;margin:0;font-style:italic;font-size:30px;color:#ece5d8d9}
small{position:absolute;left:82px;top:160px;font:500 13px system-ui;letter-spacing:.3em;color:#b9a074}</style>
<img class=f src="data:image/jpeg;base64,${foto}"><div class=g></div><small>VIJF GANGEN · ELKE WEEK NIEUW</small>
<h1>Nellie's</h1><p>Private dining aan de dijk, Tholen</p>`);
await p.waitForTimeout(400);
await p.screenshot({ path: 'public/og.jpg', type: 'jpeg', quality: 84 }); await b.close();
