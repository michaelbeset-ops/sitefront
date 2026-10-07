// Downloadt alle afbeeldingen uit bron/web/*/_imgs.txt (zonder -1/-2/-3 dubbelversies), schrijft maten in bron/foto/_maten.txt.
import fs from 'node:fs'; import sharp from 'sharp';
const rijen = [];
for (const [map, bestand] of [['site', 'bron/web/nl/_imgs.txt'], ['werkenbij', 'bron/web/werkenbij/_imgs.txt']]) {
  fs.mkdirSync(`bron/foto/${map}`, { recursive: true });
  const urls = [...new Set(fs.readFileSync(bestand, 'utf8').split('\n').filter(Boolean).map((u) => u.replace(/\?.*$/, '')))]
    .filter((u) => !/-\d{2,4}x\d{2,4}\.(jpe?g|png|webp)$/i.test(u)); // WordPress-thumbs overslaan
  let i = 0;
  await Promise.all(Array.from({ length: 8 }, async () => {
    while (i < urls.length) {
      const u = urls[i++]; const naam = decodeURIComponent(u.split('/').pop()).replace(/[^a-z0-9._-]+/gi, '_');
      const pad = `bron/foto/${map}/${naam}`;
      try {
        if (!fs.existsSync(pad)) { const r = await fetch(u, { headers: { 'user-agent': 'Mozilla/5.0' } }); if (!r.ok) throw new Error(r.status); fs.writeFileSync(pad, Buffer.from(await r.arrayBuffer())); }
        const m = await sharp(pad).metadata(); rijen.push(`${map}/${naam}\t${m.width}x${m.height}\t${Math.round(fs.statSync(pad).size / 1024)}kB\t${u}`);
      } catch (e) { rijen.push(`FOUT ${u} ${e.message}`); try { fs.unlinkSync(pad); } catch {} }
    }
  }));
}
fs.writeFileSync('bron/foto/_maten.txt', rijen.sort().join('\n'));
console.log(rijen.length, rijen.filter((r) => r.startsWith('FOUT')).length, 'fouten');
