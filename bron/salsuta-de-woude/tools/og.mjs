// public/og.jpg (1200x630): luchtfoto van het terras met logo en kop in Abril Fatface.
import { chromium } from 'playwright'; import fs from 'node:fs';
const font = fs.readFileSync('node_modules/@fontsource/abril-fatface/files/abril-fatface-latin-400-normal.woff2').toString('base64');
const foto = fs.readFileSync('src/assets/luchtfoto-terras.jpg').toString('base64');
const logo = fs.readFileSync('src/assets/logo.png').toString('base64');
const b = await chromium.launch(); const p = await b.newPage({ viewport: { width: 1200, height: 630 } });
await p.setContent(`<style>@font-face{font-family:A;src:url(data:font/woff2;base64,${font}) format('woff2')}
body{margin:0;width:1200px;height:630px;background:#f3f4ef;color:#121412;font-family:A;position:relative;overflow:hidden}
.f{position:absolute;right:0;top:0;width:620px;height:630px;object-fit:cover;object-position:50% 60%}
.l{position:absolute;left:64px;top:56px;width:240px}
h1{position:absolute;left:64px;bottom:120px;width:480px;margin:0;font-weight:400;font-size:76px;line-height:1}
h1 span{background:linear-gradient(transparent 62%,#bad607 62% 92%,transparent 92%)}
p{position:absolute;left:64px;bottom:58px;margin:0;font:600 21px system-ui;color:#4f544e}</style>
<img class=f src="data:image/jpeg;base64,${foto}"><img class=l src="data:image/png;base64,${logo}">
<h1>Aan tafel op het <span>eiland</span></h1><p>Restaurant Salsuta · Woude 1a, De Woude</p>`);
await p.waitForTimeout(300);
await p.screenshot({ path: 'public/og.jpg', type: 'jpeg', quality: 84 }); await b.close();
