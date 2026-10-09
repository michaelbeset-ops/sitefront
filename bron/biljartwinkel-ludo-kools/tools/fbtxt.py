import re, json, datetime
BS = chr(92)
pat = re.compile('"text":"((?:[^"' + BS + BS + ']|' + BS + BS + '.){15,3000})"')
for f in ['page.html', 'about.html']:
    t = open(f, encoding='utf8').read()
    seen = []
    for m in pat.finditer(t):
        try:
            s = json.loads('"' + m.group(1) + '"')
        except Exception:
            continue
        if s not in seen:
            seen.append(s)
    print('=====', f)
    for s in seen:
        print('-', s.replace('\n', ' / '))
    ts = sorted(set(int(x) for x in re.findall(r'"(?:creation_time|publish_time)":(\d{9,10})', t)))
    print('times', [datetime.date.fromtimestamp(x).isoformat() for x in ts][-25:])
