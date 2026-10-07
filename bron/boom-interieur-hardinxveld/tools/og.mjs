// public/og.jpg (1200x630): diep, kop in Castoro, hun kajuitfoto rechts.
import { chromium } from 'playwright'; import fs from 'node:fs';
const font = fs.readFileSync('node_modules/@fontsource/castoro/files/castoro-latin-400-normal.woff2').toString('base64');
const fontI = fs.readFileSync('node_modules/@fontsource/castoro/files/castoro-latin-400-italic.woff2').toString('base64');
const foto = fs.readFileSync('src/assets/hero.jpg').toString('base64');
const b = await chromium.launch(); const p = await b.newPage({ viewport: { width: 1200, height: 630 } });
await p.setContent(`<style>@font-face{font-family:C;src:url(data:font/woff2;base64,${font}) format('woff2')}@font-face{font-family:C;font-style:italic;src:url(data:font/woff2;base64,${fontI}) format('woff2')}
body{margin:0;width:1200px;height:630px;background:#0e1a1c;color:#fff;position:relative;overflow:hidden;font-family:system-ui}
.f{position:absolute;right:0;top:0;width:780px;height:630px;object-fit:cover}
.g{position:absolute;inset:0;background:linear-gradient(90deg,#0e1a1c 38%,#0e1a1c00 82%)}
h1{position:absolute;left:72px;top:160px;margin:0;font:400 88px/1.02 C}em{color:#f0a3cb}
small{position:absolute;left:74px;top:118px;font:500 20px system-ui;color:#ffffffd9}
p{position:absolute;left:74px;top:470px;margin:0;font:400 30px C;color:#ffffffd9}</style>
<img class=f src="data:image/jpeg;base64,${foto}"><div class=g></div><small>Jacht- en scheepsbetimmering, Hardinxveld-Giessendam</small>
<h1>Geen seriewerk,<br>maar <em>maatwerk</em>.</h1><p>boom interieur bv</p>`);
await p.waitForTimeout(400);
await p.screenshot({ path: 'public/og.jpg', type: 'jpeg', quality: 84 }); await b.close();
