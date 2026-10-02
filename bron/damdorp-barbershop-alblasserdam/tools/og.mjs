// public/og.jpg (1200x630): hero-foto met kop en woordmerk, in de eigen letter (Archivo) en het rood van de zaak.
import { chromium } from 'playwright'; import fs from 'node:fs';
const font = fs.readFileSync('node_modules/@fontsource-variable/archivo/files/archivo-latin-wdth-normal.woff2').toString('base64');
const foto = fs.readFileSync('src/assets/hero-tondeuse.jpg').toString('base64');
const b = await chromium.launch(); const p = await b.newPage({ viewport: { width: 1200, height: 630 } });
await p.setContent(`<style>@font-face{font-family:A;src:url(data:font/woff2;base64,${font}) format('woff2');font-weight:100 900;font-stretch:62% 125%}
body{margin:0;width:1200px;height:630px;background:#111;color:#f4f2ee;font-family:A;position:relative;overflow:hidden}
img{position:absolute;inset:0;width:100%;height:100%;object-fit:cover;object-position:70% 40%}
.s{position:absolute;inset:0;background:linear-gradient(90deg,#111111f5 0%,#111111cc 45%,#11111120 85%)}
.m{position:absolute;left:72px;top:60px}.m b{display:block;font-weight:850;font-stretch:75%;font-size:44px;letter-spacing:.01em}
.m small{font-size:13px;letter-spacing:.32em;text-transform:uppercase;font-weight:700;color:#ff6b62}
h1{position:absolute;left:72px;bottom:120px;margin:0;font-weight:800;font-stretch:78%;font-size:110px;line-height:.9;text-transform:uppercase}
h1 span{color:#ff6b62}
p{position:absolute;left:72px;bottom:60px;margin:0;font-size:18px;letter-spacing:.2em;text-transform:uppercase;font-weight:700;color:#b1ada6}</style>
<img src="data:image/jpeg;base64,${foto}"><div class=s></div><div class=m><b>DAMDORP</b><small>Barbershop</small></div>
<h1>Making people<br>look <span>good.</span></h1><p>Makado-Center 10, Alblasserdam</p>`);
await p.waitForTimeout(400);
await p.screenshot({ path: 'public/og.jpg', type: 'jpeg', quality: 82 }); await b.close();
