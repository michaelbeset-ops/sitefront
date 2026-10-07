// public/og.jpg (1200x630): hun terrasfoto, kop in Bayon, logo-oranje.
import { chromium } from 'playwright'; import fs from 'node:fs';
const font = fs.readFileSync('node_modules/@fontsource/bayon/files/bayon-latin-400-normal.woff2').toString('base64');
const sans = fs.readFileSync('node_modules/@fontsource-variable/golos-text/files/golos-text-latin-wght-normal.woff2').toString('base64');
const foto = fs.readFileSync('src/assets/terras-nieuw-doek.jpg').toString('base64');
const b = await chromium.launch(); const p = await b.newPage({ viewport: { width: 1200, height: 630 } });
await p.setContent(`<style>@font-face{font-family:B;src:url(data:font/woff2;base64,${font}) format('woff2')}@font-face{font-family:G;src:url(data:font/woff2;base64,${sans}) format('woff2');font-weight:100 900}
body{margin:0;width:1200px;height:630px;background:#232322;color:#fff;position:relative;overflow:hidden;font-family:G}
.f{position:absolute;inset:0;width:1200px;height:630px;object-fit:cover;object-position:50% 40%}
.g{position:absolute;inset:0;background:linear-gradient(180deg,#232322b3 0%,#23232220 30%,#23232266 55%,#232322f5 92%)}
h1{position:absolute;left:64px;bottom:96px;margin:0;font:400 128px/.84 B;text-transform:uppercase}
h1 span{color:#f39a2b}
.m{position:absolute;left:64px;top:44px;display:flex;align-items:center;gap:12px;font-weight:850;font-size:34px;letter-spacing:.02em}
.m small{display:block;font-size:12px;letter-spacing:.38em;color:#f39a2b;font-weight:600;margin-top:2px}
p{position:absolute;left:66px;bottom:44px;margin:0;font-size:24px;color:#ffffffe0}
.l{position:absolute;right:64px;bottom:50px;font-size:20px;color:#ffffffc0}</style>
<img class=f src="data:image/jpeg;base64,${foto}"><div class=g></div>
<div class=m><svg viewBox="0 0 48 48" width="52" height="52"><g fill="#f5a733">${Array.from({length:14},(_, i)=>`<path d="M24 1.5 26.6 8h-5.2Z" transform="rotate(${i*360/14} 24 24)"/>`).join('')}</g><circle cx="24" cy="24" r="13" fill="none" stroke="#f5a733" stroke-width="5"/></svg><div>KILA<small>ZONWERINGEN</small></div></div>
<h1>Zelf gemeten.<br><span>Zelf gemonteerd.</span></h1><p>Zonwering en rolluiken op maat, Zwijndrecht en omgeving</p>`);
await p.waitForTimeout(500);
await p.screenshot({ path: 'public/og.jpg', type: 'jpeg', quality: 80 }); await b.close();
