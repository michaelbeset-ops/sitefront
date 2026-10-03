// public/og.jpg (1200x630): nacht-vlak met beeldmerk en kop links, eigen hero-foto rechts, in de eigen letter.
import { chromium } from 'playwright'; import fs from 'node:fs';
const font = fs.readFileSync('node_modules/@fontsource-variable/wix-madefor-display/files/wix-madefor-display-latin-wght-normal.woff2').toString('base64');
const foto = fs.readFileSync('src/assets/hero.jpg').toString('base64');
const merk = fs.readFileSync('src/assets/merk.png').toString('base64');
const b = await chromium.launch(); const p = await b.newPage({ viewport: { width: 1200, height: 630 } });
await p.setContent(`<style>@font-face{font-family:W;src:url(data:font/woff2;base64,${font}) format('woff2');font-weight:400 800}
body{margin:0;width:1200px;height:630px;background:#0f1d24;color:#f7f5f1;font-family:W;position:relative;overflow:hidden}
.f{position:absolute;right:0;top:0;width:560px;height:630px;object-fit:cover;object-position:55% 55%}
.m{position:absolute;left:72px;top:64px;display:flex;align-items:center;gap:16px}
.m span{display:grid;place-items:center;width:64px;height:64px;background:#f7f5f1;border-radius:6px}.m img{width:44px}
.m b{font-weight:800;font-size:30px;letter-spacing:-.03em;display:block}.m small{display:block;font-size:13px;letter-spacing:.26em;text-transform:uppercase;font-weight:700;color:#a9d3e1;margin-top:4px}
h1{position:absolute;left:72px;bottom:150px;width:560px;margin:0;font-weight:800;font-size:64px;line-height:1;letter-spacing:-.035em}
h1 em{font-style:normal;color:#a9d3e1}
p{position:absolute;left:72px;bottom:72px;margin:0;font-size:19px;font-weight:600;color:#b4c2c8}</style>
<img class=f src="data:image/jpeg;base64,${foto}"><div class=m><span><img src="data:image/png;base64,${merk}"></span><div><b>Van der Meij</b><small>Timmerbedrijf</small></div></div>
<h1>Buitenverblijven met <em>oog voor detail.</em></h1><p>Overkappingen, veranda’s en bergingen · Pijnacker</p>`);
await p.waitForTimeout(400);
await p.screenshot({ path: 'public/og.jpg', type: 'jpeg', quality: 84 }); await b.close();
