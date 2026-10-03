// public/og.jpg (1200x630): donker vlak met woordmerk en kop links, eigen interieurfoto rechts, in de eigen letter.
import { chromium } from 'playwright'; import fs from 'node:fs';
const font = fs.readFileSync('node_modules/@fontsource-variable/anybody/files/anybody-latin-wdth-normal.woff2').toString('base64');
const foto = fs.readFileSync('src/assets/zaak.jpg').toString('base64');
const b = await chromium.launch(); const p = await b.newPage({ viewport: { width: 1200, height: 630 } });
await p.setContent(`<style>@font-face{font-family:A;src:url(data:font/woff2;base64,${font}) format('woff2');font-weight:100 900;font-stretch:50% 150%}
body{margin:0;width:1200px;height:630px;background:#141019;color:#f5f3f7;font-family:A;position:relative;overflow:hidden}
img{position:absolute;right:0;top:0;width:620px;height:630px;object-fit:cover;object-position:10% 50%}
.f{position:absolute;right:0;top:0;width:620px;height:630px;background:linear-gradient(90deg,#141019 0%,#14101900 25%)}
.m{position:absolute;left:72px;top:72px;font-weight:800;font-stretch:125%;font-size:34px;letter-spacing:-.03em}
.m small{display:block;font-size:13px;letter-spacing:.32em;color:#c7a6f7;margin-top:8px;font-family:sans-serif;font-weight:700}
h1{position:absolute;left:72px;bottom:140px;width:560px;margin:0;font-weight:800;font-size:76px;line-height:.96;letter-spacing:-.035em}
h1 span{color:#c7a6f7}
p{position:absolute;left:72px;bottom:72px;margin:0;font-family:sans-serif;font-size:18px;color:#bcb4c8}</style>
<img src="data:image/jpeg;base64,${foto}"><div class=f></div><div class=m>New Look<small>BARBER SHOP</small></div>
<h1>Loop binnen. <span>Strak</span> naar buiten.</h1><p>Barbershop in De Nieuwe Es, Sleeuwijk</p>`);
await p.waitForTimeout(300);
await p.screenshot({ path: 'public/og.jpg', type: 'jpeg', quality: 84 }); await b.close();
