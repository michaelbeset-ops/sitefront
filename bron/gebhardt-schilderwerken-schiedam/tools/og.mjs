// public/og.jpg (1200x630): nachtblauw vlak met woordmerk en kop links, eigen hero-foto rechts, in Onest.
import { chromium } from 'playwright'; import fs from 'node:fs';
const font = fs.readFileSync('node_modules/@fontsource-variable/onest/files/onest-latin-wght-normal.woff2').toString('base64');
const foto = fs.readFileSync('src/assets/hero.jpg').toString('base64');
const b = await chromium.launch(); const p = await b.newPage({ viewport: { width: 1200, height: 630 } });
await p.setContent(`<style>@font-face{font-family:O;src:url(data:font/woff2;base64,${font}) format('woff2');font-weight:100 900}
body{margin:0;width:1200px;height:630px;background:#10162a;color:#f6f3ed;font-family:O;position:relative;overflow:hidden}
img{position:absolute;right:0;top:0;width:520px;height:630px;object-fit:cover;object-position:45% 50%}
.m{position:absolute;left:72px;top:68px}
.m b{display:block;font-weight:900;font-size:34px;letter-spacing:-.01em;text-transform:uppercase}
.m small{display:block;margin-top:8px;font-size:14px;letter-spacing:.24em;text-transform:uppercase;font-weight:700;color:#b9bfd0}
h1{position:absolute;left:72px;bottom:140px;width:560px;margin:0;font-weight:900;font-size:64px;line-height:1;letter-spacing:-.04em}
h1 span{color:#9fb6ff}
p{position:absolute;left:72px;bottom:72px;margin:0;font-size:18px;font-weight:600;color:#b9bfd0}</style>
<img src="data:image/jpeg;base64,${foto}"><div class=m><b>Gebhardt</b><small>Schilderwerken · Schiedam</small></div>
<h1>Uw vakschilder voor al uw <span>schilderwerk.</span></h1><p>Voor bedrijf, VvE en particulier · sinds 2005</p>`);
await p.waitForTimeout(300);
await p.screenshot({ path: 'public/og.jpg', type: 'jpeg', quality: 84 }); await b.close();
