// public/og.jpg (1200x630): marine vlak met woordmerk en slogan links, sfeerfoto rechts, in Quicksand.
import { chromium } from 'playwright'; import fs from 'node:fs';
const font = fs.readFileSync('node_modules/@fontsource-variable/quicksand/files/quicksand-latin-wght-normal.woff2').toString('base64');
const foto = fs.readFileSync('src/assets/hero.jpg').toString('base64');
const b = await chromium.launch(); const p = await b.newPage({ viewport: { width: 1200, height: 630 } });
await p.setContent(`<style>@font-face{font-family:Q;src:url(data:font/woff2;base64,${font}) format('woff2');font-weight:300 700}
body{margin:0;width:1200px;height:630px;background:#141b33;color:#f7f5f0;font-family:Q;position:relative;overflow:hidden}
img{position:absolute;right:0;top:0;width:500px;height:630px;object-fit:cover;object-position:62% 50%}
.m{position:absolute;left:72px;top:72px;font-weight:700;font-size:30px;letter-spacing:-.02em}.m small{display:block;font-size:14px;letter-spacing:.28em;color:#b9bfd3;margin-top:6px}
h1{position:absolute;left:72px;bottom:150px;margin:0;font-weight:700;font-size:84px;line-height:1;letter-spacing:-.04em}h1 span{color:#f39a1e}
p{position:absolute;left:72px;bottom:80px;margin:0;font-size:22px;color:#b9bfd3;font-weight:600}</style>
<img src="data:image/jpeg;base64,${foto}"><div class=m>Van Herrewaarden<small>SCHILDERWERKEN</small></div>
<h1>Sterk in<br><span>onderhoud.</span></h1><p>Schildersbedrijf in Tiel · 06 43 55 88 63</p>`);
await p.waitForTimeout(300); await p.screenshot({ path: 'public/og.jpg', type: 'jpeg', quality: 84 }); await b.close();
