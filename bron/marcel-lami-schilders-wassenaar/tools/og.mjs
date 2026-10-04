// public/og.jpg (1200x630): eigen hero-foto met nachtblauw verloop, woordmerk en kop in Spectral.
import { chromium } from 'playwright'; import fs from 'node:fs';
const font = fs.readFileSync('node_modules/@fontsource/spectral/files/spectral-latin-700-normal.woff2').toString('base64');
const fontI = fs.readFileSync('node_modules/@fontsource/spectral/files/spectral-latin-700-italic.woff2').toString('base64');
const foto = fs.readFileSync('src/assets/hero.jpg').toString('base64');
const logo = fs.readFileSync('public/logo.svg', 'utf8');
const b = await chromium.launch(); const p = await b.newPage({ viewport: { width: 1200, height: 630 } });
await p.setContent(`<style>@font-face{font-family:S;src:url(data:font/woff2;base64,${font}) format('woff2');font-weight:700}
@font-face{font-family:S;src:url(data:font/woff2;base64,${fontI}) format('woff2');font-weight:700;font-style:italic}
body{margin:0;width:1200px;height:630px;position:relative;overflow:hidden;background:#0e173f;color:#f7f4ee;font-family:S}
img{position:absolute;inset:0;width:100%;height:100%;object-fit:cover;object-position:60% 45%}
.g{position:absolute;inset:0;background:linear-gradient(90deg,#0e173ff5 0%,#0e173fcc 45%,#0e173f22 100%)}
.m{position:absolute;left:72px;top:64px;display:flex;align-items:center;gap:16px;font-size:30px}
.m span{background:#f7f4ee;border-radius:6px;padding:8px 6px;display:block;width:64px}.m svg{width:64px;height:auto;display:block}
h1{position:absolute;left:72px;bottom:120px;width:640px;margin:0;font-size:76px;line-height:1;letter-spacing:-.03em}
h1 em{color:#9fc0ff}
p{position:absolute;left:72px;bottom:64px;margin:0;font:600 17px system-ui;letter-spacing:.18em;text-transform:uppercase;color:#b8bfd6}</style>
<img src="data:image/jpeg;base64,${foto}"><div class=g></div><div class=m><span>${logo}</span>Marcel l’Ami &amp; Zn.</div>
<h1>Vakwerk voor huizen met <em>karakter</em>.</h1><p>Schildersbedrijf in Wassenaar · sinds 1932</p>`);
await p.waitForTimeout(300);
await p.screenshot({ path: 'public/og.jpg', type: 'jpeg', quality: 84 }); await b.close();
