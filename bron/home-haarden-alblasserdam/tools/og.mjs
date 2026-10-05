// public/og.jpg (1200x630): kalk vlak met woordmerk en kop in Instrument Serif, eigen foto rechts.
import { chromium } from 'playwright'; import fs from 'node:fs';
const font = fs.readFileSync('node_modules/@fontsource/instrument-serif/files/instrument-serif-latin-400-normal.woff2').toString('base64');
const fonti = fs.readFileSync('node_modules/@fontsource/instrument-serif/files/instrument-serif-latin-400-italic.woff2').toString('base64');
const foto = fs.readFileSync('src/assets/eigen-slide4.jpg').toString('base64');
const b = await chromium.launch(); const p = await b.newPage({ viewport: { width: 1200, height: 630 } });
await p.setContent(`<style>@font-face{font-family:I;src:url(data:font/woff2;base64,${font}) format('woff2')}@font-face{font-family:I;font-style:italic;src:url(data:font/woff2;base64,${fonti}) format('woff2')}
body{margin:0;width:1200px;height:630px;background:#1c1b1a;color:#f4f1ec;font-family:I;position:relative;overflow:hidden}
img{position:absolute;right:0;top:0;width:560px;height:630px;object-fit:cover;object-position:55% 40%}
.m{position:absolute;left:72px;top:64px;font-size:40px}.m i{color:#f59a6e}
h1{position:absolute;left:72px;bottom:118px;width:560px;margin:0;font-weight:400;font-size:88px;line-height:.98;letter-spacing:-.015em}
h1 i{color:#f59a6e}
p{position:absolute;left:72px;bottom:60px;margin:0;font:600 19px system-ui;color:#bdb6ad}</style>
<img src="data:image/jpeg;base64,${foto}"><div class=m>Home-<i>haarden</i></div>
<h1>Warmte met <i>sfeer</i>, bij u thuis.</h1><p>Haarden en kachels · Alblasserdam</p>`);
await p.waitForTimeout(300);
await p.screenshot({ path: 'public/og.jpg', type: 'jpeg', quality: 84 }); await b.close();
