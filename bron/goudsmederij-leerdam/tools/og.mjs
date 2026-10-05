// public/og.jpg (1200x630): werkbank-still met woordmerk en kop in Marcellus.
import { chromium } from 'playwright'; import fs from 'node:fs';
const font = fs.readFileSync('node_modules/@fontsource/marcellus/files/marcellus-latin-400-normal.woff2').toString('base64');
const foto = fs.readFileSync('src/assets/eigen-werkbank.jpg').toString('base64');
const b = await chromium.launch(); const p = await b.newPage({ viewport: { width: 1200, height: 630 } });
await p.setContent(`<style>@font-face{font-family:M;src:url(data:font/woff2;base64,${font}) format('woff2')}
body{margin:0;width:1200px;height:630px;background:#1c1d1c;color:#f4f3ef;font-family:M;position:relative;overflow:hidden}
img{position:absolute;inset:0;width:1200px;height:630px;object-fit:cover;object-position:70% 50%}
.g{position:absolute;inset:0;background:linear-gradient(90deg,#1c1d1cf2 0%,#1c1d1cbb 45%,#1c1d1c22 100%)}
.m{position:absolute;left:72px;top:64px;font-size:28px;letter-spacing:.14em}.m i{font-style:normal;color:#ef8279;padding:0 .3em}
h1{position:absolute;left:72px;bottom:118px;width:640px;margin:0;font-weight:400;font-size:76px;line-height:1.02}
h1 span{color:#ef8279}
p{position:absolute;left:72px;bottom:62px;margin:0;font:600 20px system-ui;color:#bdb7af}</style>
<img src="data:image/jpeg;base64,${foto}"><div class=g></div><div class=m><i>•</i>GOUDSMEDERIJ<i>•</i>LEERDAM<i>•</i></div>
<h1>Van een draad goud tot <span>uw sieraad</span></h1><p>Kerkstraat 40, Leerdam · atelier en juwelier</p>`);
await p.waitForTimeout(400);
await p.screenshot({ path: 'public/og.jpg', type: 'jpeg', quality: 84 }); await b.close();
