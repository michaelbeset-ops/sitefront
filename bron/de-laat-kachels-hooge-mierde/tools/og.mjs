// public/og.jpg (1200x630): roet, kop in Bowlby One, hun Kube-foto rechts.
import { chromium } from 'playwright'; import fs from 'node:fs';
const font = fs.readFileSync('node_modules/@fontsource/bowlby-one/files/bowlby-one-latin-400-normal.woff2').toString('base64');
const foto = fs.readFileSync('src/assets/kube.jpg').toString('base64');
const b = await chromium.launch(); const p = await b.newPage({ viewport: { width: 1200, height: 630 } });
await p.setContent(`<style>@font-face{font-family:B;src:url(data:font/woff2;base64,${font}) format('woff2')}
body{margin:0;width:1200px;height:630px;background:#141311;color:#fff;position:relative;overflow:hidden;font-family:system-ui}
.f{position:absolute;right:0;top:0;width:760px;height:630px;object-fit:cover;object-position:75% 50%}
.g{position:absolute;inset:0;background:linear-gradient(90deg,#141311 38%,#14131100 75%)}
h1{position:absolute;left:72px;top:190px;margin:0;font:400 92px/0.98 B;text-transform:uppercase}
small{position:absolute;left:74px;top:150px;font:650 15px system-ui;letter-spacing:.16em;color:#e2702b;text-transform:uppercase}
p{position:absolute;left:74px;top:420px;margin:0;font-size:24px;color:#ffffffd9}</style>
<img class=f src="data:image/jpeg;base64,${foto}"><div class=g></div><small>Kachels &amp; haarden · Hooge Mierde</small>
<h1>Vuur is<br>onze passie.</h1><p>De Laat Kachels &amp; Haarden</p>`);
await p.waitForTimeout(400);
await p.screenshot({ path: 'public/og.jpg', type: 'jpeg', quality: 84 }); await b.close();
