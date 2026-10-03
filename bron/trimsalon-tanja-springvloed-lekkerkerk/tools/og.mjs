// public/og.jpg (1200x630): grafiet vlak met woordmerk en kop links, eigen hero-foto rechts.
import { chromium } from 'playwright'; import fs from 'node:fs';
const f8 = fs.readFileSync('node_modules/@fontsource/be-vietnam-pro/files/be-vietnam-pro-latin-800-normal.woff2').toString('base64');
const f5 = fs.readFileSync('node_modules/@fontsource/be-vietnam-pro/files/be-vietnam-pro-latin-500-normal.woff2').toString('base64');
const foto = fs.readFileSync('src/assets/hero.jpg').toString('base64');
const b = await chromium.launch(); const p = await b.newPage({ viewport: { width: 1200, height: 630 } });
await p.setContent(`<style>@font-face{font-family:V;src:url(data:font/woff2;base64,${f8}) format('woff2');font-weight:800}
@font-face{font-family:V;src:url(data:font/woff2;base64,${f5}) format('woff2');font-weight:500}
body{margin:0;width:1200px;height:630px;background:#1c2023;color:#f2f1ec;font-family:V;position:relative;overflow:hidden}
img{position:absolute;right:0;top:0;width:560px;height:630px;object-fit:cover;object-position:62% 40%}
.fade{position:absolute;right:420px;top:0;width:140px;height:630px;background:linear-gradient(90deg,#1c2023,#1c202300)}
.m{position:absolute;left:72px;top:68px}.m b{display:block;font-weight:800;font-size:34px;letter-spacing:-.04em;color:#ff9a5c}
.m small{display:block;margin-top:8px;font-weight:500;font-size:14px;letter-spacing:.3em;color:#a9b0b5}
h1{position:absolute;left:72px;bottom:140px;width:580px;margin:0;font-weight:800;font-size:66px;line-height:1;letter-spacing:-.045em}
h1 span{color:#ff9a5c}
p{position:absolute;left:72px;bottom:68px;margin:0;font-size:19px;font-weight:500;color:#a9b0b5}</style>
<img src="data:image/jpeg;base64,${foto}"><div class=fade></div><div class=m><b>Tanja Springvloed</b><small>HONDENTRIMSALON</small></div>
<h1>De trimsalon met net dat <span>beetje meer.</span></h1><p>Julianastraat 30, Lekkerkerk</p>`);
await p.waitForTimeout(300);
await p.screenshot({ path: 'public/og.jpg', type: 'jpeg', quality: 82 }); await b.close();
