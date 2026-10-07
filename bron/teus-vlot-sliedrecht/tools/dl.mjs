import fs from 'node:fs'; import path from 'node:path';
const urls = fs.readFileSync('bron/foto/wp-urls.txt', 'utf8').trim().split('\n'); const seen = new Set(); let n = 0;
const q = [...urls];
async function w() { while (q.length) { const u = q.shift(); const name = u.split('/').slice(-3).join('_'); if (seen.has(name)) continue; seen.add(name);
  const f = `bron/foto/wp/${name}`; if (fs.existsSync(f)) continue;
  try { const r = await fetch(u, { headers: { 'user-agent': 'Mozilla/5.0' } }); if (!r.ok) continue; const b = Buffer.from(await r.arrayBuffer()); if (b.length < 25000) continue; fs.writeFileSync(f, b); n++; } catch {} } }
await Promise.all(Array.from({ length: 8 }, w)); console.log('ok', n);
