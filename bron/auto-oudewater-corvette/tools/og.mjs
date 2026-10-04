// public/og.jpg (1200x630): eigen showroomfoto met donkere overlay, kop in Bebas Neue, geel accent.
import { chromium } from 'playwright'; import fs from 'node:fs';
const font = fs.readFileSync('node_modules/@fontsource/bebas-neue/files/bebas-neue-latin-400-normal.woff2').toString('base64');
const foto = fs.readFileSync('src/assets/showroom.jpg').toString('base64');
const b = await chromium.launch(); const p = await b.newPage({ viewport: { width: 1200, height: 630 } });
await p.setContent(`<style>@font-face{font-family:B;src:url(data:font/woff2;base64,${font}) format('woff2')}
body{margin:0;width:1200px;height:630px;background:#111214;color:#f3f1ec;font-family:B;position:relative;overflow:hidden}
img{position:absolute;inset:0;width:100%;height:100%;object-fit:cover;object-position:60% 60%}
.o{position:absolute;inset:0;background:linear-gradient(90deg,#111214f2 0%,#111214c0 45%,#11121420 100%)}
.m{position:absolute;left:72px;top:64px;font-size:40px;letter-spacing:.03em}.m i{display:inline-block;width:13px;height:5px;background:#f5c400;vertical-align:13px;margin:0 3px}
h1{position:absolute;left:72px;bottom:120px;margin:0;font-weight:400;font-size:112px;line-height:.88}
h1 span{color:#f5c400}p{position:absolute;left:72px;bottom:62px;margin:0;font:600 19px system-ui;letter-spacing:.18em;text-transform:uppercase}</style>
<img src="data:image/jpeg;base64,${foto}"><div class=o></div><div class=m>AUTO<i></i>OUDEWATER</div>
<h1>ALLES VOOR UW<br><span>CORVETTE.</span></h1><p>Corvette-specialist in Oudewater</p>`);
await p.waitForTimeout(400);
await p.screenshot({ path: 'public/og.jpg', type: 'jpeg', quality: 84 }); await b.close();
