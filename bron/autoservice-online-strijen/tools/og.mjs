// public/og.jpg (1200x630): eigen werkplaatsfoto met donkere verloop, woordmerk en kop in Rethink Sans.
import { chromium } from 'playwright'; import fs from 'node:fs';
const font = fs.readFileSync('node_modules/@fontsource-variable/rethink-sans/files/rethink-sans-latin-wght-normal.woff2').toString('base64');
const foto = fs.readFileSync('src/assets/werkplaats.jpg').toString('base64');
const b = await chromium.launch(); const p = await b.newPage({ viewport: { width: 1200, height: 630 } });
await p.setContent(`<style>@font-face{font-family:R;src:url(data:font/woff2;base64,${font}) format('woff2');font-weight:100 900}
body{margin:0;width:1200px;height:630px;background:#0d1014;color:#f3f4f5;font-family:R;position:relative;overflow:hidden}
img{position:absolute;inset:0;width:1200px;height:630px;object-fit:cover;object-position:60% 45%}
.v{position:absolute;inset:0;background:linear-gradient(90deg,#0d1014f5 0%,#0d1014cc 45%,#0d101433 100%)}
.m{position:absolute;left:72px;top:64px;font-weight:800;font-size:34px;letter-spacing:-.03em}.m span{color:#6cb8f2}
.m small{display:block;font-size:17px;font-weight:600;letter-spacing:0;color:#aab2bc;margin-top:6px}
h1{position:absolute;left:72px;bottom:120px;width:720px;margin:0;font-weight:800;font-size:76px;line-height:.98;letter-spacing:-.035em}h1 span{color:#6cb8f2}
p{position:absolute;left:72px;bottom:62px;margin:0;font-size:22px;color:#c9cfd6}</style>
<img src="data:image/jpeg;base64,${foto}"><div class=v></div><div class=m>Auto<span>Service</span>-Online<small>Staat er voor.</small></div>
<h1>Uw garage in Strijen die er <span>voor staat.</span></h1><p>APK, onderhoud, airco en schadeherstel · ★ 4,8 op Google</p>`);
await p.waitForTimeout(300);
await p.screenshot({ path: 'public/og.jpg', type: 'jpeg', quality: 84 }); await b.close();
