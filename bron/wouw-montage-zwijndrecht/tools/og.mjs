// public/og.jpg 1200x630: de twee deuren met Bungee-koppen en de rode &.
import { createRequire } from 'node:module'; import fs from 'node:fs';
const rq = createRequire('C:/Users/Micha/Downloads/Sitefront/werkwijze/tools/'); const { chromium } = rq('playwright');
const font = fs.readFileSync('node_modules/@fontsource/bungee/files/bungee-latin-400-normal.woff2').toString('base64');
const a = fs.readFileSync('src/assets/deur-donker.jpg').toString('base64'), z = fs.readFileSync('src/assets/knikarm-palm.jpg').toString('base64');
const b = await chromium.launch(); const p = await b.newPage({ viewport: { width: 1200, height: 630 } });
await p.setContent(`<style>@font-face{font-family:B;src:url(data:font/woff2;base64,${font}) format('woff2')}
body{margin:0;width:1200px;height:630px;background:#121a2c;color:#fff;position:relative;overflow:hidden;font-family:system-ui;display:grid;grid-template-columns:1fr 1fr}
.h{position:relative;overflow:hidden}.h img{position:absolute;inset:0;width:100%;height:100%;object-fit:cover}
.h:after{content:"";position:absolute;inset:0;background:linear-gradient(180deg,#121a2c99 0%,#121a2c10 35%,#121a2ce6 100%)}
h1{position:absolute;bottom:92px;margin:0;font:400 64px/0.95 B;text-transform:uppercase;z-index:2}
.l h1{left:56px}.r h1{left:56px}
p{position:absolute;bottom:50px;left:56px;margin:0;font-size:22px;color:#ffffffd9;z-index:2}
.amp{position:absolute;left:560px;top:275px;width:80px;height:80px;border-radius:50%;background:#e8392e;display:grid;place-items:center;font:400 38px B;z-index:3}
.bies{position:absolute;left:0;right:0;bottom:0;height:12px;background:#f3f2ee;z-index:4}.bies:before{content:"";position:absolute;left:0;top:0;bottom:0;width:150px;background:#e8392e;clip-path:polygon(0 0,100% 0,calc(100% - 12px) 100%,0 100%)}</style>
<div class="h l"><img src="data:image/jpeg;base64,${a}" style="object-position:50% 62%"><h1>Garage-<br>deuren</h1><p>Wouw Montage, Zwijndrecht</p></div>
<div class="h r"><img src="data:image/jpeg;base64,${z}" style="object-position:40% 50%"><h1>Zonwering</h1><p>Leveren, monteren, onderhouden</p></div>
<div class="amp">&amp;</div><div class="bies"></div>`);
await p.waitForTimeout(500);
await p.screenshot({ path: 'public/og.jpg', type: 'jpeg', quality: 82 }); await b.close();
console.log(fs.statSync('public/og.jpg').size);
