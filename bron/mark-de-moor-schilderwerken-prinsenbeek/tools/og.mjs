// public/og.jpg (1200x630): donker vlak met wapen, kop in Playfair, sfeerfoto rechts.
import { chromium } from 'playwright'; import fs from 'node:fs';
const b64 = (f) => fs.readFileSync(f).toString('base64');
const kop = b64('node_modules/@fontsource/playfair-display/files/playfair-display-latin-700-normal.woff2');
const kopI = b64('node_modules/@fontsource/playfair-display/files/playfair-display-latin-700-italic.woff2');
const sans = b64('node_modules/@fontsource-variable/figtree/files/figtree-latin-wght-normal.woff2');
const b = await chromium.launch(); const p = await b.newPage({ viewport: { width: 1200, height: 630 } });
await p.setContent(`<style>@font-face{font-family:P;src:url(data:font/woff2;base64,${kop})}@font-face{font-family:P;font-style:italic;src:url(data:font/woff2;base64,${kopI})}@font-face{font-family:F;src:url(data:font/woff2;base64,${sans});font-weight:100 900}
body{margin:0;width:1200px;height:630px;background:#1b1813;color:#f6f1e6;font-family:F;position:relative;overflow:hidden}
.f{position:absolute;right:0;top:0;width:430px;height:630px;object-fit:cover;object-position:55% 50%}
.w{position:absolute;left:72px;top:64px;width:96px;height:96px}
.m{position:absolute;left:184px;top:86px}.m b{display:block;font-family:P;font-size:32px}.m small{font-size:13px;letter-spacing:.3em;text-transform:uppercase;font-weight:700;color:#cf9f2f}
h1{position:absolute;left:72px;top:215px;width:660px;margin:0;font-family:P;font-size:66px;line-height:1.02;letter-spacing:-.015em}h1 em{color:#cf9f2f}
p{position:absolute;left:72px;bottom:64px;margin:0;font-size:17px;letter-spacing:.18em;text-transform:uppercase;font-weight:600;color:#bfb5a2}</style>
<img class=f src="data:image/jpeg;base64,${b64('src/assets/hero.jpg')}"><img class=w src="data:image/png;base64,${b64('src/assets/wapen.png')}">
<div class=m><b>Mark de Moor</b><small>Schilderwerken</small></div>
<h1>Schilderwerk dat iets meer <em>aandacht</em> nodig heeft.</h1><p>Schildersbedrijf in Prinsenbeek</p>`);
await p.waitForTimeout(400);
await p.screenshot({ path: 'public/og.jpg', type: 'jpeg', quality: 84 }); await b.close();
