// public/og.jpg (1200x630): groen-zwart vlak met woordmerk en kop links, eigen avondtuin rechts, in Nunito Sans 900.
import { chromium } from 'playwright'; import fs from 'node:fs';
const font = fs.readFileSync('node_modules/@fontsource-variable/nunito-sans/files/nunito-sans-latin-wght-normal.woff2').toString('base64');
const foto = fs.readFileSync('src/assets/hero.jpg').toString('base64');
const b = await chromium.launch(); const p = await b.newPage({ viewport: { width: 1200, height: 630 } });
await p.setContent(`<style>@font-face{font-family:N;src:url(data:font/woff2;base64,${font}) format('woff2');font-weight:200 1000}
body{margin:0;width:1200px;height:630px;background:#13201a;color:#f6f3ec;font-family:N;position:relative;overflow:hidden}
img{position:absolute;right:0;top:0;width:520px;height:630px;object-fit:cover;object-position:60% 55%}
.m{position:absolute;left:72px;top:68px;line-height:1}.m b{display:block;font-weight:900;font-size:34px;letter-spacing:-.03em}
.m small{display:block;margin-top:6px;font-size:15px;letter-spacing:.3em;text-transform:uppercase;font-weight:800;color:#d1a242}
h1{position:absolute;left:72px;bottom:140px;width:560px;margin:0;font-weight:900;font-size:76px;line-height:.95;letter-spacing:-.045em}h1 span{color:#d1a242}
p{position:absolute;left:72px;bottom:72px;margin:0;font-size:18px;letter-spacing:.18em;text-transform:uppercase;font-weight:800;color:#b5c0b9}</style>
<img src="data:image/jpeg;base64,${foto}"><div class=m><b>Tom Korbee</b><small>Hoveniers</small></div>
<h1>Jarenlang genieten van <span>uw tuin.</span></h1><p>Hovenier in Nieuwerkerk a/d IJssel</p>`);
await p.waitForTimeout(300);
await p.screenshot({ path: 'public/og.jpg', type: 'jpeg', quality: 84 }); await b.close();
