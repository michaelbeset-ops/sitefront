// public/og.jpg (1200x630): petrol vlak met logo-icoon, kop in Gantari, eigen hero-foto rechts.
import { chromium } from 'playwright'; import fs from 'node:fs';
const font = fs.readFileSync('node_modules/@fontsource-variable/gantari/files/gantari-latin-wght-normal.woff2').toString('base64');
const foto = fs.readFileSync('src/assets/hero.jpg').toString('base64');
const ico = fs.readFileSync('src/assets/logo-icoon-wit.png').toString('base64');
const b = await chromium.launch(); const p = await b.newPage({ viewport: { width: 1200, height: 630 } });
await p.setContent(`<style>@font-face{font-family:G;src:url(data:font/woff2;base64,${font}) format('woff2');font-weight:100 900}
body{margin:0;width:1200px;height:630px;background:#0f2129;color:#f5f3ef;font-family:G;position:relative;overflow:hidden}
img.f{position:absolute;right:0;top:0;width:500px;height:630px;object-fit:cover;object-position:70% 50%}
.m{position:absolute;left:72px;top:64px;display:flex;align-items:center;gap:16px}.m img{width:64px}
.m b{font-weight:800;font-size:40px;letter-spacing:-.01em}.m b span{color:#ff6a5c}
h1{position:absolute;left:72px;bottom:150px;width:600px;margin:0;font-weight:800;font-size:66px;line-height:1;letter-spacing:-.03em}
h1 span{color:#ff6a5c}.bar{position:absolute;left:0;bottom:0;width:700px;height:10px;background:#d41217}
p{position:absolute;left:72px;bottom:72px;margin:0;font-size:20px;letter-spacing:.14em;text-transform:uppercase;font-weight:700;color:#b4c0c4}</style>
<img class=f src="data:image/jpeg;base64,${foto}"><div class=m><img src="data:image/png;base64,${ico}"><b>PER<span>FIXT</span></b></div>
<h1>Het aannemersbedrijf waar u op kunt <span>bouwen.</span></h1><p>Aannemer in Made · NL en België</p><div class=bar></div>`);
await p.waitForTimeout(300);
await p.screenshot({ path: 'public/og.jpg', type: 'jpeg', quality: 84 }); await b.close();
