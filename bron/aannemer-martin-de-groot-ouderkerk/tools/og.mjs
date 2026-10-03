// public/og.jpg (1200x630): petrol vlak met woordmerk en kop links, eigen foto rechts, in Teko.
import { chromium } from 'playwright'; import fs from 'node:fs';
const font = fs.readFileSync('node_modules/@fontsource-variable/teko/files/teko-latin-wght-normal.woff2').toString('base64');
const foto = fs.readFileSync('src/assets/stuken8.jpg').toString('base64');
const b = await chromium.launch(); const p = await b.newPage({ viewport: { width: 1200, height: 630 } });
await p.setContent(`<style>@font-face{font-family:T;src:url(data:font/woff2;base64,${font}) format('woff2');font-weight:300 700}
body{margin:0;width:1200px;height:630px;background:#0b2f3c;color:#f4f2ed;font-family:T;position:relative;overflow:hidden}
img{position:absolute;right:0;top:0;width:430px;height:630px;object-fit:cover;object-position:50% 50%}
.m{position:absolute;left:72px;top:64px;display:flex;align-items:center;gap:16px}
.m i{display:grid;place-items:center;width:58px;height:58px;background:#169bd5;font-style:normal;font-weight:700;font-size:38px;padding-top:8px;box-sizing:border-box}
.m b{font-weight:600;font-size:36px;letter-spacing:.02em;text-transform:uppercase;line-height:.8}
h1{position:absolute;left:72px;bottom:130px;width:660px;margin:0;font-weight:600;font-size:118px;line-height:.86}
h1 span{color:#4fb9ea}
p{position:absolute;left:72px;bottom:64px;margin:0;font-family:system-ui;font-size:19px;letter-spacing:.14em;text-transform:uppercase;font-weight:600;color:#aec3cb}</style>
<img src="data:image/jpeg;base64,${foto}"><div class=m><i>MG</i><b>Martin de Groot</b></div>
<h1>Metselwerk, voegwerk <span>en stucwerk.</span></h1><p>Aannemer in Ouderkerk aan den IJssel</p>`);
await p.waitForTimeout(300);
await p.screenshot({ path: 'public/og.jpg', type: 'jpeg', quality: 84 }); await b.close();
