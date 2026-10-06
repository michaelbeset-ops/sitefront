// public/og.jpg (1200x630): licht vlak met Anton-kop links, hun tuinkamer-foto rechts.
import { chromium } from 'playwright'; import fs from 'node:fs';
const font = fs.readFileSync('node_modules/@fontsource/anton/files/anton-latin-400-normal.woff2').toString('base64');
const foto = fs.readFileSync('src/assets/tuinkamer-pellet.jpg').toString('base64');
const b = await chromium.launch(); const p = await b.newPage({ viewport: { width: 1200, height: 630 } });
await p.setContent(`<style>@font-face{font-family:A;src:url(data:font/woff2;base64,${font}) format('woff2')}
body{margin:0;width:1200px;height:630px;background:#ecebe7;color:#131416;font-family:A;position:relative;overflow:hidden}
.f{position:absolute;right:0;top:0;width:500px;height:630px;object-fit:cover;object-position:55% 60%}
h1{position:absolute;left:70px;top:120px;margin:0;font-weight:400;font-size:118px;line-height:.95;text-transform:uppercase}
h1 span{color:#b23a0e}
p{position:absolute;left:72px;top:500px;margin:0;font:600 26px system-ui;color:#4a4d52}
small{position:absolute;left:72px;top:80px;font:700 16px system-ui;letter-spacing:.18em;color:#b23a0e}</style>
<img class=f src="data:image/jpeg;base64,${foto}"><small>PIET'S PELLETKACHELS</small>
<h1>Pellet.<br>Hout.<br><span>Vuur.</span></h1><p>Voorstraat 55A, Groot-Ammers · op afspraak</p>`);
await p.waitForTimeout(400);
await p.screenshot({ path: 'public/og.jpg', type: 'jpeg', quality: 84 }); await b.close();
