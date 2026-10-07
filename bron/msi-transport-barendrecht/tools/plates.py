# Zoekt gele Nederlandse kentekens (geel vlak) en blurt ze. Gebruik: python plates.py in out [crop x0,y0,x1,y1]
import sys, numpy as np
from PIL import Image, ImageFilter
from PIL import ImageFilter as F
src, out = sys.argv[1], sys.argv[2]
im = Image.open(src).convert('RGB')
if len(sys.argv) > 3: im = im.crop(tuple(int(v) for v in sys.argv[3].split(',')))
a = np.asarray(im).astype(int); r, g, b = a[..., 0], a[..., 1], a[..., 2]
m = (r > 170) & (g > 120) & (b < 110) & (r - b > 110) & (g - b > 60)
mi = Image.fromarray((m*255).astype('uint8')).filter(F.MaxFilter(5)).filter(F.MinFilter(5))
m = np.asarray(mi) > 0
seen = np.zeros_like(m); H, W = m.shape; boxes = []
for y, x in zip(*np.nonzero(m)):
    if seen[y, x]: continue
    st = [(y, x)]; seen[y, x] = 1; ys = [y]; xs = [x]; cnt = 0
    while st:
        cy, cx = st.pop(); cnt += 1
        for ny, nx in ((cy+1,cx),(cy-1,cx),(cy,cx+1),(cy,cx-1)):
            if 0 <= ny < H and 0 <= nx < W and m[ny, nx] and not seen[ny, nx]:
                seen[ny, nx] = 1; st.append((ny, nx)); ys.append(ny); xs.append(nx)
    x0, x1, y0, y1 = min(xs), max(xs)+1, min(ys), max(ys)+1; w, h = x1-x0, y1-y0
    if w >= 10 and h >= 4 and 1.8 < w / h < 7.5 and cnt > 0.45*w*h:
        boxes.append((x0, y0, x1, y1))
for x0, y0, x1, y1 in boxes:
    pw, ph = x1 - x0, y1 - y0; px, py = int(pw * .12) + 3, int(ph * .3) + 3
    bx = (max(0, x0 - px), max(0, y0 - py), min(im.width, x1 + px), min(im.height, y1 + py))
    reg = im.crop(bx).filter(ImageFilter.GaussianBlur(max(4, ph * .45)))
    im.paste(reg, bx[:2])
print(src, len(boxes), boxes)
im.save(out, quality=92)
