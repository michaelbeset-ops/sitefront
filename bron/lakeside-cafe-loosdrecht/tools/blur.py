# Gezichten blurren: python blur.py in out "x,y,r;x,y,r;..." (coords in pixels van het origineel)
import sys
from PIL import Image, ImageFilter, ImageDraw
src, out, spec = sys.argv[1], sys.argv[2], sys.argv[3]
im = Image.open(src).convert('RGB')
for part in spec.split(';'):
    if not part.strip(): continue
    x, y, r = [float(v) for v in part.split(',')]
    box = (int(x - r * 1.6), int(y - r * 1.9), int(x + r * 1.6), int(y + r * 1.9))
    box = (max(0, box[0]), max(0, box[1]), min(im.width, box[2]), min(im.height, box[3]))
    reg = im.crop(box)
    bl = reg.filter(ImageFilter.GaussianBlur(max(6, r * 0.55)))
    m = Image.new('L', reg.size, 0); d = ImageDraw.Draw(m)
    d.ellipse((reg.size[0] * .12, reg.size[1] * .1, reg.size[0] * .88, reg.size[1] * .9), fill=255)
    m = m.filter(ImageFilter.GaussianBlur(r * 0.25))
    reg.paste(bl, (0, 0), m); im.paste(reg, box[:2])
im.save(out, quality=92)
