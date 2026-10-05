// public/og.jpg (1200x630): indigo vlak met woordmerk en kop links, eigen camperfoto rechts, in Fredoka.
import { chromium } from 'playwright'; import fs from 'node:fs';
const font = fs.readFileSync('node_modules/@fontsource-variable/fredoka/files/fredoka-latin-wght-normal.woff2').toString('base64');
const foto = fs.readFileSync('src/assets/hero.jpg').toString('base64');
const b = await chromium.launch(); const p = await b.newPage({ viewport: { width: 1200, height: 630 } });
await p.setContent(`<style>@font-face{font-family:F;src:url(data:font/woff2;base64,${font}) format('woff2');font-weight:300 700}
body{margin:0;width:1200px;height:630px;background:#1c1747;color:#f7f6f2;font-family:F;position:relative;overflow:hidden}
img{position:absolute;right:0;top:0;width:640px;height:630px;object-fit:cover;object-position:62% 60%}
.v{position:absolute;right:0;top:0;width:640px;height:630px;background:linear-gradient(90deg,#1c1747 0%,#1c174700 40%)}
.m{position:absolute;left:64px;top:64px;display:flex;align-items:center;gap:14px;font-size:30px;font-weight:600}
.m span{background:#312783;border-radius:16px;padding:6px 14px;font-weight:700}
h1{position:absolute;left:64px;bottom:140px;width:620px;margin:0;font-weight:700;font-size:74px;line-height:1;letter-spacing:-.02em}
h1 em{font-style:normal;color:#b8b1ff}
p{position:absolute;left:64px;bottom:64px;margin:0;font-size:24px;font-weight:500;color:#c2bfdc}</style>
<img src="data:image/jpeg;base64,${foto}"><div class=v></div><div class=m><span>JH</span>Camperverhuur</div>
<h1>Zonder zorgen lekker <em>op vakantie.</em></h1><p>Carado V339 huren in Noordeloos</p>`);
await p.waitForTimeout(300);
await p.screenshot({ path: 'public/og.jpg', type: 'jpeg', quality: 84 }); await b.close();
