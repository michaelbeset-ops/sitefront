// public/og.jpg (1200x630): vilt, kop in Limelight, gravure-foto.
import { chromium } from 'playwright'; import fs from 'node:fs';
const font = fs.readFileSync('node_modules/@fontsource/limelight/files/limelight-latin-400-normal.woff2').toString('base64');
const foto = fs.readFileSync('src/assets/hero-adolphe-sax.jpg').toString('base64');
const b = await chromium.launch(); const p = await b.newPage({ viewport: { width: 1200, height: 630 } });
await p.setContent(`<style>@font-face{font-family:L;src:url(data:font/woff2;base64,${font}) format('woff2')}
body{margin:0;width:1200px;height:630px;background:#173a2d;color:#fff;position:relative;overflow:hidden;font-family:system-ui}
.f{position:absolute;right:0;top:0;width:820px;height:630px;object-fit:cover;object-position:50% 55%}
.g{position:absolute;inset:0;background:linear-gradient(90deg,#0d1f18 30%,#0d1f1800 80%)}
h1{position:absolute;left:72px;top:170px;margin:0;font:400 76px/1.05 L;width:640px}
small{position:absolute;left:74px;top:128px;font:500 19px system-ui;color:#9fd0b6}
p{position:absolute;left:74px;top:440px;margin:0;font-size:24px;color:#ffffffd9}</style>
<img class=f src="data:image/jpeg;base64,${foto}"><div class=g></div><small>Werkplaats voor basklarinet en saxofoon · Heukelum</small>
<h1>Bas en Sax</h1><p>Onderhoud, verkoop en verhuur.<br>Specialiteit: vintage saxofoons en basklarinetten.</p>`);
await p.waitForTimeout(400);
await p.screenshot({ path: 'public/og.jpg', type: 'jpeg', quality: 84 }); await b.close();
