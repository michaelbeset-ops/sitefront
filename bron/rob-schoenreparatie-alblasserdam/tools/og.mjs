// public/og.jpg (1200x630): werkbank volle breedte, donker verloop links, woordmerk + kop in Archivo.
import { chromium } from 'playwright'; import fs from 'node:fs'; import sharp from 'sharp';
const font = fs.readFileSync('node_modules/@fontsource-variable/archivo/files/archivo-latin-wdth-normal.woff2').toString('base64');
const foto = (await sharp('src/assets/werkbank.jpg').resize(1400).jpeg({ quality: 80 }).toBuffer()).toString('base64');
const b = await chromium.launch(); const p = await b.newPage({ viewport: { width: 1200, height: 630 } });
await p.setContent(`<style>@font-face{font-family:A;src:url(data:font/woff2;base64,${font}) format('woff2');font-weight:100 900;font-stretch:62% 125%}
body{margin:0;width:1200px;height:630px;background:#1a1612;color:#f5f1ea;font-family:A;position:relative;overflow:hidden}
img{position:absolute;inset:0;width:100%;height:100%;object-fit:cover;object-position:60% 40%}
.g{position:absolute;inset:0;background:linear-gradient(90deg,#1a1612f7 0%,#1a1612dd 45%,#1a161260 100%)}
.m{position:absolute;left:72px;top:64px;display:flex;align-items:center;gap:16px}
.m b{background:#9a4a1c;color:#fff;border-radius:6px;padding:10px 14px;font-weight:800;font-stretch:125%;font-size:34px;line-height:1}
.m small{font-size:14px;line-height:1.4;letter-spacing:.16em;text-transform:uppercase;font-weight:700}.m small i{font-style:normal;color:#f0a96a;display:block}
h1{position:absolute;left:72px;bottom:118px;width:800px;margin:0;font-weight:800;font-stretch:115%;font-size:84px;line-height:.98;letter-spacing:-.04em}
h1 span{color:#f0a96a}
p{position:absolute;left:72px;bottom:64px;margin:0;font-size:18px;letter-spacing:.14em;text-transform:uppercase;font-weight:700;color:#c9bdb0}</style>
<img src="data:image/jpeg;base64,${foto}"><div class=g></div><div class=m><b>ROB</b><small>Schoenreparatie<i>Sleutels &amp; stomerij</i></small></div>
<h1>Schoenen weer <span>als nieuw.</span></h1><p>Makado Winkelcentrum, Alblasserdam</p>`);
await p.waitForTimeout(400);
await p.screenshot({ path: 'public/og.jpg', type: 'jpeg', quality: 82 }); await b.close();
