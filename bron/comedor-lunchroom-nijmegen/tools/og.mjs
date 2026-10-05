// public/og.jpg (1200x630): pui-groen met luifel, logo en kop in Lilita One, eigen foto rechts.
import { chromium } from 'playwright'; import fs from 'node:fs';
const font = fs.readFileSync('node_modules/@fontsource/lilita-one/files/lilita-one-latin-400-normal.woff2').toString('base64');
const foto = fs.readFileSync('src/assets/hete-kip-nijmegen.jpg').toString('base64');
const logo = fs.readFileSync('src/assets/logo-wit.png').toString('base64');
const b = await chromium.launch(); const p = await b.newPage({ viewport: { width: 1200, height: 630 } });
await p.setContent(`<style>@font-face{font-family:L;src:url(data:font/woff2;base64,${font}) format('woff2')}
body{margin:0;width:1200px;height:630px;background:#17221f;color:#f6f5f2;font-family:L;position:relative;overflow:hidden}
.f{position:absolute;right:0;top:0;width:480px;height:630px;object-fit:cover}
.l{position:absolute;left:0;top:0;width:720px;height:18px;background:#c42f27;box-shadow:inset 0 -5px 0 #fff}
.g{position:absolute;left:72px;top:70px;height:80px}
h1{position:absolute;left:72px;bottom:120px;width:600px;margin:0;font-weight:400;font-size:82px;line-height:.98}
h1 span{color:#ff8a7a}
p{position:absolute;left:72px;bottom:60px;margin:0;font:600 22px system-ui;color:#b9c1bd}</style>
<div class=l></div><img class=f src="data:image/jpeg;base64,${foto}"><img class=g src="data:image/png;base64,${logo}">
<h1>Vers vlees, <span>eigen kruiden.</span></h1><p>Nijmegen · Arnhem · elke dag 10.00 - 22.00</p>`);
await p.waitForTimeout(300);
await p.screenshot({ path: 'public/og.jpg', type: 'jpeg', quality: 84 }); await b.close();
