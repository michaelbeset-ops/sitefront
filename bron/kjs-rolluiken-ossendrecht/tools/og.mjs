// public/og.jpg (1200x630): eigen hero-foto met donkere overloop, kop in Geologica.
import { chromium } from 'playwright'; import fs from 'node:fs';
const font = fs.readFileSync('node_modules/@fontsource-variable/geologica/files/geologica-latin-wght-normal.woff2').toString('base64');
const foto = fs.readFileSync('src/assets/hero.jpg').toString('base64');
const b = await chromium.launch(); const p = await b.newPage({ viewport: { width: 1200, height: 630 } });
await p.setContent(`<style>@font-face{font-family:G;src:url(data:font/woff2;base64,${font}) format('woff2');font-weight:100 900}
body{margin:0;width:1200px;height:630px;position:relative;overflow:hidden;font-family:G;color:#f3f4f0;background:#15181b}
img{position:absolute;inset:0;width:100%;height:100%;object-fit:cover;object-position:40% 50%}
.o{position:absolute;inset:0;background:linear-gradient(100deg,#15181bf2 0%,#15181bc0 45%,#15181b10 80%)}
.m{position:absolute;left:72px;top:64px;font-weight:800;font-size:44px;letter-spacing:-.03em}
.m small{display:block;font-size:14px;letter-spacing:.2em;font-weight:700;color:#b4bac0;margin-top:4px}
h1{position:absolute;left:72px;bottom:130px;margin:0;font-weight:700;font-size:76px;line-height:1;letter-spacing:-.035em;width:640px}
h1 span{color:#93c83e} p{position:absolute;left:72px;bottom:70px;margin:0;font-size:20px;font-weight:500;color:#d6dade}</style>
<img src="data:image/jpeg;base64,${foto}"><div class=o></div><div class=m>KJS<small>ROLLUIKEN · ZONWERING</small></div>
<h1>Kies voor mooi én <span>functioneel.</span></h1><p>Rolluiken, garagedeuren, zonwering en veranda's in Ossendrecht</p>`);
await p.waitForTimeout(300); await p.screenshot({ path: 'public/og.jpg', type: 'jpeg', quality: 84 }); await b.close();
