// public/og.jpg (1200x630): havermout vlak met woordmerk en kop links, eigen hero-foto rechts, in Work Sans.
import { chromium } from 'playwright'; import fs from 'node:fs';
const font = fs.readFileSync('node_modules/@fontsource-variable/work-sans/files/work-sans-latin-wght-normal.woff2').toString('base64');
const foto = fs.readFileSync('src/assets/hero.jpg').toString('base64');
const mark = fs.readFileSync('public/logo-mark.png').toString('base64');
const b = await chromium.launch(); const p = await b.newPage({ viewport: { width: 1200, height: 630 } });
await p.setContent(`<style>@font-face{font-family:W;src:url(data:font/woff2;base64,${font}) format('woff2');font-weight:100 900}
body{margin:0;width:1200px;height:630px;background:#f3f1ea;color:#151b17;font-family:W;position:relative;overflow:hidden}
img.f{position:absolute;right:0;top:0;width:480px;height:630px;object-fit:cover;object-position:50% 62%}
.m{position:absolute;left:72px;top:64px;display:flex;align-items:center;gap:14px}
.m i{display:block;width:62px;height:40px;background:#151b17;-webkit-mask:url(data:image/png;base64,${mark}) center/contain no-repeat}
.m b{display:block;font-weight:800;font-size:30px;letter-spacing:-.04em;line-height:1}.m small{display:block;margin-top:5px;font-size:12px;letter-spacing:.3em;font-weight:600;color:#43574b}
h1{position:absolute;left:72px;top:190px;width:620px;margin:0;font-weight:800;font-size:76px;line-height:.98;letter-spacing:-.045em}
h1 span{color:#43574b}
p{position:absolute;left:72px;bottom:64px;width:560px;margin:0;font-size:20px;line-height:1.4;color:#565f58}</style>
<img class=f src="data:image/jpeg;base64,${foto}"><div class=m><i></i><span><b>Esther</b><small>HONDENTRIMSALON</small></span></div>
<h1>Alle honden en katten zijn <span>welkom.</span></h1><p>Trimmen, gedragstherapie en puppytraining<br>in Krimpen aan den IJssel</p>`);
await p.waitForTimeout(400);
await p.screenshot({ path: 'public/og.jpg', type: 'jpeg', quality: 84 }); await b.close();
