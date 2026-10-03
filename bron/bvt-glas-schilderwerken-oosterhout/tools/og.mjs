// public/og.jpg (1200x630): donker vlak met woordmerk en motto links, hero-foto rechts, in Commissioner.
import { chromium } from 'playwright'; import fs from 'node:fs';
const font = fs.readFileSync('node_modules/@fontsource-variable/commissioner/files/commissioner-latin-wght-normal.woff2').toString('base64');
const foto = fs.readFileSync('src/assets/hero.jpg').toString('base64');
const b = await chromium.launch(); const p = await b.newPage({ viewport: { width: 1200, height: 630 } });
await p.setContent(`<style>@font-face{font-family:C;src:url(data:font/woff2;base64,${font}) format('woff2');font-weight:100 900}
body{margin:0;width:1200px;height:630px;background:#191716;color:#f6f3ee;font-family:C;position:relative;overflow:hidden}
img{position:absolute;right:0;top:0;width:520px;height:630px;object-fit:cover;object-position:62% 40%}
.m{position:absolute;left:72px;top:68px;display:flex;align-items:center;gap:16px}
.m i{width:48px;height:48px;background:#b3221b;display:block}
.m b{font-weight:800;font-size:34px;letter-spacing:-.02em}
h1{position:absolute;left:72px;top:190px;width:560px;margin:0;font-weight:800;font-size:76px;line-height:.98;letter-spacing:-.035em}
h1 span{box-shadow:inset 0 -12px 0 #b3221b}
p{position:absolute;left:72px;bottom:68px;margin:0;font-size:19px;letter-spacing:.14em;text-transform:uppercase;font-weight:700;color:#ff7466}</style>
<img src="data:image/jpeg;base64,${foto}"><div class=m><i></i><b>B.V.T.</b></div>
<h1>Kwaliteit hoeft niet <span>duur</span> te zijn.</h1><p>Glas- &amp; schilderwerken · Oosterhout</p>`);
await p.waitForTimeout(300);
await p.screenshot({ path: 'public/og.jpg', type: 'jpeg', quality: 84 }); await b.close();
