import sys,re,html
t=open(sys.argv[1],encoding='utf-8',errors='replace').read()
t=re.sub(r'(?is)<(script|style).*?</\1>','',t)
t=re.sub(r'(?s)<[^>]+>','\n',t)
t=html.unescape(t)
print('\n'.join(l.strip() for l in t.splitlines() if l.strip()))
