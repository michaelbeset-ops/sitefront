// public/og.jpg (1200x630): asfalt-vlak met dakbord-woordmerk en kop links, hero-foto rechts, eigen lesauto's op de kaart.
import { chromium } from 'playwright'; import fs from 'node:fs';
const kop = fs.readFileSync('node_modules/@fontsource/sarabun/files/sarabun-latin-800-normal.woff2').toString('base64');
const sans = fs.readFileSync('node_modules/@fontsource-variable/figtree/files/figtree-latin-wght-normal.woff2').toString('base64');
const foto = fs.readFileSync('src/assets/hero.jpg').toString('base64');
const autos = fs.readFileSync('src/assets/lesautos.png').toString('base64');
const b = await chromium.launch(); const p = await b.newPage({ viewport: { width: 1200, height: 630 } });
await p.setContent(`<style>@font-face{font-family:K;src:url(data:font/woff2;base64,${kop}) format('woff2');font-weight:800}
@font-face{font-family:S;src:url(data:font/woff2;base64,${sans}) format('woff2');font-weight:100 900}
body{margin:0;width:1200px;height:630px;background:#16181b;color:#f5f3ee;font-family:S;position:relative;overflow:hidden}
.f{position:absolute;right:0;top:0;width:560px;height:630px;object-fit:cover;object-position:30% 60%}
.g{position:absolute;right:0;top:0;width:560px;height:630px;background:linear-gradient(90deg,#16181b 0%,#16181b00 45%)}
.m{position:absolute;left:72px;top:68px;display:flex;align-items:center;gap:16px}
.d{display:flex;height:52px;border-radius:7px;overflow:hidden;background:#16181b;box-shadow:inset 0 0 0 2px #f5f3ee33}
.d b{display:grid;place-items:center;padding:0 14px;font-family:K;font-size:30px;color:#f6c400}
.d i{display:grid;place-items:center;width:38px;font-style:normal;font-family:K;font-size:24px;background:#f6c400;color:#16181b}
.m span{font-family:K;font-size:24px}
h1{position:absolute;left:72px;top:190px;width:640px;margin:0;font-family:K;font-weight:800;font-size:76px;line-height:.98;letter-spacing:-.03em}
h1 em{font-style:normal;color:#f6c400}
p{position:absolute;left:72px;bottom:70px;margin:0;font-size:22px;color:#b8bbc1}
p b{color:#f5f3ee}
.a{position:absolute;right:48px;bottom:44px;width:294px;padding:14px;background:#f5f3ee;border-radius:10px}</style>
<img class=f src="data:image/jpeg;base64,${foto}"><div class=g></div>
<div class=m><span class=d><b>WEST</b><i>L</i></span><span>Autorijschool</span></div>
<h1>Je rijbewijs halen in je <em>eigen tempo.</em></h1><p><b>Rozenburg</b> · familiebedrijf sinds 1973 · proefles € 60</p>
<img class=a src="data:image/png;base64,${autos}">`);
await p.waitForTimeout(400);
await p.screenshot({ path: 'public/og.jpg', type: 'jpeg', quality: 84 }); await b.close();
