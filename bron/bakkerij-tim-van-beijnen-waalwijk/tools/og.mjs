// public/og.jpg (1200x630): kalkwit vlak met kop in Prata, vitrinefoto rechts.
import { chromium } from 'playwright'; import fs from 'node:fs';
const font = fs.readFileSync('node_modules/@fontsource/prata/files/prata-latin-400-normal.woff2').toString('base64');
const foto = fs.readFileSync('src/assets/vitrine.jpg').toString('base64');
const b = await chromium.launch(); const p = await b.newPage({ viewport: { width: 1200, height: 630 } });
await p.setContent(`<style>@font-face{font-family:P;src:url(data:font/woff2;base64,${font}) format('woff2')}
body{margin:0;width:1200px;height:630px;background:#f4f2ee;color:#1b1f1d;font-family:P;position:relative;overflow:hidden}
.f{position:absolute;right:0;top:0;width:560px;height:630px;object-fit:cover;object-position:40% 60%}
.m{position:absolute;left:72px;top:70px;display:flex;flex-direction:column;align-items:center;gap:6px;font:600 22px system-ui}
.m b{background:#0f0f0f;color:#fff;padding:8px 12px;transform:scaleY(1.18)}.m small{font:500 10px system-ui;letter-spacing:.42em;text-transform:uppercase}
h1{position:absolute;left:72px;top:210px;margin:0;font-weight:400;font-size:80px;line-height:1;width:540px}
p{position:absolute;left:74px;top:420px;margin:0;font:400 22px system-ui;color:#4f5753;width:500px;line-height:1.4}</style>
<img class=f src="data:image/jpeg;base64,${foto}"><div class=m><b>VAN TIM</b><small>since 1978</small></div>
<h1>Uit duizenden te herkennen.</h1><p>Patisserie en brood van Tim van Beijnen, Hoogeinde, Waalwijk</p>`);
await p.waitForTimeout(400); await p.screenshot({ path: 'public/og.jpg', type: 'jpeg', quality: 84 }); await b.close();
