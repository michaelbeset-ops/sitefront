import sys, glob, os
from PIL import Image, ImageDraw
out, pat = sys.argv[1], sys.argv[2:]
ps = sorted(p for g in pat for p in glob.glob(g))
W = 6; s = 260
sh = Image.new('RGB', (W*s, ((len(ps)+W-1)//W)*(s+20)), 'white'); d = ImageDraw.Draw(sh)
for i, p in enumerate(ps):
    try:
        im = Image.open(p).convert('RGB')
    except Exception:
        continue
    lab = os.path.basename(p)[:38] + ' %dx%d' % im.size
    im.thumbnail((s, s)); x = (i % W)*s; y = (i//W)*(s+20); sh.paste(im, (x, y)); d.text((x+4, y+s+4), lab, fill='black')
sh.save(out); print(len(ps))
