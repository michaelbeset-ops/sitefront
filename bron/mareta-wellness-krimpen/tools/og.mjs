// public/og.jpg (1200x630): eigen hero-foto met donkere overlay, woordmerk en kop in Epilogue.
import { chromium } from 'playwright'; import fs from 'node:fs';
const font = fs.readFileSync('node_modules/@fontsource-variable/epilogue/files/epilogue-latin-wght-normal.woff2').toString('base64');
const foto = fs.readFileSync('src/assets/schouders.jpg').toString('base64');
const b = await chromium.launch(); const p = await b.newPage({ viewport: { width: 1200, height: 630 } });
await p.setContent(`<style>@font-face{font-family:E;src:url(data:font/woff2;base64,${font}) format('woff2');font-weight:100 900}
body{margin:0;width:1200px;height:630px;background:#22141d;color:#f7f6f4;font-family:E;position:relative;overflow:hidden}
img{position:absolute;inset:0;width:100%;height:100%;object-fit:cover;object-position:70% 45%}
.o{position:absolute;inset:0;background:linear-gradient(90deg,#22141df7 0%,#22141dd9 45%,#22141d40 100%)}
.m{position:absolute;left:72px;top:64px;font-weight:800;font-size:34px;letter-spacing:-.04em}
h1{position:absolute;left:72px;bottom:130px;width:700px;margin:0;font-weight:800;font-size:76px;line-height:.98;letter-spacing:-.045em}
h1 span{color:#e3bdd8} p{position:absolute;left:72px;bottom:66px;margin:0;font-size:22px;font-weight:500;color:#c7b9c3}</style>
<img src="data:image/jpeg;base64,${foto}"><div class=o></div><div class=m>Mareta Wellness</div>
<h1>Massage door een <span>docent</span> in het vak.</h1><p>Massagepraktijk in Krimpen aan den IJssel</p>`);
await p.waitForTimeout(300);
await p.screenshot({ path: 'public/og.jpg', type: 'jpeg', quality: 84 }); await b.close();
