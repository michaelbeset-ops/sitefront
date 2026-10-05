import { chromium } from 'playwright'; import fs from 'node:fs'; import http from 'node:http';
const srv = http.createServer((q, r) => { const f = 'bron/img/bouman-movie.mp4'; const st = fs.statSync(f); const range = q.headers.range;
  if (q.url === '/') { r.writeHead(200, {'content-type':'text/html'}); return r.end('<video id=v src="/v.mp4" muted playsinline style="width:1920px"></video>'); }
  if (range) { const [s, e] = range.replace('bytes=', '').split('-'); const start = +s, end = e ? +e : st.size - 1; r.writeHead(206, { 'Content-Range': `bytes ${start}-${end}/${st.size}`, 'Accept-Ranges': 'bytes', 'Content-Length': end - start + 1, 'Content-Type': 'video/mp4' }); fs.createReadStream(f, { start, end }).pipe(r); }
  else { r.writeHead(200, { 'Content-Length': st.size, 'Content-Type': 'video/mp4' }); fs.createReadStream(f).pipe(r); } }).listen(4593);
const b = await chromium.launch({ channel: 'chrome' }); const p = await b.newPage({ viewport: { width: 1920, height: 1080 } });
await p.goto('http://localhost:4593/'); await p.waitForFunction(() => document.getElementById('v').readyState >= 1, null, { timeout: 20000 });
const info = await p.evaluate(() => { const v = document.getElementById('v'); return [v.duration, v.videoWidth, v.videoHeight]; }); console.log(info);
const [dur, w, h] = info; await p.setViewportSize({ width: w, height: h }); await p.evaluate(([w]) => { document.body.style.margin = 0; document.getElementById('v').style.width = w + 'px'; }, [w]);
const N = +(process.argv[2] || 24);
for (let i = 0; i < N; i++) { const t = (dur * (i + 0.5)) / N; await p.evaluate((t) => new Promise(r => { const v = document.getElementById('v'); v.onseeked = () => r(); v.currentTime = t; }), t); await p.waitForTimeout(250);
  await p.screenshot({ path: `bron/vid/f${String(i).padStart(2, '0')}-${t.toFixed(1)}.jpg`, type: 'jpeg', quality: 92 }); }
await b.close(); srv.close();
