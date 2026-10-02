// public/og.jpg (1200x630): Vie aan het polijsten rechts, kop in Schibsted Grotesk met groen accent.
import { chromium } from 'playwright'; import fs from 'node:fs';
const font = fs.readFileSync('node_modules/@fontsource-variable/schibsted-grotesk/files/schibsted-grotesk-latin-wght-normal.woff2').toString('base64');
const foto = fs.readFileSync('src/assets/vie.jpg').toString('base64');
const logo = fs.readFileSync('src/assets/logo-wit.png').toString('base64');
const b = await chromium.launch(); const p = await b.newPage({ viewport: { width: 1200, height: 630 } });
await p.setContent(`<style>@font-face{font-family:H;src:url(data:font/woff2;base64,${font}) format('woff2');font-weight:100 900}
body{margin:0;width:1200px;height:630px;background:#0d0e0c;color:#f5f4ef;font-family:H;position:relative;overflow:hidden}
.f{position:absolute;right:0;top:0;width:840px;height:630px;object-fit:cover;object-position:44% 40%;-webkit-mask-image:linear-gradient(90deg,transparent,#000 50%)}
.l{position:absolute;left:72px;top:68px;height:40px}
h1{position:absolute;left:72px;bottom:130px;width:640px;margin:0;font-weight:800;font-size:76px;line-height:.95;letter-spacing:-.045em}
h1 span{color:#c6f04a}
p{position:absolute;left:72px;bottom:72px;margin:0;font-size:17px;letter-spacing:.16em;text-transform:uppercase;font-weight:700;color:#c6f04a}</style>
<img class=f src="data:image/jpeg;base64,${foto}"><img class=l src="data:image/png;base64,${logo}">
<h1>Een schone auto vertelt je <span>veel.</span></h1><p>Auto detailing in Barendrecht</p>`);
await p.waitForTimeout(300);
await p.screenshot({ path: 'public/og.jpg', type: 'jpeg', quality: 84 }); await b.close();
