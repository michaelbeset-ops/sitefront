// public/og.jpg (1200x630): donker vlak met woordmerk en kop links, hero-foto rechts, in Asap.
import { chromium } from 'playwright'; import fs from 'node:fs';
const font = fs.readFileSync('node_modules/@fontsource-variable/asap/files/asap-latin-wght-normal.woff2').toString('base64');
const foto = fs.readFileSync('src/assets/hero.jpg').toString('base64');
const b = await chromium.launch(); const p = await b.newPage({ viewport: { width: 1200, height: 630 } });
await p.setContent(`<style>@font-face{font-family:A;src:url(data:font/woff2;base64,${font}) format('woff2');font-weight:100 900}
body{margin:0;width:1200px;height:630px;background:#0c1714;color:#f3f6f4;font-family:A;position:relative;overflow:hidden}
img{position:absolute;right:0;top:0;width:560px;height:630px;object-fit:cover;object-position:62% 50%}
.f{position:absolute;right:0;top:0;width:560px;height:630px;background:linear-gradient(90deg,#0c1714 0%,#0c171400 45%)}
.m{position:absolute;left:72px;top:68px;display:flex;align-items:center;gap:14px}
.m i{width:48px;height:48px;border-radius:8px;background:#0b6a52;display:grid;place-items:center}
.m b{font-weight:800;font-size:34px;letter-spacing:-.03em;line-height:1}.m small{display:block;font-size:13px;letter-spacing:.2em;text-transform:uppercase;color:#7fe0bd;margin-top:5px;font-weight:600}
h1{position:absolute;left:72px;bottom:150px;width:620px;margin:0;font-weight:800;font-size:76px;line-height:.98;letter-spacing:-.035em}h1 span{color:#7fe0bd}
p{position:absolute;left:72px;bottom:72px;margin:0;font-size:20px;color:#a8bab1}</style>
<img src="data:image/jpeg;base64,${foto}"><div class=f></div><div class=m><i><svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#fff" stroke-width="1.8" stroke-linecap="round"><path d="M12 2.5v19M3.8 7.25l16.4 9.5M3.8 16.75l16.4-9.5"/></svg></i><span><b>Benne</b><small>koeltechniek</small></span></div>
<h1>Airco en koeling, <span>netjes</span> geplaatst.</h1><p>Airco, koel- en vriescellen en onderhoud · Vianen</p>`);
await p.waitForTimeout(300);
await p.screenshot({ path: 'public/og.jpg', type: 'jpeg', quality: 84 }); await b.close();
