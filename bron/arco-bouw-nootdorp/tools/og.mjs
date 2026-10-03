// public/og.jpg (1200x630): eigen hero-foto met marine verloop, logo en kop in Tomorrow.
import { chromium } from 'playwright'; import fs from 'node:fs';
const font = fs.readFileSync('node_modules/@fontsource/tomorrow/files/tomorrow-latin-700-normal.woff2').toString('base64');
const foto = fs.readFileSync('src/assets/hero.jpg').toString('base64');
const logo = fs.readFileSync('src/assets/logo-licht.png').toString('base64');
const b = await chromium.launch(); const p = await b.newPage({ viewport: { width: 1200, height: 630 } });
await p.setContent(`<style>@font-face{font-family:T;src:url(data:font/woff2;base64,${font}) format('woff2');font-weight:700}
body{margin:0;width:1200px;height:630px;background:#161a4a;color:#f7f6f2;font-family:T;position:relative;overflow:hidden}
.f{position:absolute;inset:0;width:100%;height:100%;object-fit:cover;object-position:64% 55%}
.o{position:absolute;inset:0;background:linear-gradient(90deg,#161a4afa 0%,#161a4ad9 48%,#161a4a33 100%)}
.l{position:absolute;left:72px;top:64px;height:76px}
h1{position:absolute;left:72px;bottom:140px;width:760px;margin:0;font-size:76px;line-height:1;letter-spacing:-.035em}
h1 span{color:#ff9c8f}
p{position:absolute;left:72px;bottom:70px;margin:0;font-family:system-ui;font-size:22px;color:#d9dbee}
.r{position:absolute;left:0;bottom:0;height:10px;width:100%;background:#c8231b}</style>
<img class=f src="data:image/jpeg;base64,${foto}"><div class=o></div><img class=l src="data:image/png;base64,${logo}">
<h1>Verbouwen <span>zonder verrassingen</span> achteraf.</h1><p>Aannemersbedrijf in Nootdorp · verbouwing, renovatie, onderhoud</p><div class=r></div>`);
await p.waitForTimeout(400);
await p.screenshot({ path: 'public/og.jpg', type: 'jpeg', quality: 82 }); await b.close();
