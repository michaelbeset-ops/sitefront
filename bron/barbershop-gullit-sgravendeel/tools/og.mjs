// public/og.jpg (1200x630): nacht met woordmerk en kop links, eigen pand rechts, in de eigen letter.
import { chromium } from 'playwright'; import fs from 'node:fs';
const font = fs.readFileSync('node_modules/@fontsource-variable/big-shoulders-display/files/big-shoulders-display-latin-wght-normal.woff2').toString('base64');
const foto = fs.readFileSync('src/assets/pand.jpg').toString('base64');
const b = await chromium.launch(); const p = await b.newPage({ viewport: { width: 1200, height: 630 } });
await p.setContent(`<style>@font-face{font-family:B;src:url(data:font/woff2;base64,${font}) format('woff2');font-weight:100 900}
body{margin:0;width:1200px;height:630px;background:#141312;color:#f2f0ec;font-family:B;position:relative;overflow:hidden}
img{position:absolute;right:0;top:0;width:520px;height:630px;object-fit:cover;object-position:50% 60%}
.g{position:absolute;right:520px;top:0;width:160px;height:630px;background:linear-gradient(90deg,#141312,#14131200);transform:translateX(160px)}
.m{position:absolute;left:72px;top:64px;font-weight:800;font-size:30px;letter-spacing:.06em;text-transform:uppercase}
.m span{color:#c99245}
h1{position:absolute;left:72px;top:150px;margin:0;font-weight:800;font-size:122px;line-height:.88;text-transform:uppercase}
h1 span{color:#c99245}
p{position:absolute;left:72px;bottom:60px;margin:0;font-size:28px;font-weight:600;letter-spacing:.08em;text-transform:uppercase;color:#b9b2a8}</style>
<img src="data:image/jpeg;base64,${foto}"><div class=g></div><div class=m>Barbershop <span>Gullit</span></div>
<h1>Haircuts <span>&amp;<br>shaves</span><br>in Casa Gullit</h1><p>Noord Voorstraat 11, 's-Gravendeel</p>`);
await p.waitForTimeout(300);
await p.screenshot({ path: 'public/og.jpg', type: 'jpeg', quality: 84 }); await b.close();
