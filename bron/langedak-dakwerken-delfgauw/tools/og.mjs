// public/og.jpg (1200x630): donker vlak met logo en kop in Raleway, eigen hero-foto rechts.
import { chromium } from 'playwright'; import fs from 'node:fs';
const font = fs.readFileSync('node_modules/@fontsource-variable/raleway/files/raleway-latin-wght-normal.woff2').toString('base64');
const foto = fs.readFileSync('src/assets/p/kalfjeslaan-1.jpg').toString('base64');
const logo = fs.readFileSync('src/assets/logo.png').toString('base64');
const b = await chromium.launch(); const p = await b.newPage({ viewport: { width: 1200, height: 630 } });
await p.setContent(`<style>@font-face{font-family:R;src:url(data:font/woff2;base64,${font}) format('woff2');font-weight:100 900}
body{margin:0;width:1200px;height:630px;background:#15181c;color:#f3f5f6;font-family:R;position:relative;overflow:hidden}
.f{position:absolute;right:0;top:0;width:520px;height:630px;object-fit:cover;object-position:40% 50%}
.l{position:absolute;left:72px;top:64px;width:190px}
h1{position:absolute;left:72px;bottom:150px;width:600px;margin:0;font-weight:900;font-size:72px;line-height:.98;letter-spacing:-.035em}
h1 b{color:#009fe3;font-weight:900}
p{position:absolute;left:72px;bottom:76px;margin:0;font-size:20px;font-weight:600;color:#a9b2bb}</style>
<img class=f src="data:image/jpeg;base64,${foto}"><img class=l src="data:image/png;base64,${logo}">
<h1>Specialist in <b>daken</b>, op iedere hoogte.</h1><p>Dakdekker in Delfgauw · 10 jaar garantie</p>`);
await p.waitForTimeout(300);
await p.screenshot({ path: 'public/og.jpg', type: 'jpeg', quality: 84 }); await b.close();
