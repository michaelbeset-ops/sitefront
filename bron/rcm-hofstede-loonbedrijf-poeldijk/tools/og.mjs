// public/og.jpg (1200x630): eigen hero-foto met donkere verloop, logo en kop in Kanit.
import { chromium } from 'playwright'; import fs from 'node:fs';
const font = fs.readFileSync('node_modules/@fontsource/kanit/files/kanit-latin-700-normal.woff2').toString('base64');
const foto = fs.readFileSync('src/assets/hero.jpg').toString('base64');
const logo = fs.readFileSync('tools/logo.svg', 'utf8').replace('#00458a', '#ffffff').replace('#4b575f', '#93a4b4').replace('<svg ', '<svg width="300" ');
const b = await chromium.launch(); const p = await b.newPage({ viewport: { width: 1200, height: 630 } });
await p.setContent(`<style>@font-face{font-family:K;src:url(data:font/woff2;base64,${font}) format('woff2');font-weight:700}
body{margin:0;width:1200px;height:630px;position:relative;overflow:hidden;font-family:K;color:#f6f4ef}
img{position:absolute;inset:0;width:100%;height:100%;object-fit:cover;object-position:70% 40%}
.v{position:absolute;inset:0;background:linear-gradient(95deg,#0c1722f5 0%,#0c1722c4 45%,#0c172230 85%)}
.l{position:absolute;left:72px;top:68px}
h1{position:absolute;left:72px;bottom:120px;margin:0;font-size:76px;line-height:.98;letter-spacing:-.01em;width:700px}
h1 span{color:#8ec3f5}
p{position:absolute;left:72px;bottom:64px;margin:0;font:600 19px system-ui,sans-serif;letter-spacing:.14em;text-transform:uppercase;color:#a9b6c2}</style>
<img src="data:image/jpeg;base64,${foto}"><div class=v></div><div class=l>${logo}</div>
<h1>Voor <span>grondig werk</span> in het Westland.</h1><p>Loonbedrijf en grondverzet · Poeldijk · sinds 1989</p>`);
await p.waitForTimeout(300);
await p.screenshot({ path: 'public/og.jpg', type: 'jpeg', quality: 84 }); await b.close();
