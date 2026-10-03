// public/og.jpg (1200x630): eigen hero-foto met donkere overlay, woordmerk en kop in Roboto Condensed.
import { chromium } from 'playwright'; import fs from 'node:fs';
const font = fs.readFileSync('node_modules/@fontsource-variable/roboto-condensed/files/roboto-condensed-latin-wght-normal.woff2').toString('base64');
const foto = fs.readFileSync('src/assets/p/hero.jpg').toString('base64');
const b = await chromium.launch(); const p = await b.newPage({ viewport: { width: 1200, height: 630 } });
await p.setContent(`<style>@font-face{font-family:R;src:url(data:font/woff2;base64,${font}) format('woff2');font-weight:100 900}
body{margin:0;width:1200px;height:630px;background:#14171c;color:#f4f3ef;font-family:R;position:relative;overflow:hidden}
img{position:absolute;inset:0;width:100%;height:100%;object-fit:cover;object-position:70% 50%}
.o{position:absolute;inset:0;background:linear-gradient(90deg,#14171cf5 0%,#14171cd0 45%,#14171c30 100%)}
.m{position:absolute;left:72px;top:64px;display:flex;align-items:center;gap:14px}
.m i{display:grid;place-items:center;width:52px;height:52px;background:#2347b5;font-style:normal;font-weight:800;font-size:24px;border-radius:3px}
.m b{font-weight:800;font-size:28px;letter-spacing:.02em;text-transform:uppercase}
h1{position:absolute;left:72px;bottom:120px;width:720px;margin:0;font-weight:800;font-size:84px;line-height:.92;text-transform:uppercase}
h1 span{color:#9fb6ff}
p{position:absolute;left:72px;bottom:64px;margin:0;font-size:22px;letter-spacing:.14em;text-transform:uppercase;font-weight:600;color:#c9ccd2}</style>
<img src="data:image/jpeg;base64,${foto}"><div class=o></div><div class=m><i>GO</i><b>Gertjan Oudshoorn</b></div>
<h1>Grondwerk, bestrating en <span>beschoeiing.</span></h1><p>Grond- en wegenbouw · Capelle aan den IJssel</p>`);
await p.waitForTimeout(300);
await p.screenshot({ path: 'public/og.jpg', type: 'jpeg', quality: 84 }); await b.close();
