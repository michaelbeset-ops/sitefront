// public/og.jpg (1200x630): eigen tuinfoto met donkere overlay, kop in Fraunces.
import { chromium } from 'playwright'; import fs from 'node:fs';
const font = fs.readFileSync('node_modules/@fontsource-variable/fraunces/files/fraunces-latin-wght-normal.woff2').toString('base64');
const foto = fs.readFileSync('src/assets/hero.jpg').toString('base64');
const b = await chromium.launch(); const p = await b.newPage({ viewport: { width: 1200, height: 630 } });
await p.setContent(`<style>@font-face{font-family:F;src:url(data:font/woff2;base64,${font}) format('woff2');font-weight:100 900}
body{margin:0;width:1200px;height:630px;color:#f5f3ec;font-family:system-ui,sans-serif;position:relative;overflow:hidden;background:#13201a}
img{position:absolute;inset:0;width:100%;height:100%;object-fit:cover;object-position:60% 45%}
.o{position:absolute;inset:0;background:linear-gradient(90deg,#13201af5 0%,#13201acc 45%,#13201a20 100%)}
.m{position:absolute;left:72px;top:68px;font-size:18px;letter-spacing:.22em;text-transform:uppercase;font-weight:700}
.m small{display:block;color:#6cc04a;font-size:13px;margin-top:8px}
h1{position:absolute;left:72px;bottom:140px;width:680px;margin:0;font-family:F;font-weight:700;font-size:70px;line-height:1.02;letter-spacing:-.03em}
h1 span{color:#6cc04a}
p{position:absolute;left:72px;bottom:72px;margin:0;font-size:19px;letter-spacing:.14em;text-transform:uppercase;font-weight:600;color:#d8dfd5}</style>
<img src="data:image/jpeg;base64,${foto}"><div class=o></div><div class=m>Spaans<small>Hoveniersbedrijf</small></div>
<h1>Een tuin van kwaliteit voor jaren van <span>tuinplezier.</span></h1><p>Ontwerp, aanleg en onderhoud · Rijswijk</p>`);
await p.waitForTimeout(400);
await p.screenshot({ path: 'public/og.jpg', type: 'jpeg', quality: 82 }); await b.close();
