// public/og.jpg (1200x630): woordmerk en kop op nachtblauw, eigen foto rechts, in de eigen letter.
import { chromium } from 'playwright'; import fs from 'node:fs';
const font = fs.readFileSync('node_modules/@fontsource-variable/plus-jakarta-sans/files/plus-jakarta-sans-latin-wght-normal.woff2').toString('base64');
const foto = fs.readFileSync('src/assets/taper.jpg').toString('base64');
const b = await chromium.launch(); const p = await b.newPage({ viewport: { width: 1200, height: 630 } });
await p.setContent(`<style>@font-face{font-family:J;src:url(data:font/woff2;base64,${font}) format('woff2');font-weight:200 800}
body{margin:0;width:1200px;height:630px;background:#0e121b;color:#f5f4f1;font-family:J;position:relative;overflow:hidden;word-spacing:.04em}
img{position:absolute;right:0;top:0;width:470px;height:630px;object-fit:cover;object-position:50% 72%}
.m{position:absolute;left:72px;top:72px;display:flex;flex-direction:column}
.m b{font-weight:500;font-size:38px;letter-spacing:.42em;line-height:1}
.m small{font-size:14px;letter-spacing:.26em;text-transform:uppercase;margin-top:12px;font-weight:500;color:#a4a8b1}
h1{position:absolute;left:72px;bottom:140px;width:600px;margin:0;font-weight:300;font-size:58px;line-height:1.06;letter-spacing:-.026em}
p{position:absolute;left:72px;bottom:72px;margin:0;font-size:16px;letter-spacing:.16em;text-transform:uppercase;font-weight:500;color:#d8a676}</style>
<img src="data:image/jpeg;base64,${foto}"><div class=m><b>MASO</b><small>Hair salon &amp; barbershop</small></div>
<h1>Kapper en barbier aan het Dillenburgplein.</h1><p>Ridderkerk, zonder afspraak</p>`);
await p.waitForTimeout(300);
await p.screenshot({ path: 'public/og.jpg', type: 'jpeg', quality: 84 }); await b.close();
