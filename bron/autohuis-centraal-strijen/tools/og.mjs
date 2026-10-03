// public/og.jpg (1200x630): donker vlak met logo en kop links, eigen hero-foto rechts, in Chivo.
import { chromium } from 'playwright'; import fs from 'node:fs';
const font = fs.readFileSync('node_modules/@fontsource-variable/chivo/files/chivo-latin-wght-normal.woff2').toString('base64');
const foto = fs.readFileSync('src/assets/hero.jpg').toString('base64');
const logo = fs.readFileSync('src/assets/logo-licht.png').toString('base64');
const b = await chromium.launch(); const p = await b.newPage({ viewport: { width: 1200, height: 630 } });
await p.setContent(`<style>@font-face{font-family:C;src:url(data:font/woff2;base64,${font}) format('woff2');font-weight:100 900}
body{margin:0;width:1200px;height:630px;background:#141312;color:#f4f3f0;font-family:C;position:relative;overflow:hidden}
.f{position:absolute;right:0;top:0;width:640px;height:630px;object-fit:cover;object-position:30% 55%}
.g{position:absolute;right:0;top:0;width:640px;height:630px;background:linear-gradient(90deg,#141312 0%,#14131200 40%)}
.l{position:absolute;left:72px;top:64px;height:110px}
h1{position:absolute;left:72px;bottom:130px;width:620px;margin:0;font-weight:800;font-size:76px;line-height:.98;letter-spacing:-.04em}
h1 span{color:#d6a877}
p{position:absolute;left:72px;bottom:66px;margin:0;font-size:20px;letter-spacing:.14em;text-transform:uppercase;font-weight:700;color:#b9b4ac}</style>
<img class=f src="data:image/jpeg;base64,${foto}"><div class=g></div><img class=l src="data:image/png;base64,${logo}">
<h1>Eerlijke verkoop <span>en onderhoud.</span></h1><p>Autobedrijf in Strijen</p>`);
await p.waitForTimeout(400);
await p.screenshot({ path: 'public/og.jpg', type: 'jpeg', quality: 84 }); await b.close();
