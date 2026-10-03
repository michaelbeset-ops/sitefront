// public/og.jpg (1200x630): nacht-vlak met woordmerk en kop links, eigen hero-foto rechts, in Prompt.
import { chromium } from 'playwright'; import fs from 'node:fs';
const font = fs.readFileSync('node_modules/@fontsource/prompt/files/prompt-latin-700-normal.woff2').toString('base64');
const foto = fs.readFileSync('src/assets/hero.jpg').toString('base64');
const b = await chromium.launch(); const p = await b.newPage({ viewport: { width: 1200, height: 630 } });
await p.setContent(`<style>@font-face{font-family:P;src:url(data:font/woff2;base64,${font}) format('woff2');font-weight:700}
body{margin:0;width:1200px;height:630px;background:#121a22;color:#f5f3ee;font-family:P;position:relative;overflow:hidden}
img{position:absolute;right:0;top:0;width:520px;height:630px;object-fit:cover;object-position:62% 50%}
.m{position:absolute;left:72px;top:68px;display:flex;align-items:center;gap:16px;font-size:34px;letter-spacing:-.03em}
h1{position:absolute;left:72px;bottom:150px;width:560px;margin:0;font-size:64px;line-height:1.02;letter-spacing:-.035em}
h1 span{color:#f4c430} p{position:absolute;left:72px;bottom:76px;margin:0;font-size:20px;color:#b4bdc6;font-family:system-ui;font-weight:600}</style>
<img src="data:image/jpeg;base64,${foto}"><div class=m><svg width="58" height="48" viewBox="0 0 48 40"><circle cx="14" cy="13" r="11" fill="#f4c430"/><path d="M7 35V23c0-3.3 2.7-6 6-6h20c4.6 0 8.6 3.1 9.7 7.6L45 35Z" fill="#3d7cc9"/></svg>Hansler</div>
<h1>Rolluiken en zonwering, <span>op maat</span>.</h1><p>Vang 13F, Halsteren &middot; 06 22 74 57 08</p>`);
await p.waitForTimeout(300);
await p.screenshot({ path: 'public/og.jpg', type: 'jpeg', quality: 84 }); await b.close();
