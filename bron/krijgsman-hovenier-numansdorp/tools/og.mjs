// public/og.jpg (1200x630): donker vlak met woordmerk en kop links, eigen hero-foto rechts.
import { chromium } from 'playwright'; import fs from 'node:fs';
const font = fs.readFileSync('node_modules/@fontsource-variable/syne/files/syne-latin-wght-normal.woff2').toString('base64');
const foto = fs.readFileSync('src/assets/hero.jpg').toString('base64');
const merk = fs.readFileSync('public/merk.png').toString('base64');
const b = await chromium.launch(); const p = await b.newPage({ viewport: { width: 1200, height: 630 } });
await p.setContent(`<style>@font-face{font-family:S;src:url(data:font/woff2;base64,${font}) format('woff2');font-weight:400 800}
body{margin:0;width:1200px;height:630px;background:#101511;color:#f6f4ee;font-family:S;position:relative;overflow:hidden}
.f{position:absolute;right:0;top:0;width:500px;height:630px;object-fit:cover;object-position:60% 60%}
.m{position:absolute;left:72px;top:64px;display:flex;align-items:center;gap:16px}.m img{width:64px;height:64px}
.m b{display:block;font-size:26px;line-height:1;text-transform:uppercase;font-weight:700}.m b span{display:block}.m b span:first-child{color:#f39257}
h1{position:absolute;left:72px;bottom:140px;margin:0;font-weight:800;font-size:82px;line-height:.98;letter-spacing:-.04em}h1 span{color:#f39257}
p{position:absolute;left:72px;bottom:72px;margin:0;font-size:20px;letter-spacing:.14em;text-transform:uppercase;font-weight:600;color:#b9c1ba}</style>
<img class=f src="data:image/jpeg;base64,${foto}"><div class=m><img src="data:image/png;base64,${merk}"><b><span>Krijgsman</span><span>Hovenier</span></b></div>
<h1>Uw tuin,<br><span>mijn zorg.</span></h1><p>Hovenier in Numansdorp</p>`);
await p.waitForTimeout(300);
await p.screenshot({ path: 'public/og.jpg', type: 'jpeg', quality: 84 }); await b.close();
