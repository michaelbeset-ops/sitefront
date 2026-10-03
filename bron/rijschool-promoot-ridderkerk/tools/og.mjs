// public/og.jpg (1200x630): nacht-vlak met woordmerk en kop links, eigen lesfoto rechts, in Outfit.
import { chromium } from 'playwright'; import fs from 'node:fs';
const font = fs.readFileSync('node_modules/@fontsource-variable/outfit/files/outfit-latin-wght-normal.woff2').toString('base64');
const foto = fs.readFileSync('src/assets/motor-les.jpg').toString('base64');
const b = await chromium.launch(); const p = await b.newPage({ viewport: { width: 1200, height: 630 } });
await p.setContent(`<style>@font-face{font-family:O;src:url(data:font/woff2;base64,${font}) format('woff2');font-weight:100 900}
body{margin:0;width:1200px;height:630px;background:#111317;color:#f6f5f0;font-family:O;position:relative;overflow:hidden}
img{position:absolute;right:0;top:0;width:520px;height:630px;object-fit:cover;object-position:50% 55%}
.m{position:absolute;left:72px;top:72px;background:#ffd43b;color:#111317;font-weight:900;font-size:40px;padding:8px 18px;border-radius:10px;letter-spacing:.01em}
.m i{font-style:normal;color:#0a72b0}
h1{position:absolute;left:72px;bottom:150px;width:560px;margin:0;font-weight:800;font-size:76px;line-height:.98;letter-spacing:-.035em}
h1 span{color:#ffd43b}
p{position:absolute;left:72px;bottom:72px;margin:0;font-size:24px;font-weight:500;color:#b8bdc6}</style>
<img src="data:image/jpeg;base64,${foto}"><div class=m>PR<i>O</i>MOOT</div>
<h1>Je scooterrijbewijs in <span>één dag.</span></h1><p>Rijschool in Ridderkerk · 4,9 op Google</p>`);
await p.waitForTimeout(300);
await p.screenshot({ path: 'public/og.jpg', type: 'jpeg', quality: 84 }); await b.close();
