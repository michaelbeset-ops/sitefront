// Haalt de foto's uit public/img/fotos.json op en zet ze om naar de vaste
// bestanden die de site verwacht (maten uit src/fotos.json).
//
//   node scripts/fotos-ophalen.mjs                 downloaden en omzetten
//   node scripts/fotos-ophalen.mjs --placeholder   effen vlakken, zodat de build slaagt zonder foto's
//
// public/img/fotos.json: { "hero": "https://...", "keuken-1": "https://...", ... }
// Een waarde mag ook een lokaal pad zijn (relatief aan de projectmap).
import fs from 'node:fs/promises';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import sharp from 'sharp';

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const imgDir = path.join(root, 'public/img');
const maten = JSON.parse(await fs.readFile(path.join(root, 'src/fotos.json'), 'utf8'));
const placeholder = process.argv.includes('--placeholder');

await fs.mkdir(imgDir, { recursive: true });

async function bron(naam, waarde) {
  if (!/^https?:\/\//.test(waarde)) return fs.readFile(path.resolve(root, waarde));
  const res = await fetch(waarde, { redirect: 'follow' });
  if (!res.ok) throw new Error(`${naam}: HTTP ${res.status} voor ${waarde}`);
  return Buffer.from(await res.arrayBuffer());
}

async function schrijf(naam, input, m) {
  const kleinH = Math.round((m.h * m.klein) / m.w);
  for (const [w, h, suffix] of [[m.w, m.h, ''], [m.klein, kleinH, `-${m.klein}`]]) {
    // attention-crop houdt het drukste deel van de foto in beeld bij bijsnijden
    const basis = sharp(input).rotate().resize(w, h, { fit: 'cover', position: sharp.strategy.attention });
    await basis.clone().jpeg({ quality: 80, mozjpeg: true }).toFile(path.join(imgDir, `${naam}${suffix}.jpg`));
    await basis.clone().webp({ quality: 76 }).toFile(path.join(imgDir, `${naam}${suffix}.webp`));
  }
  console.log(`ok  ${naam}  ${m.w}x${m.h} + ${m.klein}w`);
}

let lijst = {};
if (!placeholder) {
  try {
    lijst = JSON.parse(await fs.readFile(path.join(imgDir, 'fotos.json'), 'utf8'));
  } catch {
    console.error('public/img/fotos.json ontbreekt of is ongeldig. Zie public/img/FOTOS.md.');
    process.exit(1);
  }
}

let fouten = 0;
for (const [naam, m] of Object.entries(maten)) {
  try {
    if (placeholder) {
      const vlak = sharp({ create: { width: m.w, height: m.h, channels: 3, background: m.kleur } }).png();
      await schrijf(naam, await vlak.toBuffer(), m);
    } else if (lijst[naam]) {
      await schrijf(naam, await bron(naam, lijst[naam]), m);
    } else {
      console.warn(`--  ${naam}: geen URL in fotos.json, overgeslagen`);
    }
  } catch (e) {
    fouten++;
    console.error(`!!  ${e.message}`);
  }
}
process.exit(fouten ? 1 : 0);
