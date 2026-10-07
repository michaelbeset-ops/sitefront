// node tools/blur.mjs bestand x y w h : vervaagt een kenteken in-place
import sharp from 'sharp'; import fs from 'node:fs';
const [f, x, y, w, h] = process.argv.slice(2); const [X, Y, W, H] = [x, y, w, h].map(Number);
const buf = fs.readFileSync(f);
const vlek = await sharp(buf).extract({ left: X, top: Y, width: W, height: H }).blur(14).toBuffer();
const uit = await sharp(buf).composite([{ input: vlek, left: X, top: Y }]).jpeg({ quality: 90 }).toBuffer();
fs.writeFileSync(f, uit);
