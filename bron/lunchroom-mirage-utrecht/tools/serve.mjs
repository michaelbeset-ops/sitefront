// Statische server voor dist/ onder /sitefront/lunchroom-mirage-utrecht/ (astro preview staat al bezet door andere bouwers).
import http from 'node:http'; import fs from 'node:fs'; import path from 'node:path';
const base = '/sitefront/lunchroom-mirage-utrecht'; const port = +(process.argv[2] || 4550);
const types = { '.html': 'text/html; charset=utf-8', '.css': 'text/css', '.js': 'text/javascript', '.webp': 'image/webp', '.jpg': 'image/jpeg', '.svg': 'image/svg+xml', '.woff2': 'font/woff2', '.xml': 'application/xml', '.txt': 'text/plain' };
http.createServer((req, res) => {
  let u = decodeURIComponent(req.url.split('?')[0]);
  if (!u.startsWith(base)) { res.writeHead(404); return res.end('404'); }
  let f = path.join('dist', u.slice(base.length));
  if (fs.existsSync(f) && fs.statSync(f).isDirectory()) f = path.join(f, 'index.html');
  if (!fs.existsSync(f)) { res.writeHead(404); return res.end('404'); }
  res.writeHead(200, { 'content-type': types[path.extname(f)] || 'application/octet-stream', 'cache-control': f.includes('_astro') ? 'public, max-age=31536000, immutable' : 'no-cache' });
  fs.createReadStream(f).pipe(res);
}).listen(port, '127.0.0.1', () => console.log('serving', port));
