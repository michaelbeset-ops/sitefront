// public/og.jpg (1200x630): kalkwitte lijst rond hun Gorinchem-foto, kop in Bellefair, ruitjeslogo.
import { chromium } from 'playwright'; import fs from 'node:fs'; import sharp from 'sharp';
const font = fs.readFileSync('node_modules/@fontsource/bellefair/files/bellefair-latin-400-normal.woff2').toString('base64');
const foto = (await sharp('src/assets/gorinchem-markiezen.jpg').resize(1400).jpeg({ quality: 85 }).toBuffer()).toString('base64');
const b = await chromium.launch(); const p = await b.newPage({ viewport: { width: 1200, height: 630 } });
const ruit = (x, y, vol) => `<polygon points="${x},${y - 8} ${x + 8},${y} ${x},${y + 8} ${x - 8},${y}" fill="${vol ? '#c8a87a' : 'none'}" stroke="${vol ? '#c8a87a' : '#ffffffcc'}" stroke-width="1.2"/>`;
const logo = `<svg width="56" height="56" viewBox="0 0 52 52">${[0,1,2].flatMap(i=>[0,1,2].map(j=>ruit(26+(j-i)*8,6+(i+j)*8,(i+j)%2===1))).join('')}</svg>`;
await p.setContent(`<style>@font-face{font-family:B;src:url(data:font/woff2;base64,${font}) format('woff2')}
body{margin:0;width:1200px;height:630px;background:#f4f3ef;position:relative;overflow:hidden;font-family:system-ui}
.r{position:absolute;inset:18px;overflow:hidden;background:#222427}
.f{position:absolute;inset:0;width:100%;height:100%;object-fit:cover;object-position:50% 62%}
.g{position:absolute;inset:0;background:linear-gradient(180deg,#22242700 25%,#222427b3 62%,#222427f2 100%),linear-gradient(90deg,#222427aa 0%,#22242700 60%)}
h1{position:absolute;left:58px;bottom:110px;margin:0;font:400 84px/1 B;color:#fff;letter-spacing:-.01em;max-width:900px}
.m{position:absolute;left:58px;bottom:48px;display:flex;align-items:center;gap:16px;color:#fff}
.m b{font:400 30px B;letter-spacing:.32em}.m i{font-style:normal;font-size:15px;font-weight:600;letter-spacing:.24em;color:#e6d3b6;text-transform:uppercase}
.s{position:absolute;right:48px;bottom:56px;color:#ffffffd9;font-size:20px}</style>
<div class=r><img class=f src="data:image/jpeg;base64,${foto}"><div class=g></div>
<h1>Op maat gemaakt,<br>keurig gemonteerd.</h1>
<div class=m>${logo}<b>TERLOUW</b><i>Interieur &amp; montage</i></div><div class=s>Showroom Werkendam</div></div>`);
await p.waitForTimeout(500);
await p.screenshot({ path: 'public/og.jpg', type: 'jpeg', quality: 82 }); await b.close();
console.log(Math.round(fs.statSync('public/og.jpg').size / 1024) + ' KB');
