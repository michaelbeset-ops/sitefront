// public/og.jpg (1200x630): woordmerk + kop in Instrument Sans, rechts de eigen foto.
import { chromium } from 'playwright'; import fs from 'node:fs';
const font = fs.readFileSync('node_modules/@fontsource-variable/instrument-sans/files/instrument-sans-latin-wght-normal.woff2').toString('base64');
const img = fs.readFileSync('src/assets/laarzen-groen.jpg').toString('base64');
const b = await chromium.launch(); const p = await b.newPage({ viewport: { width: 1200, height: 630 } });
await p.setContent(`<style>@font-face{font-family:I;src:url(data:font/woff2;base64,${font});font-weight:400 700}
body{margin:0;width:1200px;height:630px;display:grid;grid-template-columns:600px 600px;background:#efece6;color:#1d1b18;font-family:I}
.t{padding:64px 56px;display:flex;flex-direction:column;justify-content:space-between}
.w{font-size:17px;font-weight:500;letter-spacing:.34em;text-transform:uppercase}
h1{font-weight:400;font-size:64px;line-height:1.03;letter-spacing:-.035em;margin:0}
.s{font-size:22px;color:#67625a}
img{width:600px;height:630px;object-fit:cover;object-position:50% 62%}</style>
<div class=t><div class=w>Schoenmaker Toon</div><h1>Uw ambachtelijk schoenmaker in Middelharnis.</h1><div class=s>Zandpad 66 &middot; 06 40 71 65 45</div></div><img src="data:image/jpeg;base64,${img}">`);
await p.waitForTimeout(400); await p.screenshot({ path: 'public/og.jpg', type: 'jpeg', quality: 84 }); await b.close();
