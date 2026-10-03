// public/og.jpg (1200x630): nachtblauw vlak met woordmerk en kop links, eigen pandfoto rechts, in Rubik.
import { chromium } from 'playwright'; import fs from 'node:fs';
const font = fs.readFileSync('node_modules/@fontsource-variable/rubik/files/rubik-latin-wght-normal.woff2').toString('base64');
const foto = fs.readFileSync('src/assets/deur.jpg').toString('base64');
const b = await chromium.launch(); const p = await b.newPage({ viewport: { width: 1200, height: 630 } });
await p.setContent(`<style>@font-face{font-family:R;src:url(data:font/woff2;base64,${font}) format('woff2');font-weight:300 900}
body{margin:0;width:1200px;height:630px;background:#121a2e;color:#f6f4ef;font-family:R;position:relative;overflow:hidden}
img{position:absolute;right:0;top:0;width:440px;height:630px;object-fit:cover;object-position:45% 55%}
.m{position:absolute;left:72px;top:72px;display:flex;align-items:center;gap:16px}
.m i{display:grid;place-items:center;width:52px;height:52px;border-radius:16px;background:#2447b3}
.m b{display:block;font-weight:800;font-size:28px;letter-spacing:-.03em}.m small{display:block;margin-top:6px;font-size:13px;letter-spacing:.24em;text-transform:uppercase;font-weight:600;color:#b8bfd0}
h1{position:absolute;left:72px;bottom:150px;width:640px;margin:0;font-weight:800;font-size:72px;line-height:.98;letter-spacing:-.04em}
h1 span{color:#a9c1ff}
p{position:absolute;left:72px;bottom:72px;margin:0;font-size:18px;letter-spacing:.16em;text-transform:uppercase;font-weight:600;color:#b8bfd0}</style>
<img src="data:image/jpeg;base64,${foto}"><div class=m><i><svg width="26" height="26" viewBox="0 0 24 24" fill="#fff"><ellipse cx="6.2" cy="10.2" rx="2.1" ry="2.6" transform="rotate(-18 6.2 10.2)"/><ellipse cx="10" cy="6.2" rx="2.1" ry="2.7"/><ellipse cx="14.6" cy="6.2" rx="2.1" ry="2.7"/><ellipse cx="18.2" cy="10.2" rx="2.1" ry="2.6" transform="rotate(18 18.2 10.2)"/><path d="M12.3 11.4c2.6 0 5.6 3.7 5.6 6.1 0 1.7-1.2 2.6-2.7 2.6-1.1 0-1.8-.6-2.9-.6s-1.8.6-2.9.6c-1.5 0-2.7-.9-2.7-2.6 0-2.4 3-6.1 5.6-6.1Z"/></svg></i><span><b>Van de Witte Rekeltjes</b><small>Hondentrimsalon</small></span></div>
<h1>Uw hond, vakkundig en <span>liefdevol</span> getrimd.</h1><p>Noldijk 97, Barendrecht</p>`);
await p.waitForTimeout(300);
await p.screenshot({ path: 'public/og.jpg', type: 'jpeg', quality: 84 }); await b.close();
