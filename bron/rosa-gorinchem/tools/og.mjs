// public/og.jpg (1200x630): donker vlak met camee en kop in Young Serif, eigen etalagefoto rechts.
import { chromium } from 'playwright'; import fs from 'node:fs';
const font = fs.readFileSync('node_modules/@fontsource/young-serif/files/young-serif-latin-400-normal.woff2').toString('base64');
const foto = fs.readFileSync('src/assets/etalage-turquoise.jpg').toString('base64');
const engel = fs.readFileSync('src/assets/engel.png').toString('base64');
const b = await chromium.launch(); const p = await b.newPage({ viewport: { width: 1200, height: 630 } });
await p.setContent(`<style>@font-face{font-family:Y;src:url(data:font/woff2;base64,${font}) format('woff2')}
body{margin:0;width:1200px;height:630px;background:#1d1a22;color:#f7f5f1;font-family:Y;position:relative;overflow:hidden}
.f{position:absolute;right:0;top:0;width:500px;height:630px;object-fit:cover;object-position:50% 40%}
.c{position:absolute;left:72px;top:60px;width:120px;height:96px;border-radius:50%;background:#f7f5f1;display:grid;place-items:center;box-shadow:0 0 0 4px #1d1a22,0 0 0 5.5px #7fd3cc}
.c img{width:100px;mix-blend-mode:multiply}
h1{position:absolute;left:72px;bottom:118px;width:600px;margin:0;font-weight:400;font-size:74px;line-height:1.02;letter-spacing:-.025em}
h1 span{color:#7fd3cc}
p{position:absolute;left:72px;bottom:60px;margin:0;font:600 20px system-ui;color:#c3bec8}</style>
<img class=f src="data:image/jpeg;base64,${foto}"><div class=c><img src="data:image/png;base64,${engel}"></div>
<h1>Unieke kleding in de mooiste <span>kleuren</span></h1><p>Rosa · Burgstraat 10, Gorinchem</p>`);
await p.waitForTimeout(300);
await p.screenshot({ path: 'public/og.jpg', type: 'jpeg', quality: 84 }); await b.close();
