// public/og.jpg (1200x630): eigen herofoto + kop in Castoro + huislijn uit hun logo.
import { chromium } from 'playwright'; import fs from 'node:fs'; import sharp from 'sharp';
const font = fs.readFileSync('node_modules/@fontsource/castoro/files/castoro-latin-400-normal.woff2').toString('base64');
const fontI = fs.readFileSync('node_modules/@fontsource/castoro/files/castoro-latin-400-italic.woff2').toString('base64');
const foto = (await sharp('src/assets/kastwand-zon.jpg').resize(1400).jpeg({ quality: 80 }).toBuffer()).toString('base64');
const b = await chromium.launch(); const p = await b.newPage({ viewport: { width: 1200, height: 630 } });
await p.setContent(`<style>@font-face{font-family:C;src:url(data:font/woff2;base64,${font}) format('woff2')}@font-face{font-family:C;font-style:italic;src:url(data:font/woff2;base64,${fontI}) format('woff2')}
body{margin:0;width:1200px;height:630px;background:#1b1b19;color:#fff;position:relative;overflow:hidden;font-family:system-ui,sans-serif}
img{position:absolute;inset:0;width:100%;height:100%;object-fit:cover;object-position:60% 50%}
.g{position:absolute;inset:0;background:linear-gradient(90deg,#1b1b19f5 0%,#1b1b19d0 45%,#1b1b1930 85%)}
.l{position:absolute;left:72px;top:64px;display:flex;align-items:center;gap:16px;font:600 26px system-ui;letter-spacing:.32em}
h1{position:absolute;left:70px;top:170px;margin:0;font:400 84px/1.04 C;letter-spacing:-.02em;max-width:780px}
em{color:#d6ad60}
p{position:absolute;left:72px;bottom:66px;margin:0;font-size:27px;color:#ffffffe0}
</style><img src="data:image/jpeg;base64,${foto}"><div class=g></div>
<div class=l><svg viewBox="0 0 34 33" width="48" height="46" fill="none" stroke="#d6ad60" stroke-width="1.7"><path d="M2 32V11.6L17 2l15 9.6V32"/><path d="M8 32V19.6l6.4-4.4V32Z"/><path d="M18.6 32V7.6l6.2 4.4V32Z"/></svg>REESET</div>
<h1>Interieurs ontworpen rondom hoe <em>jij</em> leeft.</h1><p>Ontwerp, advies en projectbegeleiding · Zwijndrecht</p>`);
await p.waitForTimeout(500);
await p.screenshot({ path: 'public/og.jpg', type: 'jpeg', quality: 80 }); await b.close();
console.log(fs.statSync('public/og.jpg').size);
