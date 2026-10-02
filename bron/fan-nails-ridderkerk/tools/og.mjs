// public/og.jpg (1200x630): poedervlak met woordmerk en kop links, eigen hero-foto rechts, in de eigen letter.
import { chromium } from 'playwright'; import fs from 'node:fs';
const font = fs.readFileSync('node_modules/@fontsource-variable/urbanist/files/urbanist-latin-wght-normal.woff2').toString('base64');
const foto = fs.readFileSync('src/assets/hero.jpg').toString('base64');
const b = await chromium.launch(); const p = await b.newPage({ viewport: { width: 1200, height: 630 } });
await p.setContent(`<style>@font-face{font-family:U;src:url(data:font/woff2;base64,${font}) format('woff2');font-weight:100 900}
body{margin:0;width:1200px;height:630px;background:#ebe1e2;color:#1b1819;font-family:U;position:relative;overflow:hidden}
img{position:absolute;right:0;top:0;width:470px;height:630px;object-fit:cover;object-position:50% 58%}
.m{position:absolute;left:72px;top:72px;display:flex;align-items:baseline;gap:16px}
.m b{font-weight:400;font-size:30px;letter-spacing:.42em;line-height:1}
.m small{font-size:15px;letter-spacing:.3em;text-transform:uppercase;font-weight:600;color:#8a5d69}
h1{position:absolute;left:72px;bottom:150px;width:600px;margin:0;font-weight:300;font-size:68px;line-height:1;letter-spacing:-.035em}
p{position:absolute;left:72px;bottom:72px;margin:0;font-size:17px;letter-spacing:.16em;text-transform:uppercase;font-weight:500;color:#645b5e}</style>
<img src="data:image/jpeg;base64,${foto}"><div class=m><b>FAN NAILS</b><small>studio</small></div>
<h1>Nagels precies<br>zoals jij ze wilt.</h1><p>Nagelstudio in De Ridderhof, Ridderkerk</p>`);
await p.waitForTimeout(300);
await p.screenshot({ path: 'public/og.jpg', type: 'jpeg', quality: 84 }); await b.close();
