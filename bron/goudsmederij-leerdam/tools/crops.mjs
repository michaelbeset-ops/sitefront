import sharp from 'sharp';
const I = 'bron/img/', O = 'bron/crop/';
const c = [
 ['collage-paradijsvogel.jpg', 'paradijsvogel', 1355, 1020, 620, 955],
 ['collage-ring-Tineke.jpg', 'bijzondere-ring', 1350, 1020, 620, 950],
 ['fam-de-Hertogh.jpg', 'manchetknopen', 690, 690, 1280, 1280],
 ['Fam.-Kralingen.jpg', 'levensboom', 1350, 1345, 630, 630],
 ['lapis-hanger.jpg', 'lapis', 1020, 1010, 970, 970],
 ['mevr-kleppe-parelring.jpg', 'parelring', 1010, 1335, 970, 645],
 ['collage-onix-collier.jpg', 'onix', 985, 1335, 990, 645],
 ['171211_084439_COLLAGE-1.jpg', 'drie-items', 670, 760, 615, 715],
 ['P1080193-schelp-bob.jpg', 'aquamarijn', 1335, 1335, 650, 650],
 ['gieten-van-zegelring.jpg', 'zegelring', 1495, 1345, 485, 630],
];
for (const [f, n, l, t, w, h] of c) { await sharp(I + f).extract({ left: l, top: t, width: w, height: h }).jpeg({ quality: 90 }).toFile(O + n + '.jpg'); }
