// public/og.jpg (1200x630): luchtfoto van de werf, kop in Sofia Sans Extra Condensed.
import { chromium } from 'playwright'; import fs from 'node:fs';
const font = fs.readFileSync('node_modules/@fontsource-variable/sofia-sans-extra-condensed/files/sofia-sans-extra-condensed-latin-wght-normal.woff2').toString('base64');
const foto = fs.readFileSync('src/assets/werf-luchtfoto.jpg').toString('base64');
const b = await chromium.launch(); const p = await b.newPage({ viewport: { width: 1200, height: 630 } });
await p.setContent(`<style>@font-face{font-family:S;src:url(data:font/woff2;base64,${font}) format('woff2');font-weight:100 900}
body{margin:0;width:1200px;height:630px;background:#001a3a;color:#fff;position:relative;overflow:hidden;font-family:system-ui}
img{position:absolute;inset:0;width:100%;height:100%;object-fit:cover}
.g{position:absolute;inset:0;background:linear-gradient(90deg,#001a3af2 0%,#001a3ab0 45%,#001a3a10 80%)}
h1{position:absolute;left:72px;top:150px;margin:0;font:800 120px/0.9 S;text-transform:uppercase}
small{position:absolute;left:74px;top:108px;font:600 22px system-ui;color:#3cc3d1}
p{position:absolute;left:74px;top:500px;margin:0;font-size:26px;color:#ffffffe0}</style>
<img src="data:image/jpeg;base64,${foto}"><div class=g></div><small>Teus Vlot Groep · Sliedrecht</small>
<h1>De motor<br>van uw<br>bedrijf.</h1><p>Servicelijn 24/7: +31 (0)184 493 888</p>`);
await p.waitForTimeout(500);
await p.screenshot({ path: 'public/og.jpg', type: 'jpeg', quality: 84 }); await b.close();
