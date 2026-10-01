import { chromium } from 'playwright'; import fs from 'node:fs';
const d = process.cwd();
const fonts = [['Geist','geist/files/geist-latin-wght-normal.woff2'],['Inter Tight','inter-tight/files/inter-tight-latin-wght-normal.woff2'],['Manrope','manrope/files/manrope-latin-wght-normal.woff2'],['Plus Jakarta Sans','plus-jakarta-sans/files/plus-jakarta-sans-latin-wght-normal.woff2']];
const ff = fonts.map(([n,f],i)=>`@font-face{font-family:F${i};src:url(data:font/woff2;base64,${fs.readFileSync(d+'/node_modules/@fontsource-variable/'+f).toString('base64')}) format('woff2');font-weight:100 900}`).join('');
const blocks = fonts.map(([n],i)=>`<section style="font-family:F${i}"><small>${n}</small>
<div class=wm>SMELLIES<sup>®</sup></div><div class=tag>Scents &amp; Happiness</div>
<h2>Geur die langzaam smelt.</h2><p class=ui>Geuren · Zo werkt het · Collecties · Groothandel</p>
<p class=b>Handgemaakt van 100% soja- en koolzaadwas, sinds 2013 in Dordrecht. Apple Pie € 2,75 · Sweet Jasmine € 2,75</p></section>`).join('');
const b = await chromium.launch(); const p = await b.newPage({ viewport: { width: 1440, height: 1100 } });
await p.setContent(`<style>${ff} body{margin:0;background:#f4f2ee;color:#2e2f34;display:grid;grid-template-columns:1fr 1fr;gap:0} section{padding:40px;border:1px solid #ddd}
small{font:11px monospace;color:#888} .wm{font-size:58px;font-weight:300;letter-spacing:.32em;margin-top:12px} .wm sup{font-size:.28em;letter-spacing:0;vertical-align:top;position:relative;top:.4em} .tag{font-size:13px;letter-spacing:.04em;margin-top:6px;color:#666}
h2{font-size:64px;font-weight:400;letter-spacing:-.035em;line-height:1;margin:28px 0 16px} .ui{font-size:11px;letter-spacing:.14em;text-transform:uppercase;font-weight:500} .b{font-size:16px;line-height:1.55;color:#5b5c61;font-variant-numeric:tabular-nums;max-width:520px}</style>${blocks}`);
await p.waitForTimeout(400); await p.screenshot({ path: d+'/shots/_fonts.png' }); await b.close();
