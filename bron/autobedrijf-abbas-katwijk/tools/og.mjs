// public/og.jpg (1200x630): nachtblauw vlak met woordmerk en kop links, eigen hero-foto rechts, in Oxanium.
import { chromium } from 'playwright'; import fs from 'node:fs';
const font = fs.readFileSync('node_modules/@fontsource-variable/oxanium/files/oxanium-latin-wght-normal.woff2').toString('base64');
const foto = fs.readFileSync('src/assets/hero.jpg').toString('base64');
const b = await chromium.launch(); const p = await b.newPage({ viewport: { width: 1200, height: 630 } });
await p.setContent(`<style>@font-face{font-family:O;src:url(data:font/woff2;base64,${font}) format('woff2');font-weight:200 800}
body{margin:0;width:1200px;height:630px;background:#0c1424;color:#f3f4f6;font-family:O;position:relative;overflow:hidden}
img{position:absolute;right:0;top:0;width:560px;height:630px;object-fit:cover;object-position:28% 60%}
.m{position:absolute;left:72px;top:68px}.m small{display:block;font-size:15px;letter-spacing:.32em;color:#aeb7c8;font-weight:600}.m b{display:block;font-size:44px;letter-spacing:.06em;font-weight:800;margin-top:4px}
h1{position:absolute;left:72px;bottom:150px;width:560px;margin:0;font-weight:700;font-size:62px;line-height:1.02;letter-spacing:-.02em}h1 span{color:#8eaaff}
p{position:absolute;left:72px;bottom:72px;margin:0;font-size:19px;letter-spacing:.14em;text-transform:uppercase;font-weight:600;color:#aeb7c8}
i{position:absolute;left:72px;bottom:118px;width:48px;height:3px;background:#1f44c4}</style>
<img src="data:image/jpeg;base64,${foto}"><div class=m><small>AUTOBEDRIJF</small><b>ABBAS</b></div>
<h1>Onderhoud, APK en <span>betrouwbare occasions.</span></h1><p>RDW-erkend sinds 2013 · Katwijk</p>`);
await p.waitForTimeout(300);
await p.screenshot({ path: 'public/og.jpg', type: 'jpeg', quality: 84 }); await b.close();
