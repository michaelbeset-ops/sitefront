// Haalt de foto's uit public/img/fotos.json op en zet ze met sharp om naar de
// maten uit fotos-spec.mjs (bijsnijden op het midden, JPG kwaliteit 80).
//
//   node scripts/fotos-ophalen.mjs               downloaden en omzetten
//   node scripts/fotos-ophalen.mjs --placeholder effen vlakken in de paletkleur,
//                                                 zodat de build slaagt zonder foto's
//
// fotos.json: { "hero": { "url": "https://...", "bron": "Unsplash, fotograaf X" }, ... }
// Een lokale bron kan ook: { "hero": { "pad": "eigen/hero-origineel.jpg" } }
import sharp from 'sharp';
import { readFile, writeFile, mkdir } from 'node:fs/promises';
import { fileURLToPath } from 'node:url';
import path from 'node:path';
import { fotos, bestand } from './fotos-spec.mjs';

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const imgDir = path.join(root, 'public/img');
await mkdir(imgDir, { recursive: true });
const placeholder = process.argv.includes('--placeholder');

async function bron(naam, lijst) {
  const item = lijst[naam];
  if (!item || (!item.url && !item.pad)) return null;
  if (item.pad) return readFile(path.resolve(root, item.pad));
  const res = await fetch(item.url, { headers: { 'user-agent': 'sitefront-fotos/1.0' } });
  if (!res.ok) throw new Error(`${naam}: HTTP ${res.status} voor ${item.url}`);
  return Buffer.from(await res.arrayBuffer());
}

let lijst = {};
if (!placeholder) {
  lijst = JSON.parse(await readFile(path.join(imgDir, 'fotos.json'), 'utf8'));
}

let fouten = 0;
for (const [naam, spec] of Object.entries(fotos)) {
  try {
    let input;
    if (placeholder) {
      input = await sharp({ create: { width: spec.w, height: spec.h, channels: 3, background: spec.tint } }).jpeg().toBuffer();
    } else {
      input = await bron(naam, lijst);
      if (!input) { console.warn(`overgeslagen: ${naam} (geen url of pad in fotos.json)`); continue; }
    }
    for (const b of spec.breedtes) {
      const h = Math.round((b * spec.h) / spec.w);
      const uit = path.join(imgDir, bestand(naam, b));
      await sharp(input).rotate().resize(b, h, { fit: 'cover', position: 'attention' })
        .jpeg({ quality: 80, mozjpeg: true, progressive: true }).toFile(uit);
      console.log(`ok ${path.relative(root, uit)} ${b}x${h}`);
    }
  } catch (e) {
    fouten++;
    console.error(`FOUT ${naam}: ${e.message}`);
  }
}
if (fouten) process.exit(1);
