// public/og.jpg (1200x630): woordmerk + kop links op gebroken wit, eigen zolderfoto rechts, in Merriweather Sans.
import { chromium } from 'playwright'; import fs from 'node:fs';
const font = fs.readFileSync('node_modules/@fontsource-variable/merriweather-sans/files/merriweather-sans-latin-wght-normal.woff2').toString('base64');
const foto = fs.readFileSync('src/assets/hero-dakramen-kast.jpg').toString('base64');
const b = await chromium.launch(); const p = await b.newPage({ viewport: { width: 1200, height: 630 } });
await p.setContent(`<style>@font-face{font-family:M;src:url(data:font/woff2;base64,${font}) format('woff2');font-weight:300 800}
body{margin:0;width:1200px;height:630px;background:#f5f3ef;color:#151515;font-family:M;position:relative;overflow:hidden}
img{position:absolute;right:0;top:0;width:500px;height:630px;object-fit:cover;object-position:35% 50%}
.m{position:absolute;left:72px;top:68px;display:grid;grid-template-columns:auto auto;column-gap:10px}
.h{grid-row:1/3;width:20px;border-top:12px solid #151515;border-left:12px solid #151515}
.n{font-weight:800;font-size:44px;letter-spacing:-.035em;color:#e3001b;line-height:1}.n small{font-size:.62em}
.s{font-size:13px;font-weight:700;letter-spacing:.5em;margin-top:6px}
h1{position:absolute;left:72px;bottom:150px;width:600px;margin:0;font-weight:800;font-size:66px;line-height:1.02;letter-spacing:-.035em;word-spacing:.06em}
h1 span{color:#e3001b}
p{position:absolute;left:72px;bottom:72px;margin:0;font-size:20px;font-weight:600;color:#5b5852}</style>
<img src="data:image/jpeg;base64,${foto}"><div class=m><span class=h></span><span class=n><small>van</small>LEEUWEN</span><span class=s>TIMMERWERKEN</span></div>
<h1>Meer ruimte onder uw <span>eigen dak.</span></h1><p>Zolders, dakramen en dakkapellen · Boskoop en de Randstad</p>`);
await p.waitForTimeout(300);
await p.screenshot({ path: 'public/og.jpg', type: 'jpeg', quality: 84 }); await b.close();
