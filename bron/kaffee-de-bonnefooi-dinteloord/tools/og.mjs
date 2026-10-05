// public/og.jpg (1200x630): asfalt met kop in Alfa Slab One, rechts hun bar met het Texaco-bord.
import { chromium } from 'playwright'; import fs from 'node:fs';
const font = fs.readFileSync('node_modules/@fontsource/alfa-slab-one/files/alfa-slab-one-latin-400-normal.woff2').toString('base64');
const foto = fs.readFileSync('src/assets/bar-bord.jpg').toString('base64');
const logo = fs.readFileSync('src/assets/logo-wit.png').toString('base64');
const b = await chromium.launch(); const p = await b.newPage({ viewport: { width: 1200, height: 630 } });
await p.setContent(`<style>@font-face{font-family:A;src:url(data:font/woff2;base64,${font}) format('woff2')}
body{margin:0;width:1200px;height:630px;background:#141312;color:#f1f1ee;font-family:A;position:relative;overflow:hidden}
.f{position:absolute;right:0;top:0;width:620px;height:630px;object-fit:cover;object-position:45% 50%}
.l{position:absolute;left:64px;top:56px;width:190px}
h1{position:absolute;left:64px;bottom:120px;width:560px;margin:0;font-weight:400;font-size:92px;line-height:.98}
h1 span{color:#ff6b7a}
p{position:absolute;left:64px;bottom:58px;margin:0;font:600 22px system-ui;color:#bdb8b1}</style>
<img class=f src="data:image/jpeg;base64,${foto}"><img class=l src="data:image/png;base64,${logo}">
<h1>And still <span>rockin'</span>.</h1><p>Café met podium · Stoofdijk 26, Dinteloord</p>`);
await p.waitForTimeout(300);
await p.screenshot({ path: 'public/og.jpg', type: 'jpeg', quality: 84 }); await b.close();
