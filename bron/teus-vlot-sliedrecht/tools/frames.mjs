import { chromium } from 'playwright'; import fs from 'node:fs'; import http from 'node:http';
const srv = { close() {} };
const b = await chromium.launch({ channel: process.argv[2] || 'msedge' }); const p = await b.newPage();
await p.goto('file:///C:/Users/Micha/Downloads/Sitefront/demos/teus-vlot-sliedrecht/bron/video/v.html');
const info = await p.evaluate(() => new Promise((ok) => { const v = document.getElementById('v'); v.onloadedmetadata = () => ok([v.duration, v.videoWidth, v.videoHeight]); v.onerror = () => ok('err ' + v.error?.code); }));
console.log(info);
if (Array.isArray(info)) { const [d] = info; fs.mkdirSync('bron/video/f', { recursive: true });
  for (let t = 0.5; t < d; t += 1.5) { const data = await p.evaluate((t) => new Promise((ok) => { const v = document.getElementById('v'); v.onseeked = () => { const c = document.createElement('canvas'); c.width = v.videoWidth; c.height = v.videoHeight; c.getContext('2d').drawImage(v, 0, 0); ok(c.toDataURL('image/jpeg', 0.92)); }; v.currentTime = t; }), t);
    fs.writeFileSync(`bron/video/f/f${String(Math.round(t * 10)).padStart(4, '0')}.jpg`, Buffer.from(data.split(',')[1], 'base64')); } }
await b.close(); srv.close();
