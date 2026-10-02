// public/og.jpg (1200x630): sleutelbeeld volle breedte, donkere verloop links, woordmerk + kop in Mona Sans.
import { chromium } from 'playwright'; import fs from 'node:fs'; import sharp from 'sharp';
const font = fs.readFileSync('node_modules/@fontsource-variable/mona-sans/files/mona-sans-latin-wdth-normal.woff2').toString('base64');
const foto = (await sharp('src/assets/sleutels-hero.jpg').resize(1400).jpeg({ quality: 80 }).toBuffer()).toString('base64');
const b = await chromium.launch(); const p = await b.newPage({ viewport: { width: 1200, height: 630 } });
await p.setContent(`<style>@font-face{font-family:M;src:url(data:font/woff2;base64,${font}) format('woff2');font-weight:200 900;font-stretch:75% 125%}
body{margin:0;width:1200px;height:630px;background:#0c1013;color:#eef0ee;font-family:M;position:relative;overflow:hidden}
img{position:absolute;inset:0;width:100%;height:100%;object-fit:cover;object-position:62% 50%}
.g{position:absolute;inset:0;background:linear-gradient(90deg,#0c1013f5 0%,#0c1013d9 42%,#0c101355 75%,#0c101322 100%)}
.m{position:absolute;left:72px;top:64px;display:flex;align-items:center;gap:18px}
.m b{font-weight:700;font-stretch:125%;letter-spacing:.04em;font-size:44px;line-height:1}
.m small{font-size:13px;line-height:1.35;letter-spacing:.2em;text-transform:uppercase;font-weight:500;padding-left:18px;border-left:1px solid #eef0ee}
h1{position:absolute;left:72px;bottom:120px;width:760px;margin:0;font-weight:500;font-stretch:112%;font-size:64px;line-height:1.02;letter-spacing:-.035em}
h1 span{display:block;color:#a3abb1}
p{position:absolute;left:72px;bottom:64px;margin:0;font-size:16px;letter-spacing:.16em;text-transform:uppercase;font-weight:500;color:#a3abb1}</style>
<img src="data:image/jpeg;base64,${foto}"><div class=g></div><div class=m><b>ROB</b><small>Schoenen<br>Sleutels<br>Stomerij</small></div>
<h1>Schoenen, sleutels en stomerij.<span>Bij Rob in Makado.</span></h1><p>Makado Winkelcentrum, Alblasserdam</p>`);
await p.waitForTimeout(400);
await p.screenshot({ path: 'public/og.jpg', type: 'jpeg', quality: 82 }); await b.close();
