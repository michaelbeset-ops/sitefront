import sharp from 'sharp'; import fs from 'node:fs';
const [dir, out, filt=''] = process.argv.slice(2);
const files = fs.readdirSync(dir).filter(f => /\.(jpe?g|png|webp)$/i.test(f) && f.includes(filt)).sort();
const W = 300, H = 300, cols = 6; const rows = Math.ceil(files.length / cols);
const comps = [];
for (const [i, f] of files.entries()) {
  const meta = await sharp(dir + '/' + f).metadata().catch(()=>({}));
  const img = await sharp(dir + '/' + f).resize(W, H - 24, { fit: 'contain', background: '#222' }).toBuffer().catch(()=>null); if (!img) continue;
  const label = Buffer.from(`<svg width="${W}" height="24"><rect width="100%" height="100%" fill="#000"/><text x="4" y="17" font-size="14" fill="#fff" font-family="sans-serif">${f} ${meta.width}x${meta.height}</text></svg>`);
  comps.push({ input: img, left: (i % cols) * W, top: Math.floor(i / cols) * H }, { input: label, left: (i % cols) * W, top: Math.floor(i / cols) * H + H - 24 });
}
await sharp({ create: { width: cols * W, height: rows * H, channels: 3, background: '#111' } }).composite(comps).jpeg({ quality: 80 }).toFile(out);
console.log(files.length);
