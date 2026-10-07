import sharp from 'sharp';
const F = 'bron/foto/', A = 'src/assets/';
const map = {
  'feest-veld': '20250628_224737-high-9hm60m.jpg', 'lunchtafel': 'lunchbuffet-high-r4t220.jpg',
  'buffet-tent': 'heerlijkbuffet-high.jpg', 'hapjes': 'hapjes-warm-en-koud-combi-high.jpg',
  'bbq': 'bbq-master-high-d1ljgp.jpg', 'borrelplank': 'boerenborrelplank-high.jpg',
  'stretchtent': 'allround-feest-strechtent-high-f4gh77.jpg', 'eigenaars': 'bas-loes-owners-high-zssjpw.jpg',
  'walking-dinner': 'walking-dinner-high.jpg', 'gevogelte': 'buffet-gevogelte-high.jpg',
};
for (const [n, f] of Object.entries(map)) await sharp(F + f).rotate().resize(2000, 2000, { fit: 'inside', withoutEnlargement: true }).jpeg({ quality: 88 }).toFile(A + n + '.jpg');
// Logo-beeldmerk: wit wegfilteren naar transparant.
const { data, info } = await sharp(F + 'lieve-lust-5-high-da8pgx.png').ensureAlpha().raw().toBuffer({ resolveWithObject: true });
for (let i = 0; i < data.length; i += 4) { const m = Math.min(data[i], data[i + 1], data[i + 2]); const a = Math.max(0, Math.min(255, (255 - m) * 3.2)); data[i + 3] = a; }
await sharp(data, { raw: info }).trim().resize(240).png().toFile(A + 'beeldmerk.png');
await sharp(data, { raw: info }).trim().resize(180, 180, { fit: 'contain', background: '#00000000' }).png().toFile('bron/beeldmerk-180.png');
console.log('ok');
