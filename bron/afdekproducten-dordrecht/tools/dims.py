import sys, urllib.request, io, os
from PIL import Image
out=[]
for line in open('bron/web/kand.txt'):
    u='https://www.afdekproducten.nl/'+line.strip()
    try:
        req=urllib.request.Request(u,headers={'User-Agent':'Mozilla/5.0 Chrome/141'})
        d=urllib.request.urlopen(req,timeout=30).read()
        im=Image.open(io.BytesIO(d)); out.append((im.size[0]*im.size[1],im.size,u))
        if im.size[0]>=1000: open('bron/kand/'+os.path.basename(u),'wb').write(d)
    except Exception as e: out.append((0,None,u+' ERR '+str(e)[:40]))
for o in sorted(out,reverse=True)[:40]: print(o[1],o[2])
