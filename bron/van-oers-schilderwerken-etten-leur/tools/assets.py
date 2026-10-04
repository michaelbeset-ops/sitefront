# Maakt src/assets/ uit bron/ (eigen foto's van vanoers-schilderwerken.nl en Unsplash). Kentekens en naambordjes vervaagd.
from PIL import Image, ImageFilter
import os
os.makedirs('src/assets', exist_ok=True)
def blur(im, box, r=6):
    reg = im.crop(box).filter(ImageFilter.GaussianBlur(r)); im.paste(reg, box); return im
def save(im, naam, maxw=2000):
    im = im.convert('RGB')
    if im.width > maxw: im = im.resize((maxw, round(im.height * maxw / im.width)), Image.LANCZOS)
    im.save(f'src/assets/{naam}.jpg', quality=84, optimize=True, progressive=True)
# Stock
for n, w in [('hero', 2400), ('buiten', 1400), ('glas', 1400), ('behang', 1400), ('binnen', 1400), ('kleur', 1400), ('straat', 2000)]:
    save(Image.open(f'bron/stock/{n}.jpg'), n, w)
# Eigen: houtrot (4000px, 2017)
for n in ['h001', 'h002', 'h005', 'h006', 'h012']:
    im = Image.open(f'bron/eigen/{n}.jpg')
    save(im, n, 1600)
# Eigen: projecten (465x349), f014 kenteken en brievenbus vervagen
for n in ['f004', 'f005', 'f008', 'f011', 'f012', 'f014', 'f016', 'f017']:
    im = Image.open(f'bron/eigen/{n}.jpg').convert('RGB')
    if n == 'f014':
        blur(im, (58, 246, 98, 270), 5); blur(im, (150, 232, 180, 256), 4)
    save(im, n, 465)
