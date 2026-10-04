// public/og.jpg (1200x630): inktblauw vlak met kop links, eigen projectfoto rechts, in de eigen letter.
import { chromium } from 'playwright'; import fs from 'node:fs';
const font = fs.readFileSync('node_modules/@fontsource-variable/josefin-sans/files/josefin-sans-latin-wght-normal.woff2').toString('base64');
const foto = fs.readFileSync('src/assets/hero.jpg').toString('base64');
const b = await chromium.launch(); const p = await b.newPage({ viewport: { width: 1200, height: 630 } });
await p.setContent(`<style>@font-face{font-family:J;src:url(data:font/woff2;base64,${font}) format('woff2');font-weight:100 900}
body{margin:0;width:1200px;height:630px;background:#0e1b29;color:#f5f3ee;font-family:J;position:relative;overflow:hidden}
img{position:absolute;right:0;top:0;width:520px;height:630px;object-fit:cover;object-position:45% 60%}
.m{position:absolute;left:72px;top:72px;font-weight:700;font-size:34px;letter-spacing:-.01em}.m span{color:#93c5ee}
h1{position:absolute;left:72px;bottom:150px;width:560px;margin:0;font-weight:700;font-size:64px;line-height:1;letter-spacing:-.025em}
h1 span{color:#93c5ee}
p{position:absolute;left:72px;bottom:80px;margin:0;font-size:19px;letter-spacing:.18em;text-transform:uppercase;font-weight:700;color:#b6c1cd}</style>
<img src="data:image/jpeg;base64,${foto}"><div class=m>Color <span>Onderhoud</span></div>
<h1>Strak schilderwerk dat <span>jaren meegaat.</span></h1><p>Schildersbedrijf in Etten-Leur</p>`);
await p.waitForTimeout(300);
await p.screenshot({ path: 'public/og.jpg', type: 'jpeg', quality: 84 }); await b.close();
