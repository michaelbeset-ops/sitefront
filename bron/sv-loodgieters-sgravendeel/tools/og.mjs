// public/og.jpg (1200x630): eigen vloerverwarmingsfoto, donker verloop, logo + kop in IBM Plex Sans.
import { chromium } from 'playwright'; import fs from 'node:fs';
const font = fs.readFileSync('node_modules/@fontsource-variable/ibm-plex-sans/files/ibm-plex-sans-latin-wght-normal.woff2').toString('base64');
const foto = fs.readFileSync('src/assets/hero.jpg').toString('base64');
const b = await chromium.launch(); const p = await b.newPage({ viewport: { width: 1200, height: 630 } });
await p.setContent(`<style>@font-face{font-family:P;src:url(data:font/woff2;base64,${font}) format('woff2');font-weight:100 700}
body{margin:0;width:1200px;height:630px;background:#10161d;color:#f3f2ee;font-family:P;position:relative;overflow:hidden}
img{position:absolute;inset:0;width:100%;height:100%;object-fit:cover;object-position:60% 60%}
.v{position:absolute;inset:0;background:linear-gradient(90deg,#10161df7 0%,#10161dcc 50%,#10161d40 100%)}
.m{position:absolute;left:72px;top:64px;display:flex;align-items:center;gap:16px;font-weight:700;font-size:30px;letter-spacing:-.03em}
.m svg{height:52px}
h1{position:absolute;left:72px;bottom:140px;margin:0;font-weight:700;font-size:92px;line-height:.98;letter-spacing:-.04em}
h1 span{color:#ff6f80}
p{position:absolute;left:72px;bottom:72px;margin:0;font-size:24px;color:#c9d0d6}</style>
<img src="data:image/jpeg;base64,${foto}"><div class=v></div>
<div class=m><svg viewBox="0 0 220 365"><polygon fill="#eb1b35" points="148,2 148,87 48,154 175,260 90,260 3,190 3,117"/><polygon fill="#00b6eb" points="48,154 90,124 217,227 175,260"/><polygon fill="#00b6eb" points="217,227 50,362 50,287 85,262 175,260"/></svg>S&amp;V Loodgieters</div>
<h1>Secuur, netjes<br><span>en snel.</span></h1><p>Loodgieter en installateur in 's-Gravendeel</p>`);
await p.waitForTimeout(300);
await p.screenshot({ path: 'public/og.jpg', type: 'jpeg', quality: 84 }); await b.close();
