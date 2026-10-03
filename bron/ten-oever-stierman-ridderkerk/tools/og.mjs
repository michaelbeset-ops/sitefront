// public/og.jpg (1200x630): nachtblauw vlak met woordmerk en kop links, eigen foto (kraan) rechts, in Montserrat.
import { chromium } from 'playwright'; import fs from 'node:fs';
const font = fs.readFileSync('node_modules/@fontsource-variable/montserrat/files/montserrat-latin-wght-normal.woff2').toString('base64');
const foto = fs.readFileSync('src/assets/kraan.jpg').toString('base64');
const b = await chromium.launch(); const p = await b.newPage({ viewport: { width: 1200, height: 630 } });
await p.setContent(`<style>@font-face{font-family:M;src:url(data:font/woff2;base64,${font}) format('woff2');font-weight:100 900}
body{margin:0;width:1200px;height:630px;background:#0c1220;color:#f6f5f2;font-family:M;position:relative;overflow:hidden}
img{position:absolute;right:0;top:0;width:520px;height:630px;object-fit:cover;object-position:40% 60%}
.m{position:absolute;left:72px;top:68px;font-weight:800;font-size:28px;letter-spacing:-.02em}.m small{display:block;margin-top:8px;font-size:13px;letter-spacing:.24em;font-weight:600;color:#b4bccb;text-transform:uppercase}
h1{position:absolute;left:72px;bottom:150px;width:560px;margin:0;font-weight:800;font-size:66px;line-height:1;letter-spacing:-.045em}h1 span{color:#9db8ff}
p{position:absolute;left:72px;bottom:72px;margin:0;font-size:17px;letter-spacing:.14em;text-transform:uppercase;font-weight:700;color:#9db8ff}
i{position:absolute;left:0;top:0;width:12px;height:630px;background:#0033a0}</style>
<i></i><img src="data:image/jpeg;base64,${foto}"><div class=m>Ten Oever &amp; Stierman<small>Straatmakersbedrijf</small></div>
<h1>Ambachtelijk en <span>machinaal</span> bestraat.</h1><p>Ridderkerk, sinds 1999</p>`);
await p.waitForTimeout(300);
await p.screenshot({ path: 'public/og.jpg', type: 'jpeg', quality: 84 }); await b.close();
