// public/og.jpg (1200x630): nachtblauw met woordmerk en kop links, eigen fade-foto rechts, in de eigen letter.
import { chromium } from 'playwright'; import fs from 'node:fs';
const kop = fs.readFileSync('node_modules/@fontsource-variable/archivo/files/archivo-latin-wdth-normal.woff2').toString('base64');
const sans = fs.readFileSync('node_modules/@fontsource-variable/public-sans/files/public-sans-latin-wght-normal.woff2').toString('base64');
const foto = fs.readFileSync('src/assets/fade-nek.jpg').toString('base64');
const b = await chromium.launch(); const p = await b.newPage({ viewport: { width: 1200, height: 630 } });
await p.setContent(`<style>@font-face{font-family:K;src:url(data:font/woff2;base64,${kop}) format('woff2');font-weight:100 900;font-stretch:62% 125%}
@font-face{font-family:S;src:url(data:font/woff2;base64,${sans}) format('woff2');font-weight:100 900}
body{margin:0;width:1200px;height:630px;background:#0a0f1c;color:#f5f4f0;font-family:S;position:relative;overflow:hidden}
img{position:absolute;right:0;top:0;width:430px;height:630px;object-fit:cover;object-position:50% 35%}
.m{position:absolute;left:72px;top:64px;line-height:1}.m b{font-family:K;font-weight:800;font-stretch:125%;font-size:40px;letter-spacing:.06em;display:block}
.m small{display:block;margin-top:8px;font-size:13px;letter-spacing:.26em;text-transform:uppercase;font-weight:600;color:#a9bdff}
h1{position:absolute;left:72px;bottom:140px;width:660px;margin:0;font-family:K;font-weight:800;font-size:76px;line-height:.95;letter-spacing:-.035em}h1 span{color:#a9bdff}
p{position:absolute;left:72px;bottom:66px;margin:0;font-size:20px;color:#adb4c4}.bar{position:absolute;left:0;top:0;width:8px;height:630px;background:#1b3590}</style>
<div class=bar></div><img src="data:image/jpeg;base64,${foto}"><div class=m><b>MASO</b><small>Hair salon &amp; barbershop</small></div>
<h1>Strak geknipt aan het <span>Dillenburgplein.</span></h1><p>Kapper en barbier, Dillenburgplein 4, Ridderkerk</p>`);
await p.waitForTimeout(400);
await p.screenshot({ path: 'public/og.jpg', type: 'jpeg', quality: 84 }); await b.close();
