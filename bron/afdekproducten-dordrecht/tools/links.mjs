// Controleert alle externe links in dist (status na redirects)
import fs from 'node:fs';
const html = fs.readFileSync('dist/index.html', 'utf8') + fs.readFileSync('dist/privacy/index.html', 'utf8');
const urls = [...new Set([...html.matchAll(/href="(https:\/\/www\.afdekproducten\.nl[^"]*)"/g)].map(m => m[1].replace(/&amp;/g, '&')))];
for (const u of urls) { const r = await fetch(u, { redirect: 'follow', headers: { 'user-agent': 'Mozilla/5.0 Chrome/141' } }); console.log(r.status, r.url === u ? '' : '-> ' + r.url, u); }
console.log(urls.length, 'links');
