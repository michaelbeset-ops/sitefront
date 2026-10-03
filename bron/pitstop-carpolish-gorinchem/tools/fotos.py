# Eigen foto's van het Google-profiel: kentekens/stickers vervagen, bijsnijden, naar src/assets.
from PIL import Image, ImageFilter
G='bron/g/'; A='src/assets/'
def blur(im, boxes):
    for b in boxes:
        if len(b) == 5:
            b = b[:4]; reg = im.crop(b).filter(ImageFilter.GaussianBlur(14)); im.paste(reg, b[:2]); continue
        reg = im.crop(b); w,h = reg.size; reg = reg.resize((max(1,w//40),1)).resize((w,h)).filter(ImageFilter.GaussianBlur(6)); im.paste(reg, b[:2])
    return im
jobs = {
 'pitbox.jpg':   ('f-18', [(320,960,470,1025,'zacht')], None),
 'porsche.jpg':  ('f-3',  [(930,1795,1290,1882),(1686,1140,1780,1175)], None),
 'interieur.jpg':('f-8',  [], None),
 'bekleding.jpg':('f-13', [], None),
 'velg.jpg':     ('f-6',  [(520,760,700,830)], None),
 'motorkap.jpg': ('f-23', [], (0,0,1080,1560)),
 'cabrio.jpg':   ('f-14', [], None),
 'bus.jpg':      ('f-15', [], None),
 'citroen.jpg':  ('f-12', [(280,1355,490,1430)], None),
 'pand.jpg':     ('f-17', [], (130,0,1080,1300)),
 'reinigen.jpg': ('f-25', [], (0,0,1080,1350)),
 'mercedes.jpg': ('f-4', [(0,1400,400,1540)], None),
 'q5.jpg': ('f-27', [], None),

}
for out,(src,boxes,crop) in jobs.items():
    im = Image.open(G+src+'.jpg').convert('RGB')
    im = blur(im, boxes)
    if crop: im = im.crop(crop)
    if im.width > 1300: im.thumbnail((1300, 4000), Image.LANCZOS)
    im.save(A+out, quality=84); print(out, im.size)
