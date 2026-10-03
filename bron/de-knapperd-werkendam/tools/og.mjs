// public/og.jpg (1200x630): pruimpaars vlak met woordmerk en kop links, eigen hero-foto rechts, in Lexend.
import { chromium } from 'playwright'; import fs from 'node:fs';
const font = fs.readFileSync('node_modules/@fontsource-variable/lexend/files/lexend-latin-wght-normal.woff2').toString('base64');
const foto = fs.readFileSync('src/assets/hero.jpg').toString('base64');
const b = await chromium.launch(); const p = await b.newPage({ viewport: { width: 1200, height: 630 } });
await p.setContent(`<style>@font-face{font-family:L;src:url(data:font/woff2;base64,${font}) format('woff2');font-weight:100 900}
body{margin:0;width:1200px;height:630px;background:#660066;color:#fff;font-family:L;position:relative;overflow:hidden}
img{position:absolute;right:0;top:0;width:500px;height:630px;object-fit:cover;object-position:50% 26%}
.m{position:absolute;left:72px;top:64px;display:flex;align-items:flex-start;gap:6px}
.m b{background:#fff;color:#660066;font-weight:700;font-size:30px;letter-spacing:-.04em;padding:12px 18px 16px;border-radius:6px 6px 20px 20px}
.m small{margin-top:6px;background:#cc0099;font-size:14px;font-weight:600;padding:6px 10px 8px;border-radius:4px 4px 12px 12px}
h1{position:absolute;left:72px;bottom:150px;width:600px;margin:0;font-weight:700;font-size:76px;line-height:1;letter-spacing:-.045em}
h1 span{color:#ff9ee0}
p{position:absolute;left:72px;bottom:76px;margin:0;font-size:22px;font-weight:400;color:#f2e8f2}</style>
<img src="data:image/jpeg;base64,${foto}"><div class=m><b>De Knapperd</b><small>hondentrimsalon</small></div>
<h1>Elke hond is een <span>knapperd.</span></h1><p>Hondentrimsalon van Denise in Werkendam</p>`);
await p.waitForTimeout(300);
await p.screenshot({ path: 'public/og.jpg', type: 'jpeg', quality: 84 }); await b.close();
