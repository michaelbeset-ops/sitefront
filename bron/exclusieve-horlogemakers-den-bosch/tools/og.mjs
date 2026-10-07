import sharp from 'sharp';
await sharp('src/assets/atelier-loep.jpg').resize(1200, 630, { fit: 'cover', position: 'right' }).modulate({ brightness: .8 }).jpeg({ quality: 80 }).toFile('public/og.jpg');
