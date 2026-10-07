import sys
from PIL import Image, ImageDraw
im=Image.open(sys.argv[1]).convert('RGB'); W,H=im.size; s=float(sys.argv[3]) if len(sys.argv)>3 else 1000/W
v=im.resize((int(W*s),int(H*s))); d=ImageDraw.Draw(v); step=int(sys.argv[4]) if len(sys.argv)>4 else 100
for x in range(0,W,step): d.line([(x*s,0),(x*s,H*s)],fill=(255,0,255),width=1); d.text((x*s+2,2),str(x),fill=(255,0,255))
for y in range(0,H,step): d.line([(0,y*s),(W*s,y*s)],fill=(255,0,255),width=1); d.text((2,y*s+2),str(y),fill=(255,0,255))
v.save(sys.argv[2])
