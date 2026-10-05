// public/og.jpg (1200x630): roze vlak met woordmerk en kop in Gloock, sfeerbeeld rechts.
import { chromium } from 'playwright'; import fs from 'node:fs';
const font = fs.readFileSync('node_modules/@fontsource/gloock/files/gloock-latin-400-normal.woff2').toString('base64');
const foto = fs.readFileSync('src/assets/sfeer-jurken.jpg').toString('base64');
const b = await chromium.launch(); const p = await b.newPage({ viewport: { width: 1200, height: 630 } });
await p.setContent(`<style>@font-face{font-family:G;src:url(data:font/woff2;base64,${font}) format('woff2')}
body{margin:0;width:1200px;height:630px;background:#fbe4ec;color:#24161c;font-family:G;position:relative;overflow:hidden}
img{position:absolute;right:0;top:0;width:480px;height:630px;object-fit:cover}
.m{position:absolute;left:72px;top:64px;font-size:34px;letter-spacing:.03em}
h1{position:absolute;left:72px;bottom:120px;width:620px;margin:0;font-weight:400;font-size:82px;line-height:.98;letter-spacing:-.02em}
h1 span{color:#cf2462}
p{position:absolute;left:72px;bottom:62px;margin:0;font:600 19px system-ui;color:#6b5960}</style>
<img src="data:image/jpeg;base64,${foto}"><div class=m>FANCY BIRD</div>
<h1>Het modewinkeltje in <span>Spijkenisse</span></h1><p>Nieuwstraat 188 · Stadsplein Shopping Center</p>`);
await p.waitForTimeout(300);
await p.screenshot({ path: 'public/og.jpg', type: 'jpeg', quality: 84 }); await b.close();
