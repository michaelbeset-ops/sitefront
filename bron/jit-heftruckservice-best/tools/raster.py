# Hun eigen foto (400x352, de grootste die er is) vergroot voor de hero. Om de lage resolutie niet als wazig te laten
# overkomen: licht verzacht, iets meer contrast, en een fijn drukraster (donkere puntjes) eroverheen, als een geprinte affiche.
from PIL import Image, ImageDraw, ImageFilter, ImageEnhance
src = Image.open('bron/web/img/big_28496356_0_400-352.jpg').convert('RGB')
def maak(W, H, box, out, cell=6):
    x0, y0, bw = box; bh = round(bw * src.height / src.width)
    big = src.resize((bw, bh), Image.LANCZOS).filter(ImageFilter.GaussianBlur(1.6))
    big = ImageEnhance.Contrast(big).enhance(1.12); big = ImageEnhance.Color(big).enhance(.85)
    doek = Image.new('RGB', (W, H), (22, 21, 19)); doek.paste(big, (x0, y0))
    # rasterpunten
    S = 2; m = Image.new('L', (W * S, H * S), 255); d = ImageDraw.Draw(m)
    for cy in range(0, H + cell, cell):
        for cx in range(0, W + cell, cell):
            ox = cx + (cell / 2 if (cy // cell) % 2 else 0); r = cell * .2
            d.ellipse([(ox - r) * S, (cy - r) * S, (ox + r) * S, (cy + r) * S], fill=150)
    m = m.resize((W, H), Image.LANCZOS)
    zwart = Image.new('RGB', (W, H), (22, 21, 19))
    Image.composite(doek, zwart, m).save(out, quality=86)
def foto(crop, W, out):
    global src
    o = src; src = o.crop(crop); H = round(W * src.height / src.width)
    maak(W, H, (0, 0, W), out); src = o
foto((0, 0, 400, 352), 1760, 'src/assets/hero.jpg')
foto((30, 0, 400, 352), 1000, 'src/assets/hero-m.jpg')

# Kleine eigen foto's uit de fotostroken van hun site (elk ca. 100-190 px breed): 2x vergroot met hetzelfde raster.
def klein(f, crop, out, schaal=2):
    global src
    o = src; src = Image.open('bron/web/img/' + f).convert('RGB').crop(crop)
    W = src.width * schaal; maak(W, round(W * src.height / src.width), (0, 0, W), out, cell=4); src = o
klein('28961136.jpg', (3, 3, 186, 159), 'src/assets/elektrisch.jpg')
klein('28961136.jpg', (496, 3, 597, 159), 'src/assets/erf.jpg')
klein('29004309.jpg', (386, 3, 508, 89), 'src/assets/stapelaars.jpg')
klein('29004309.jpg', (92, 3, 210, 89), 'src/assets/rij.jpg')
