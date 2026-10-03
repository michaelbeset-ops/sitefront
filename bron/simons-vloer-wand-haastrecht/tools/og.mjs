// public/og.jpg (1200x630): grafiet vlak met woordmerk en kop links, hun Weense punt rechts, in Mulish.
import { chromium } from 'playwright'; import fs from 'node:fs';
const font = fs.readFileSync('node_modules/@fontsource-variable/mulish/files/mulish-latin-wght-normal.woff2').toString('base64');
const foto = fs.readFileSync('src/assets/weense-punt.jpg').toString('base64');
const b = await chromium.launch(); const p = await b.newPage({ viewport: { width: 1200, height: 630 } });
await p.setContent(`<style>@font-face{font-family:M;src:url(data:font/woff2;base64,${font}) format('woff2');font-weight:200 1000}
body{margin:0;width:1200px;height:630px;background:#171716;color:#f5f3ee;font-family:M;position:relative;overflow:hidden}
img{position:absolute;right:0;top:0;width:520px;height:630px;object-fit:cover;object-position:75% 80%}
.m{position:absolute;left:72px;top:68px;display:flex;align-items:center;gap:6px}
.m i{display:block;width:16px;height:50px}.m i:nth-child(1){background:#b4b4b2}.m i:nth-child(2){background:#6c6c6a}
.m .s{width:50px;height:50px;background:#f5f3ee;color:#171716;display:grid;place-items:center;font-weight:900;font-size:36px}
.m b{font-weight:900;font-size:36px;letter-spacing:.01em;line-height:1}.m small{display:block;font-size:17px;font-weight:700;color:#b7b4ac;margin-top:4px}
h1{position:absolute;left:72px;bottom:140px;width:580px;margin:0;font-weight:800;font-size:66px;line-height:1;letter-spacing:-.045em}
h1 span{color:#a3cfb5}
p{position:absolute;left:72px;bottom:72px;margin:0;font-size:18px;letter-spacing:.18em;text-transform:uppercase;font-weight:800;color:#a3cfb5}</style>
<img src="data:image/jpeg;base64,${foto}"><div class=m><i></i><i></i><span class=s>S</span><span><b>IMONS</b><small>vloer &amp; wand</small></span></div>
<h1>Vakwerk in hout, <span>van vader op zoon.</span></h1><p>Meesterparketteur in Haastrecht</p>`);
await p.waitForTimeout(300);
await p.screenshot({ path: 'public/og.jpg', type: 'jpeg', quality: 84 }); await b.close();
