// public/og.jpg (1200x630): asfalt met woordmerk en kop links, hun eigen pitbox-foto rechts, geblokte vlag ertussen.
import { chromium } from 'playwright'; import fs from 'node:fs';
const font = fs.readFileSync('node_modules/@fontsource/barlow-condensed/files/barlow-condensed-latin-800-italic.woff2').toString('base64');
const sans = fs.readFileSync('node_modules/@fontsource/barlow/files/barlow-latin-500-normal.woff2').toString('base64');
const foto = fs.readFileSync('src/assets/pitbox.jpg').toString('base64');
const b = await chromium.launch(); const p = await b.newPage({ viewport: { width: 1200, height: 630 } });
await p.setContent(`<style>@font-face{font-family:K;src:url(data:font/woff2;base64,${font});font-weight:800;font-style:italic}
@font-face{font-family:S;src:url(data:font/woff2;base64,${sans});font-weight:500}
body{margin:0;width:1200px;height:630px;background:#111214;color:#f3f2ee;position:relative;overflow:hidden}
img{position:absolute;right:0;top:0;width:470px;height:630px;object-fit:cover;object-position:50% 8%}
.v{position:absolute;left:714px;top:0;width:16px;height:630px;background:conic-gradient(#f3f2ee 25%,#111214 0 50%,#f3f2ee 0 75%,#111214 0) 0 0/16px 16px}
.m{position:absolute;left:72px;top:64px;font:italic 800 46px K;line-height:1}.m span{color:#ff5a4a}
h1{position:absolute;left:72px;top:200px;width:620px;margin:0;font:italic 800 112px/0.88 K;text-transform:uppercase}h1 span{color:#ff5a4a}
p{position:absolute;left:72px;bottom:64px;margin:0;font:500 22px S;color:#a9abb1}</style>
<img src="data:image/jpeg;base64,${foto}"><div class=v></div><div class=m>PIT<span>STOP</span></div>
<h1>Uw auto weer als <span>nieuw.</span></h1><p>Autopoetsbedrijf, Edisonweg 3, Gorinchem</p>`);
await p.waitForTimeout(300);
await p.screenshot({ path: 'public/og.jpg', type: 'jpeg', quality: 84 }); await b.close();
