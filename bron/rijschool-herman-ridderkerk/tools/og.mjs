// public/og.jpg (1200x630): luchtfoto kruispunt met woordmerk en kop, in de eigen letters.
import { chromium } from 'playwright'; import fs from 'node:fs';
const kop = fs.readFileSync('node_modules/@fontsource-variable/archivo/files/archivo-latin-wdth-normal.woff2').toString('base64');
const sans = fs.readFileSync('node_modules/@fontsource-variable/public-sans/files/public-sans-latin-wght-normal.woff2').toString('base64');
const foto = fs.readFileSync('src/assets/kruispunt.jpg').toString('base64');
const b = await chromium.launch(); const p = await b.newPage({ viewport: { width: 1200, height: 630 } });
await p.setContent(`<style>@font-face{font-family:K;src:url(data:font/woff2;base64,${kop}) format('woff2');font-weight:100 900;font-stretch:62% 125%}
@font-face{font-family:S;src:url(data:font/woff2;base64,${sans}) format('woff2');font-weight:100 900}
body{margin:0;width:1200px;height:630px;background:#14171b;color:#f3f4f6;font-family:S;position:relative;overflow:hidden}
img{position:absolute;inset:0;width:100%;height:100%;object-fit:cover;object-position:60% 50%}
.g{position:absolute;inset:0;background:linear-gradient(90deg,#14171bf5 0%,#14171bd9 45%,#14171b4d 100%)}
.m{position:absolute;left:72px;top:64px;font-family:K;font-stretch:118%;font-weight:700;font-size:40px;letter-spacing:.06em;line-height:1}
.m small{display:block;font-family:S;font-size:14px;letter-spacing:.3em;font-weight:700;color:#a8b0bb;margin-bottom:8px}
.m i{font-style:normal;position:relative;z-index:0;display:inline-block;padding:0 .06em;margin:0 .04em}.m i:before{content:'';position:absolute;z-index:-1;inset:-.1em -.04em;background:#0b63c9;border-radius:4px;transform:rotate(-9deg)}
h1{position:absolute;left:72px;bottom:120px;margin:0;font-family:K;font-stretch:112%;font-weight:800;font-size:84px;line-height:.98;letter-spacing:-.035em}
h1 span{color:#6cb6ff}
p{position:absolute;left:72px;bottom:64px;margin:0;font-size:22px;color:#d5dae0}</style>
<img src="data:image/jpeg;base64,${foto}"><div class=g></div><div class=m><small>RIJSCHOOL</small>H<i>E</i>RMAN</div>
<h1>Niet meer lessen<br><span>dan nodig.</span></h1><p>Rijles voor auto en motor in Ridderkerk · 06 14 66 07 71</p>`);
await p.waitForTimeout(400);
await p.screenshot({ path: 'public/og.jpg', type: 'jpeg', quality: 84 }); await b.close();
