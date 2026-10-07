import sharp from 'sharp'; import fs from 'node:fs';
const [dir, outp, per='48'] = process.argv.slice(2);
const files = fs.readdirSync(dir).filter(f => /\.(jpe?g|png|webp)$/i.test(f)).sort();
const W = 300, H = 300, cols = 6;
for (let s = 0; s * +per < files.length; s++) {
  const part = files.slice(s * +per, (s + 1) * +per); const rows = Math.ceil(part.length / cols); const comps = [];
  for (const [i, f] of part.entries()) {
    const meta = await sharp(dir + '/' + f).metadata().catch(()=>({}));
    const img = await sharp(dir + '/' + f).resize(W, H - 24, { fit: 'contain', background: '#222' }).toBuffer().catch(()=>null); if (!img) continue;
    const label = Buffer.from(`<svg width="${W}" height="24"><rect width="100%" height="100%" fill="#000"/><text x="4" y="17" font-size="12" fill="#fff" font-family="sans-serif">${(s*+per+i)} ${f.slice(0,28).replace(/&/g,'')} ${meta.width}x${meta.height}</text></svg>`);
    comps.push({ input: img, left: (i % cols) * W, top: Math.floor(i / cols) * H }, { input: label, left: (i % cols) * W, top: Math.floor(i / cols) * H + H - 24 });
  }
  await sharp({ create: { width: cols * W, height: rows * H, channels: 3, background: '#111' } }).composite(comps).jpeg({ quality: 78 }).toFile(`${outp}-${s}.jpg`);
}
fs.writeFileSync(outp + '-index.txt', files.map((f, i) => i + ' ' + f).join('\n'));
