import sys,re,html
for f in sys.argv[1:]:
    s=open(f,encoding='utf-8',errors='ignore').read()
    s=re.sub(r'(?is)<(script|style|noscript|svg)[^>]*>.*?</\1>',' ',s)
    s=re.sub(r'(?is)<header.*?</header>',' ',s,count=1)
    s=re.sub(r'(?i)<br\s*/?>|</(p|h\d|li|div|section|tr)>','\n',s)
    s=re.sub(r'<[^>]+>',' ',s); s=html.unescape(s)
    lines=[re.sub(r'[ \t\xa0]+',' ',l).strip() for l in s.split('\n')]
    out=[]; 
    for l in lines:
        if l and (not out or out[-1]!=l): out.append(l)
    print('=====',f); print('\n'.join(out))
