import fs from 'node:fs';
const h = fs.readFileSync(process.argv[2], 'utf8');
const body = h.replace(/<script[\s\S]*?<\/script>/g,'').replace(/<style[\s\S]*?<\/style>/g,'');
const links = [...new Set([...h.matchAll(/href="([^"]*bglgoldandsilver[^"]*|\/[^"]*)"/g)].map(m=>m[1]))].filter(l=>!/jimstatic|jimcdn|\.css/.test(l));
const imgs = [...new Set([...h.matchAll(/(https?:)?\/\/image\.jimcdn\.com[^"' )]*/g)].map(m=>m[0]))];
const t = body.replace(/<br\s*\/?>/g,'\n').replace(/<\/(p|h\d|li|div)>/g,'\n').replace(/<[^>]+>/g,'').replace(/&nbsp;/g,' ').replace(/&amp;/g,'&').replace(/&euro;/g,'€').replace(/&#[0-9]+;/g, m=>String.fromCharCode(+m.slice(2,-1))).replace(/[ \t]+/g,' ').replace(/\n\s*\n+/g,'\n');
console.log(t.trim()); console.log('\nLINKS:\n'+links.join('\n')); console.log('\nIMGS:\n'+imgs.join('\n'));
