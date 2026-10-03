// public/og.jpg (1200x630): asfalt met woordmerk en kop links, eigen pandfoto rechts, gele streepjeslijn.
import { chromium } from 'playwright'; import fs from 'node:fs';
const font = fs.readFileSync('node_modules/@fontsource/ubuntu/files/ubuntu-latin-700-normal.woff2').toString('base64');
const foto = fs.readFileSync('src/assets/pand.jpg').toString('base64');
const b = await chromium.launch(); const p = await b.newPage({ viewport: { width: 1200, height: 630 } });
await p.setContent(`<style>@font-face{font-family:U;src:url(data:font/woff2;base64,${font}) format('woff2');font-weight:700}
body{margin:0;width:1200px;height:630px;background:#131416;color:#f2f1ec;font-family:U;position:relative;overflow:hidden}
img{position:absolute;right:0;top:0;width:560px;height:630px;object-fit:cover;object-position:30% 50%;clip-path:polygon(18% 0,100% 0,100% 100%,0 100%)}
.m{position:absolute;left:72px;top:68px;font-size:44px;letter-spacing:-.02em}.m small{display:block;font-size:15px;letter-spacing:.24em;color:#b4b6ba;margin-bottom:6px}
h1{position:absolute;left:72px;top:230px;width:600px;margin:0;font-size:66px;line-height:1.02;letter-spacing:-.03em}h1 span{color:#f2e40c}
p{position:absolute;left:72px;bottom:86px;margin:0;font-size:22px;color:#b4b6ba}
.s{position:absolute;left:0;right:0;bottom:0;height:12px;background:repeating-linear-gradient(90deg,#f2e40c 0 60px,transparent 60px 96px)}</style>
<img src="data:image/jpeg;base64,${foto}"><div class=m><small>AUTOBEDRIJF</small>ReBo</div>
<h1>Vakwerk aan elke auto, <span>oud of nieuw.</span></h1><p>APK, onderhoud en reparatie · Fokkerstraat 28, Reeuwijk</p><div class=s></div>`);
await p.waitForTimeout(300);
await p.screenshot({ path: 'public/og.jpg', type: 'jpeg', quality: 84 }); await b.close();
