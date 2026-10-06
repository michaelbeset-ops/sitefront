import sharp from 'sharp'; import fs from 'node:fs';
const A = 'src/assets/'; fs.mkdirSync(A + 'brood', { recursive: true });
await sharp('bron/gfoto-u/g-12.jpg').jpeg({ quality: 88 }).toFile(A + 'vitrine.jpg');
await sharp('bron/gfoto-u/g-08.jpg').jpeg({ quality: 88 }).toFile(A + 'bonbons.jpg');
await sharp('bron/gfoto-u/g-20.jpg').jpeg({ quality: 88 }).toFile(A + 'taart.jpg');
await sharp('bron/ighi-u/p-14.jpg').jpeg({ quality: 88 }).toFile(A + 'worstenbroodjes.jpg');
await sharp('bron/ighi-u/p-54.jpg').extract({ left: 420, top: 385, width: 950, height: 560 }).jpeg({ quality: 88 }).toFile(A + 'oliebollen.jpg');
const brood = { 'tims-wit': 'brood__product-340-tim-s-wit', 'tims-spelt': 'brood__product-358-tim-s-spelt', 'tims-blond': 'brood__product-349-tim-s-blond-meergranen', 'desem-bauern': 'desem-brood__product-381-desem-bauern', 'rustiek': 'desem-brood__product-382-rustiek-landbrood', 'krentenbrood': 'gevuld-brood__product-186-krentenbrood-400-gram', 'croissant': 'krokant-brood__product-164-roomboter-croissant', 'appelflap': 'zoet-en-hartige-snacks__product-728-appelflap', 'boerenbruin': 'brood__product-343-tim-s-boerenbruin', 'waldkorn': 'desem-brood__product-379-desem-waldkorn-600-gram' };
for (const [k, f] of Object.entries(brood)) await sharp('bron/site/prod/' + f + '.jpg').trim({ threshold: 12 }).jpeg({ quality: 88 }).toFile(A + 'brood/' + k + '.jpg').then(i => console.log(k, i.width, i.height));
