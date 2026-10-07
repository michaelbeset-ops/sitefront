import re,sys,html
for f in sys.argv[1:]:
    raw=open(f,'rb').read()
    for enc in ('utf-8','cp1252'):
        try: t=raw.decode(enc); break
        except: pass
    imgs=re.findall(r'(?:src|href|data-src|srcset)=["\']([^"\' ]+\.(?:jpe?g|png|webp|gif))',t,re.I)
    t=re.sub(r'(?s)<(script|style|noscript)[^>]*>.*?</\1>','',t)
    t=re.sub(r'<(br|/p|/h\d|/li|/div|/a)[^>]*>','\n',t,flags=re.I)
    t=html.unescape(re.sub(r'<[^>]+>',' ',t))
    t='\n'.join(l.strip() for l in t.split('\n') if l.strip())
    open(f.rsplit('.',1)[0]+'.txt','w',encoding='utf-8').write(t+'\n\nIMGS:\n'+'\n'.join(dict.fromkeys(imgs)))
