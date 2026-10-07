# Blurt opgegeven vakken (kentekens) met een zachte rand. Gebruik: python blur.py in out "crop|-" "x0,y0,x1,y1;..." [maxbreedte]
import sys
from PIL import Image, ImageFilter, ImageDraw
im = Image.open(sys.argv[1]).convert('RGB')
boxes = [tuple(int(v) for v in b.split(',')) for b in sys.argv[4].split(';') if b] if len(sys.argv) > 4 else []
for x0, y0, x1, y1 in boxes:
    w, h = x1 - x0, y1 - y0; px, py = int(w * .35) + 4, int(h * .6) + 4
    bx = (max(0, x0 - px), max(0, y0 - py), min(im.width, x1 + px), min(im.height, y1 + py))
    reg = im.crop(bx)
    vaag = reg.resize((max(1, reg.width // 6), max(1, reg.height // 6)), Image.BILINEAR).resize(reg.size, Image.BILINEAR).filter(ImageFilter.GaussianBlur(max(4, h * .35)))
    m = Image.new('L', reg.size, 0); ImageDraw.Draw(m).rectangle((x0 - bx[0], y0 - bx[1], x1 - bx[0], y1 - bx[1]), fill=255)
    m = m.filter(ImageFilter.GaussianBlur(max(3, h * .3)))
    m = m.point(lambda v: min(255, v * 2))
    reg.paste(vaag, (0, 0), m); im.paste(reg, bx[:2])
if sys.argv[3] != '-': im = im.crop(tuple(int(v) for v in sys.argv[3].split(',')))
mw = int(sys.argv[5]) if len(sys.argv) > 5 else 2400
if im.width > mw: im = im.resize((mw, round(im.height * mw / im.width)), Image.LANCZOS)
im.save(sys.argv[2], quality=90); print(sys.argv[2], im.size)
