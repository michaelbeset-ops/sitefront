// public/og.jpg (1200x630): inkt, kop in Rufina, hun spuiterij-foto rechts.
import { chromium } from 'playwright'; import fs from 'node:fs';
const font = fs.readFileSync('node_modules/@fontsource/rufina/files/rufina-latin-400-normal.woff2').toString('base64');
const foto = fs.readFileSync('src/assets/hero.jpg').toString('base64');
const b = await chromium.launch(); const p = await b.newPage({ viewport: { width: 1200, height: 630 } });
await p.setContent(`<style>@font-face{font-family:R;src:url(data:font/woff2;base64,${font}) format('woff2')}
body{margin:0;width:1200px;height:630px;background:#13294f;color:#fff;position:relative;overflow:hidden;font-family:system-ui}
.f{position:absolute;right:0;top:0;width:800px;height:630px;object-fit:cover}
.g{position:absolute;inset:0;background:linear-gradient(90deg,#13294f 36%,#13294f00 80%)}
h1{position:absolute;left:72px;top:170px;margin:0;font:400 96px/1.02 R}
small{position:absolute;left:74px;top:128px;font:500 20px system-ui;color:#ffffffd9}
p{position:absolute;left:74px;top:440px;margin:0;font-size:24px;color:#ffffffd9}</style>
<img class=f src="data:image/jpeg;base64,${foto}"><div class=g></div><small>Interieurbouw, CNC en spuiterij in Alblasserdam</small>
<h1>Meesterwerken<br>in hout.</h1><p>Ritmeester BV</p>`);
await p.waitForTimeout(400);
await p.screenshot({ path: 'public/og.jpg', type: 'jpeg', quality: 84 }); await b.close();
