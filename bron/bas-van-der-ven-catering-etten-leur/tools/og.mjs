// public/og.jpg (1200x630): papier links met 98-bordje en kop, hapjesschaal rechts.
import { chromium } from 'playwright'; import fs from 'node:fs';
const font = fs.readFileSync('node_modules/@fontsource/dm-serif-display/files/dm-serif-display-latin-400-normal.woff2').toString('base64');
const foto = fs.readFileSync('src/assets/hapjes.jpg').toString('base64');
const b = await chromium.launch(); const p = await b.newPage({ viewport: { width: 1200, height: 630 } });
await p.setContent(`<style>@font-face{font-family:D;src:url(data:font/woff2;base64,${font}) format('woff2')}
body{margin:0;width:1200px;height:630px;background:#f4f3f0;color:#161616;font-family:D;position:relative;overflow:hidden}
.f{position:absolute;right:0;top:0;width:560px;height:630px;object-fit:cover}
.bord{position:absolute;left:72px;top:110px;width:96px;height:78px;background:#1b2433;color:#fff;border-radius:10px;display:grid;place-items:center;font-size:44px}
.bord:before{content:"";position:absolute;inset:6px;border:2px solid #fff;border-radius:7px}
h1{position:absolute;left:70px;top:220px;margin:0;font-weight:400;font-size:104px;line-height:.95;width:560px}
p{position:absolute;left:72px;top:470px;margin:0;font:400 26px system-ui;color:#5d5a55}
small{position:absolute;left:190px;top:130px;font:500 22px/1.35 system-ui;color:#5d5a55}</style>
<img class=f src="data:image/jpeg;base64,${foto}"><div class=bord>98</div><small>Korte Brugstraat 98<br>Etten-Leur</small>
<h1>Bas &amp; Anneloes</h1><p>Catering, patisserie en traiteur</p>`);
await p.waitForTimeout(400);
await p.screenshot({ path: 'public/og.jpg', type: 'jpeg', quality: 84 }); await b.close();
