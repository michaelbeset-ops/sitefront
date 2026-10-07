import sys, glob, os
from PIL import Image, ImageDraw
files = sorted(sum([glob.glob(g) for g in sys.argv[2:]], []))
W = int(os.environ.get("W", 300)); cols = int(os.environ.get("C", 6)); rows = (len(files) + cols - 1) // cols
S = Image.new('RGB', (cols * W, rows * (W + 20)), 'white'); d = ImageDraw.Draw(S)
for i, f in enumerate(files):
    im = Image.open(f).convert('RGB'); sz = im.size; im.thumbnail((W - 6, W - 6))
    x = (i % cols) * W; y = (i // cols) * (W + 20)
    S.paste(im, (x + 3, y + 3))
    d.text((x + 4, y + W), os.path.basename(f)[:30] + ' %dx%d' % sz, fill='black')
S.save(sys.argv[1]); print(len(files))

