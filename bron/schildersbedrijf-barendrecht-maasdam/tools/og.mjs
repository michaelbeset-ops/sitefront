// public/og.jpg (1200x630): nachtblauw vlak met woordmerk en kop links, eigen hero-foto rechts, in Jost.
import { chromium } from 'playwright'; import fs from 'node:fs';
const font = fs.readFileSync('node_modules/@fontsource-variable/jost/files/jost-latin-wght-normal.woff2').toString('base64');
const foto = fs.readFileSync('src/assets/hero.jpg').toString('base64');
const b = await chromium.launch(); const p = await b.newPage({ viewport: { width: 1200, height: 630 } });
await p.setContent(`<style>@font-face{font-family:J;src:url(data:font/woff2;base64,${font}) format('woff2');font-weight:100 900}
body{margin:0;width:1200px;height:630px;background:#0b1830;color:#f6f4ef;font-family:J;position:relative;overflow:hidden}
img{position:absolute;right:0;top:0;width:520px;height:630px;object-fit:cover;object-position:62% 50%}
.m{position:absolute;left:72px;top:68px}.m small{display:block;font-size:15px;letter-spacing:.3em;font-weight:500;color:#b7c1d3}
.m b{display:block;margin-top:6px;font-size:34px;letter-spacing:.02em;font-weight:700}
h1{position:absolute;left:72px;bottom:150px;width:560px;margin:0;font-weight:700;font-size:64px;line-height:1.02;letter-spacing:-.02em}
h1 span{box-shadow:inset 0 -14px 0 #2f6fd8}
p{position:absolute;left:72px;bottom:72px;margin:0;font-size:19px;letter-spacing:.14em;text-transform:uppercase;font-weight:500;color:#9ec2ff}</style>
<img src="data:image/jpeg;base64,${foto}"><div class=m><small>SCHILDERSBEDRIJF</small><b>BARENDRECHT</b></div>
<h1>Schilderwerk waar u <span>jaren</span> plezier van hebt.</h1><p>Maasdam · Hoeksche Waard · Barendrecht</p>`);
await p.waitForTimeout(300);
await p.screenshot({ path: 'public/og.jpg', type: 'jpeg', quality: 84 }); await b.close();
