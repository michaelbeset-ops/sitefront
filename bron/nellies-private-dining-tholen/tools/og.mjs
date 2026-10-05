// public/og.jpg (1200x630): papier met tegeltje en kop in Bodoni, sliptongfoto rechts.
import { chromium } from 'playwright'; import fs from 'node:fs';
const font = fs.readFileSync('node_modules/@fontsource-variable/bodoni-moda/files/bodoni-moda-latin-opsz-normal.woff2').toString('base64');
const fonti = fs.readFileSync('node_modules/@fontsource-variable/bodoni-moda/files/bodoni-moda-latin-opsz-italic.woff2').toString('base64');
const foto = fs.readFileSync('src/assets/sliptong.jpg').toString('base64');
const tegel = fs.readFileSync('src/assets/tegel.png').toString('base64');
const b = await chromium.launch(); const p = await b.newPage({ viewport: { width: 1200, height: 630 } });
await p.setContent(`<style>@font-face{font-family:B;src:url(data:font/woff2;base64,${font}) format('woff2')}@font-face{font-family:B;font-style:italic;src:url(data:font/woff2;base64,${fonti}) format('woff2')}
body{margin:0;width:1200px;height:630px;background:#f6f6f3;color:#16181b;font-family:B;position:relative;overflow:hidden}
.f{position:absolute;right:0;top:0;width:480px;height:630px;object-fit:cover}
.t{position:absolute;left:72px;top:64px;width:84px;border-radius:2px;box-shadow:0 2px 10px #0002}
h1{position:absolute;left:72px;bottom:112px;width:600px;margin:0;font-weight:500;font-size:72px;line-height:1.02;letter-spacing:-.02em}
h1 em{color:#23449a;font-weight:400}
p{position:absolute;left:72px;bottom:56px;margin:0;font:600 20px system-ui;color:#565b61}</style>
<img class=f src="data:image/jpeg;base64,${foto}"><img class=t src="data:image/png;base64,${tegel}">
<h1>Elke week een nieuw <em>vijfgangendiner</em></h1><p>Nellie's private dining · Oudelandsedijk 6, Tholen</p>`);
await p.waitForTimeout(400);
await p.screenshot({ path: 'public/og.jpg', type: 'jpeg', quality: 84 }); await b.close();
