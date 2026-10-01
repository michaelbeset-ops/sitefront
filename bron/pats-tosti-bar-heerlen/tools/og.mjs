// WhatsApp-linkvoorbeeld public/og.jpg (1200x630): witte wand met banier en kop, de voorste zaal rechts.
// Draaien vanuit scratchpad/pw (daar staat playwright): node <pad>/tools/og.mjs <pad>
import { chromium } from 'playwright'; import fs from 'node:fs';
const d = process.argv[2];
const b64 = (f) => fs.readFileSync(f).toString('base64');
const foto = b64(`${d}/src/assets/zaal.jpg`);
const font = b64(`${d}/node_modules/@fontsource-variable/big-shoulders/files/big-shoulders-latin-wght-normal.woff2`);
const b = await chromium.launch(); const p = await b.newPage({ viewport: { width: 1200, height: 630 } });
await p.setContent(`<style>@font-face{font-family:BS;src:url(data:font/woff2;base64,${font}) format('woff2');font-weight:100 900}
body{margin:0;width:1200px;height:630px;background:#f3f3f0;color:#171615;font-family:BS,sans-serif;position:relative;overflow:hidden}
.b{position:absolute;left:48px;top:0;width:64px;padding:34px 0 30px;background:#7b1e2c;color:#fff;font-weight:700;font-size:32px;line-height:1;display:flex;flex-direction:column;align-items:center;gap:6px}
h1{position:absolute;left:150px;top:110px;margin:0;font-weight:800;font-size:116px;line-height:.86;text-transform:uppercase;width:470px}
p{position:absolute;left:152px;bottom:52px;margin:0;font:500 26px system-ui,sans-serif;color:#4a4744}
img{position:absolute;right:0;top:0;width:560px;height:630px;object-fit:cover;object-position:22% 50%}</style>
<div class="b">${'TOSTIBAR'.split('').map((l) => `<span>${l}</span>`).join('')}</div>
<h1>Pat's Tosti Bar</h1><p>Saroleastraat 66, Heerlen</p><img src="data:image/jpeg;base64,${foto}">`);
await p.waitForTimeout(300);
await p.screenshot({ path: `${d}/public/og.jpg`, type: 'jpeg', quality: 80 }); await b.close();
