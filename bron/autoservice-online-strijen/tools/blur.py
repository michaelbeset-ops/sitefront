# Kentekens onleesbaar maken in het bronbestand (sterk vervagen + licht pixeleren). Gebruik: python tools/blur.py in uit x0,y0,x1,y1 ...
import sys
from PIL import Image, ImageFilter
src,dst=sys.argv[1],sys.argv[2]; im=Image.open(src).convert('RGB')
for b in sys.argv[3:]:
    x0,y0,x1,y1=map(int,b.split(',')); r=im.crop((x0,y0,x1,y1))
    w,h=r.size; r=r.resize((max(1,w//6),max(1,h//6)),Image.BILINEAR).resize((w,h),Image.BILINEAR).filter(ImageFilter.GaussianBlur(max(3,h//4)))
    im.paste(r,(x0,y0))
im.save(dst,quality=88)
