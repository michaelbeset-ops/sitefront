// Download alle eigen foto's per pagina (grootste variant per upload-id) + contactsheet met nummers.
import fs from 'node:fs'; import path from 'node:path';
import { createRequire } from 'node:module';
const require = createRequire('C:/Users/Micha/Downloads/Sitefront/werkwijze/tools/');
const sharp = require('sharp');
const dir = 'bron/web/site'; const out = 'bron/foto/site'; fs.mkdirSync(out, { recursive: true });
const best = new Map(); // id -> {url, size, pagina}
for (const f of fs.readdirSync(dir)) {
  const h = fs.readFileSync(path.join(dir, f), 'utf8'); const host = f.split('_')[0];
  for (const m of h.matchAll(/(https?:\/\/[^"' )]+?\/storage\/app\/uploads\/public\/(\w{3})\/(\w{3})\/(\w{3})\/[^"' )]+\.(?:jpe?g|png|webp))/gi)) {
    const id = m[2] + m[3] + m[4]; const u = m[1]; const sz = Number(u.match(/thumb__(\d+)/)?.[1] || 9999);
    const cur = best.get(id); if (!cur || sz > cur.size) best.set(id, { url: u, size: sz, pagina: cur?.pagina || f.replace(/\.html$/, '') });
  }
}
const lijst = [];
let i = 0;
for (const [id, v] of best) {
  i++; const ext = path.extname(v.url).toLowerCase(); const naam = `${String(i).padStart(3, '0')}-${id}${ext}`;
  try { const r = await fetch(v.url); if (!r.ok) { console.log('X', r.status, v.url); continue; } fs.writeFileSync(path.join(out, naam), Buffer.from(await r.arrayBuffer())); } catch (e) { console.log('X', v.url); continue; }
  const meta = await sharp(path.join(out, naam)).metadata().catch(() => ({}));
  lijst.push(`${naam}\t${meta.width}x${meta.height}\t${v.pagina}\t${v.url}`);
}
fs.writeFileSync('bron/foto/site.txt', lijst.join('\n'));
// sheet
const tiles = []; const W = 260;
for (const [k, l] of lijst.entries()) { const n = l.split('\t')[0];
  try { const buf = await sharp(path.join(out, n)).resize(W, W, { fit: 'cover' }).toBuffer();
    const lab = Buffer.from(`<svg width="${W}" height="26"><rect width="${W}" height="26" fill="#000"/><text x="6" y="19" font-size="16" fill="#fff" font-family="Arial">${n.slice(0, 3)} ${l.split('\t')[1]}</text></svg>`);
    tiles.push({ input: buf, left: (k % 8) * (W + 6), top: Math.floor(k / 8) * (W + 6) }, { input: lab, left: (k % 8) * (W + 6), top: Math.floor(k / 8) * (W + 6) });
  } catch {} }
const rows = Math.ceil(lijst.length / 8);
await sharp({ create: { width: 8 * (W + 6), height: rows * (W + 6), channels: 3, background: '#fff' } }).composite(tiles).jpeg({ quality: 72 }).toFile('bron/foto/site-sheet.jpg');
console.log(lijst.length);
