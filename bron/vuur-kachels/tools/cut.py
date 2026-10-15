import sys
from PIL import Image
p, n = sys.argv[1], int(sys.argv[2])
im = Image.open(p); w, h = im.size; ph = -(-h // n)
for i in range(n):
    c = im.crop((0, i*ph, w, min(h, (i+1)*ph)))
    if w > 800: c = c.resize((w//2, c.height//2))
    c.save(p.replace('.png', f'_{i}.jpg'), quality=80)
