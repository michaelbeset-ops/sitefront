// public/og.jpg (1200x630): hero-sfeerbeeld + kop in Michroma + maatlijn.
import { chromium } from 'playwright'; import fs from 'node:fs'; import sharp from 'sharp';
const font = fs.readFileSync('node_modules/@fontsource/michroma/files/michroma-latin-400-normal.woff2').toString('base64');
const foto = (await sharp('src/assets/draaien-as.jpg').resize(1400).jpeg({ quality: 80 }).toBuffer()).toString('base64');
const b = await chromium.launch(); const p = await b.newPage({ viewport: { width: 1200, height: 630 } });
await p.setContent(`<style>@font-face{font-family:M;src:url(data:font/woff2;base64,${font}) format('woff2')}
body{margin:0;width:1200px;height:630px;background:#0a1730;color:#fff;position:relative;overflow:hidden;font-family:system-ui,sans-serif}
img{position:absolute;inset:0;width:100%;height:100%;object-fit:cover;object-position:70% 50%}
.g{position:absolute;inset:0;background:linear-gradient(90deg,#0a1730f5 0%,#0a1730cc 48%,#0a173033 85%)}
small{position:absolute;left:72px;top:92px;font:600 26px system-ui;color:#9fc8ea}
h1{position:absolute;left:70px;top:140px;margin:0;font:400 76px/1.15 M;letter-spacing:-.01em}
p{position:absolute;left:72px;top:372px;margin:0;font-size:28px;color:#ffffffe6;max-width:720px;line-height:1.4}
.m{position:absolute;left:72px;right:72px;bottom:72px;height:1px;background:#6fb0e0}
.m:before,.m:after{content:"";position:absolute;top:-9px;width:1px;height:19px;background:#6fb0e0}.m:before{left:0}.m:after{right:0}
.m span{position:absolute;left:50%;top:-12px;transform:translateX(-50%);background:#0a1730;padding:2px 16px;border-radius:2px;font:400 18px M;color:#fff}
</style><img src="data:image/jpeg;base64,${foto}"><div class=g></div><small>Machinefabriek BGW · Dordrecht</small>
<h1>Lang draaiwerk<br>tot 12 meter.</h1><p>Schroefassen, pompassen, impellerassen en walsrollen.<br>Bel 078 617 96 16.</p><div class=m><span>12.000 mm</span></div>`);
await p.waitForTimeout(500);
await p.screenshot({ path: 'public/og.jpg', type: 'jpeg', quality: 82 }); await b.close();
console.log(fs.statSync('public/og.jpg').size);
