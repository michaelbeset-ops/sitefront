// public/og.jpg (1200x630): marine vlak met logo en kop links, eigen werkplaatsfoto rechts, in Exo 2.
import { chromium } from 'playwright'; import fs from 'node:fs';
const font = fs.readFileSync('node_modules/@fontsource-variable/exo-2/files/exo-2-latin-wght-normal.woff2').toString('base64');
const foto = fs.readFileSync('src/assets/monteur.jpg').toString('base64');
const b = await chromium.launch(); const p = await b.newPage({ viewport: { width: 1200, height: 630 } });
await p.setContent(`<style>@font-face{font-family:E;src:url(data:font/woff2;base64,${font}) format('woff2');font-weight:100 900}
body{margin:0;width:1200px;height:630px;background:#1a2044;color:#f4f5f8;font-family:E;position:relative;overflow:hidden}
img{position:absolute;right:0;top:0;width:520px;height:630px;object-fit:cover;object-position:62% 50%}
.f{position:absolute;right:0;top:0;width:520px;height:630px;background:linear-gradient(90deg,#1a2044 0%,#1a204400 35%)}
svg{position:absolute;left:72px;top:64px;width:250px}
h1{position:absolute;left:72px;bottom:150px;width:640px;margin:0;font-weight:800;font-size:76px;line-height:.98;letter-spacing:-.02em}
h1 span{color:#ff8796}
p{position:absolute;left:72px;bottom:76px;margin:0;font-size:22px;letter-spacing:.14em;text-transform:uppercase;font-weight:700;color:#bcc2d8}</style>
<img src="data:image/jpeg;base64,${foto}"><div class=f></div>
<svg viewBox="0 0 200 62" fill="none"><path d="M4 52C6 41 16 35 34 32.5 50 16 73 6 100 6s49 9 64 24c18 2.5 30 10 32 22" stroke="#ff8796" stroke-width="2.6" stroke-linecap="round"/><path d="M17 59c4-8 17-8 21 0M162 59c4-8 17-8 21 0" stroke="#ff8796" stroke-width="3" stroke-linecap="round"/><text x="100" y="27" text-anchor="middle" font-family="E" font-size="8.5" font-weight="600" letter-spacing="3.4" fill="#f4f5f8">AUTOBEDRIJF</text><text x="100" y="52" text-anchor="middle" font-family="E" font-size="26" font-weight="800" letter-spacing="2" fill="#f4f5f8">MOTECH</text></svg>
<h1>Goede service, <span>uitstekende</span> prijs.</h1><p>Universeelgarage in Arkel</p>`);
await p.waitForTimeout(400);
await p.screenshot({ path: 'public/og.jpg', type: 'jpeg', quality: 84 }); await b.close();
