// public/og.jpg (1200x630): linnen vlak met woordmerk en kop links, hun eigen loods rechts, in de eigen letter (Cabin).
import { chromium } from 'playwright'; import fs from 'node:fs';
const font = fs.readFileSync('node_modules/@fontsource-variable/cabin/files/cabin-latin-wght-normal.woff2').toString('base64');
const foto = fs.readFileSync('src/assets/pand.jpg').toString('base64');
const b = await chromium.launch(); const p = await b.newPage({ viewport: { width: 1200, height: 630 } });
await p.setContent(`<style>@font-face{font-family:C;src:url(data:font/woff2;base64,${font}) format('woff2');font-weight:400 700}
body{margin:0;width:1200px;height:630px;background:#f6f2eb;color:#1f1c19;font-family:C;position:relative;overflow:hidden}
img{position:absolute;right:0;top:0;width:500px;height:630px;object-fit:cover;object-position:28% 50%}
.m{position:absolute;left:72px;top:68px;display:flex;align-items:center;gap:16px}
.m svg{width:62px;height:52px}.m b{display:block;font-size:36px;letter-spacing:.02em;line-height:1}.m small{display:block;font-size:22px;color:#5f584f;font-weight:500}
h1{position:absolute;left:72px;bottom:150px;width:600px;margin:0;font-weight:700;font-size:70px;line-height:1;letter-spacing:-.025em}
h1 span{color:#a74320}
p{position:absolute;left:72px;bottom:72px;margin:0;font-size:22px;color:#5f584f}</style>
<img src="data:image/jpeg;base64,${foto}"><div class=m><svg viewBox="0 0 220 215"><rect x="0" y="66" width="130" height="112" fill="#0a859f"/><rect x="58" y="0" width="132" height="88" fill="#bf2e0c"/><rect x="128" y="58" width="92" height="157" fill="#974a2e"/></svg><span><b>BAAN</b><small>Woningstoffering</small></span></div>
<h1>Van stalen tot <span>montage</span>, uit één hand.</h1><p>Vloeren, gordijnen en raamdecoratie in Hendrik-Ido-Ambacht</p>`);
await p.waitForTimeout(300);
await p.screenshot({ path: 'public/og.jpg', type: 'jpeg', quality: 84 }); await b.close();
