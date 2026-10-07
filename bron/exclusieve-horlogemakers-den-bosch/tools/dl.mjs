import fs from 'node:fs';
const lines = fs.readFileSync('bron/google/foto-wie.txt','utf8').split('\n');
for (const l of lines) { const [i, who, ...rest] = l.split(' | '); const u = rest.pop(); if (!u || !u.startsWith('http')) continue;
  const tag = /B\.G\.L/.test(who) ? 'own' : who.includes('?') ? 'onb' : 'rev';
  const big = u.replace(/=[^=\/]*$/, '=w2400-h2400-k-no'); const r = await fetch(big); if (!r.ok) { console.log('fail', i); continue; }
  fs.writeFileSync(`bron/gown/${tag}-${String(i).padStart(2,'0')}.jpg`, Buffer.from(await r.arrayBuffer())); }
