// public/og.jpg (1200x630): eigen-letter kop links op aarde-donker, hero-foto rechts.
import { chromium } from 'playwright'; import fs from 'node:fs';
const font = fs.readFileSync('node_modules/@fontsource-variable/bitter/files/bitter-latin-wght-normal.woff2').toString('base64');
const sans = fs.readFileSync('node_modules/@fontsource-variable/source-sans-3/files/source-sans-3-latin-wght-normal.woff2').toString('base64');
const foto = fs.readFileSync('src/assets/hero.jpg').toString('base64');
const b = await chromium.launch(); const p = await b.newPage({ viewport: { width: 1200, height: 630 } });
await p.setContent(`<style>@font-face{font-family:B;src:url(data:font/woff2;base64,${font}) format('woff2');font-weight:100 900}
@font-face{font-family:S;src:url(data:font/woff2;base64,${sans}) format('woff2');font-weight:200 900}
body{margin:0;width:1200px;height:630px;background:#1d1b17;color:#f6f3ec;font-family:S;position:relative;overflow:hidden}
img{position:absolute;right:0;top:0;width:520px;height:630px;object-fit:cover;object-position:45% 60%}
.m{position:absolute;left:72px;top:66px}
.m small{display:block;font-size:15px;letter-spacing:.26em;text-transform:uppercase;font-weight:700;color:#f0a37f}
.m b{display:block;font-family:B;font-weight:700;font-size:40px;margin-top:6px}
h1{position:absolute;left:72px;bottom:140px;width:560px;margin:0;font-family:B;font-weight:700;font-size:62px;line-height:1.02;letter-spacing:-.025em}
h1 span{color:#f0a37f}
p{position:absolute;left:72px;bottom:66px;margin:0;font-size:20px;letter-spacing:.12em;text-transform:uppercase;font-weight:600;color:#c4bcae}</style>
<img src="data:image/jpeg;base64,${foto}"><div class=m><small>Hoveniersbedrijf</small><b>D. Heijkamp</b></div>
<h1>Betrokken van begin tot eind, <span>weer of geen weer.</span></h1><p>Hovenier in Nieuwegein sinds 1993</p>`);
await p.waitForTimeout(300);
await p.screenshot({ path: 'public/og.jpg', type: 'jpeg', quality: 82 }); await b.close();
