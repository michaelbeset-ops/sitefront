// public/og.jpg (1200x630): kalkwit vlak met woordmerk en kop links, eigen herenhuis-foto rechts, in Cormorant Garamond.
import { chromium } from 'playwright'; import fs from 'node:fs';
const font = fs.readFileSync('node_modules/@fontsource/cormorant-garamond/files/cormorant-garamond-latin-700-normal.woff2').toString('base64');
const foto = fs.readFileSync('src/assets/hero-herenhuis.jpg').toString('base64');
const b = await chromium.launch(); const p = await b.newPage({ viewport: { width: 1200, height: 630 } });
await p.setContent(`<style>@font-face{font-family:C;src:url(data:font/woff2;base64,${font}) format('woff2');font-weight:700}
body{margin:0;width:1200px;height:630px;background:#14191b;color:#f4f1eb;font-family:C;position:relative;overflow:hidden}
img{position:absolute;right:0;top:0;width:560px;height:630px;object-fit:cover;object-position:62% 60%}
.m{position:absolute;left:72px;top:68px;display:flex;gap:12px;align-items:stretch}.m div{text-align:right}
.m b{display:block;font-size:34px;letter-spacing:.02em;text-transform:uppercase;line-height:1}.m small{display:block;font-size:20px;letter-spacing:.14em;color:#b4bcbd;margin-top:4px}
.m span{display:flex;width:14px}.m span i:first-child{flex:.45;background:#93c6cf}.m span i:last-child{flex:1;background:#8a7b5c}
h1{position:absolute;left:72px;bottom:140px;width:540px;margin:0;font-size:66px;line-height:.98}
h1 em{color:#93c6cf}p{position:absolute;left:72px;bottom:72px;margin:0;font:600 16px system-ui,sans-serif;letter-spacing:.2em;text-transform:uppercase;color:#b4bcbd}</style>
<img src="data:image/jpeg;base64,${foto}"><div class=m><div><b>Michiel Reijnders</b><small>SCHILDERWERKEN</small></div><span><i></i><i></i></span></div>
<h1>Schilderwerk, zoals schilderwerk <em>hoort</em> te zijn.</h1><p>Schilder in Dongen</p>`);
await p.waitForTimeout(300);
await p.screenshot({ path: 'public/og.jpg', type: 'jpeg', quality: 84 }); await b.close();
