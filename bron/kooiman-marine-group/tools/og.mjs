// public/og.jpg (1200x630): nacht, kop in IBM Plex Sans Condensed, hun Swalinge-foto, waterlijn onder.
import { chromium } from 'playwright'; import fs from 'node:fs';
const font = fs.readFileSync('node_modules/@fontsource/ibm-plex-sans-condensed/files/ibm-plex-sans-condensed-latin-600-normal.woff2').toString('base64');
const foto = fs.readFileSync('src/assets/hero-swalinge.jpg').toString('base64');
const logo = fs.readFileSync('src/components/logo.svg', 'utf8');
const b = await chromium.launch(); const p = await b.newPage({ viewport: { width: 1200, height: 630 } });
await p.setContent(`<style>@font-face{font-family:K;src:url(data:font/woff2;base64,${font}) format('woff2')}
body{margin:0;width:1200px;height:630px;background:#071f33;color:#fff;position:relative;overflow:hidden;font-family:system-ui}
.f{position:absolute;right:0;top:0;width:820px;height:630px;object-fit:cover;object-position:60% 50%}
.g{position:absolute;inset:0;background:linear-gradient(90deg,#071f33 34%,#071f3300 78%)}
.l{position:absolute;left:72px;top:60px;width:150px}
h1{position:absolute;left:72px;top:210px;margin:0;font:600 86px/0.98 K;letter-spacing:-.015em}
p{position:absolute;left:74px;top:480px;margin:0;font:600 26px K;color:#41b4d8}
.w{position:absolute;left:0;right:0;bottom:0;height:10px;display:flex}.w i{flex:1}</style>
<img class=f src="data:image/jpeg;base64,${foto}"><div class=g></div><div class=l>${logo}</div>
<h1>Drie werven.<br>Eén groep.<br>Sinds 1884.</h1><p>Zwijndrecht · Dordrecht · Yerseke</p>
<div class=w>${['#0a426f','#1a80c4','#f4c01c','#a69793','#3e7f65','#a4552c','#41b4d8','#1c98d6'].map((c) => `<i style="background:${c}"></i>`).join('')}</div>`);
await p.waitForTimeout(400);
await p.screenshot({ path: 'public/og.jpg', type: 'jpeg', quality: 84 }); await b.close();
