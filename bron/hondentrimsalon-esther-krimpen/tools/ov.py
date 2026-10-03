import sys
from PIL import Image
f,out,cols=sys.argv[1],sys.argv[2],int(sys.argv[3])
im=Image.open(f); W,H=im.size; h=(H+cols-1)//cols
s=Image.new('RGB',(W*cols+20*(cols-1),h),'white')
for i in range(cols): s.paste(im.crop((0,i*h,W,min(H,(i+1)*h))),(i*(W+20),0))
s.thumbnail((1900,1900)); s.save(out)
