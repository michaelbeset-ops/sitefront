// public/og.jpg (1200x630): asfaltbeeld met woordmerk en kop, in de eigen letter.
import { chromium } from 'playwright'; import fs from 'node:fs';
const font = fs.readFileSync('node_modules/@fontsource-variable/host-grotesk/files/host-grotesk-latin-wght-normal.woff2').toString('base64');
const foto = fs.readFileSync('src/assets/asfalt.jpg').toString('base64');
const b = await chromium.launch(); const p = await b.newPage({ viewport: { width: 1200, height: 630 } });
await p.setContent(`<style>@font-face{font-family:H;src:url(data:font/woff2;base64,${font}) format('woff2');font-weight:100 900}
body{margin:0;width:1200px;height:630px;background:#1c1d1f;color:#f2f2f0;font-family:H;position:relative;overflow:hidden}
img{position:absolute;inset:0;width:100%;height:100%;object-fit:cover;object-position:50% 100%}
.g{position:absolute;inset:0;background:linear-gradient(180deg,#1c1d1f99 0%,#1c1d1f1a 25%,#1c1d1f1a 45%,#1c1d1fe6 100%)}
.m{position:absolute;left:72px;top:64px;font-size:30px;font-weight:300;letter-spacing:.34em;line-height:1}
.m i{font-style:normal;position:relative;z-index:0}.m i:before{content:'';position:absolute;z-index:-1;left:-.17em;right:.2em;top:-.16em;bottom:-.16em;background:#1e94f7;transform:rotate(-9deg)}
h1{position:absolute;left:72px;bottom:118px;margin:0;font-weight:350;font-size:76px;line-height:1.02;letter-spacing:-.035em}
p{position:absolute;left:72px;bottom:64px;margin:0;font-size:16px;letter-spacing:.16em;text-transform:uppercase;font-weight:500;color:#c9cacc}</style>
<img src="data:image/jpeg;base64,${foto}"><div class=g></div><div class=m>H<i>E</i>RMAN</div>
<h1>Niet meer lessen<br>dan nodig.</h1><p>Auto- en motorrijles, Ridderkerk</p>`);
await p.waitForTimeout(300);
await p.screenshot({ path: 'public/og.jpg', type: 'jpeg', quality: 84 }); await b.close();
