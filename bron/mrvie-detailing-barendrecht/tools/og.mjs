// public/og.jpg (1200x630): zwart vlak, hero-beeld rechts met fade, kop in de eigen letter.
import { chromium } from 'playwright'; import fs from 'node:fs';
const font = fs.readFileSync('node_modules/@fontsource-variable/host-grotesk/files/host-grotesk-latin-wght-normal.woff2').toString('base64');
const foto = fs.readFileSync('src/assets/hero.jpg').toString('base64');
const logo = fs.readFileSync('src/assets/logo-wit.png').toString('base64');
const b = await chromium.launch(); const p = await b.newPage({ viewport: { width: 1200, height: 630 } });
await p.setContent(`<style>@font-face{font-family:H;src:url(data:font/woff2;base64,${font}) format('woff2');font-weight:100 900}
body{margin:0;width:1200px;height:630px;background:#0b0c0d;color:#ecebe7;font-family:H;position:relative;overflow:hidden}
.f{position:absolute;right:0;top:0;width:820px;height:630px;object-fit:cover;object-position:70% 50%;-webkit-mask-image:linear-gradient(90deg,transparent,#000 45%)}
.l{position:absolute;left:72px;top:68px;height:40px}
h1{position:absolute;left:72px;bottom:130px;width:620px;margin:0;font-weight:300;font-size:70px;line-height:1.02;letter-spacing:-.035em}
p{position:absolute;left:72px;bottom:72px;margin:0;font-size:16px;letter-spacing:.16em;text-transform:uppercase;font-weight:500;color:#9d9c98}</style>
<img class=f src="data:image/jpeg;base64,${foto}"><img class=l src="data:image/png;base64,${logo}">
<h1>Een schone auto vertelt je veel.</h1><p>Auto detailing, Barendrecht</p>`);
await p.waitForTimeout(300);
await p.screenshot({ path: 'public/og.jpg', type: 'jpeg', quality: 84 }); await b.close();
