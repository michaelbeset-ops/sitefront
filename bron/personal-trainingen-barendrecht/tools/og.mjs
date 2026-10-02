// public/og.jpg (1200x630): eigen studiofoto met donker verloop, woordmerk en kop in Archivo.
import { chromium } from 'playwright'; import fs from 'node:fs';
const font = fs.readFileSync('node_modules/@fontsource-variable/archivo/files/archivo-latin-wdth-normal.woff2').toString('base64');
const foto = fs.readFileSync('src/assets/hero.jpg').toString('base64');
const b = await chromium.launch(); const p = await b.newPage({ viewport: { width: 1200, height: 630 } });
await p.setContent(`<style>@font-face{font-family:A;src:url(data:font/woff2;base64,${font}) format('woff2');font-weight:100 900;font-stretch:62% 125%}
body{margin:0;width:1200px;height:630px;background:#151314;color:#f6f4f1;font-family:A;position:relative;overflow:hidden}
img{position:absolute;inset:0;width:100%;height:100%;object-fit:cover;object-position:70% 50%}
.v{position:absolute;inset:0;background:linear-gradient(90deg,#151314f7 0%,#151314d0 50%,#15131433 100%)}
.m{position:absolute;left:72px;top:64px;font-weight:800;font-size:26px;letter-spacing:-.02em}.m small{display:block;margin-top:6px;font-size:13px;letter-spacing:.3em;color:#ff8f97;font-stretch:115%}
h1{position:absolute;left:72px;bottom:130px;width:700px;margin:0;font-weight:800;font-stretch:106%;font-size:76px;line-height:.96;letter-spacing:-.035em}h1 span{color:#ff8f97}
p{position:absolute;left:72px;bottom:64px;margin:0;font-size:20px;font-weight:600;color:#bdb5b6}</style>
<img src="data:image/jpeg;base64,${foto}"><div class=v></div><div class=m>Personal Trainingen<small>BARENDRECHT</small></div>
<h1>Je doel halen met je eigen <span>privécoach.</span></h1><p>Zwolseweg 26, Barendrecht · Gratis intakegesprek</p>`);
await p.waitForTimeout(300);
await p.screenshot({ path: 'public/og.jpg', type: 'jpeg', quality: 84 }); await b.close();
