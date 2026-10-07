import fs from 'node:fs';
const f = process.argv[2]; let h = fs.readFileSync(f, 'utf8');
h = h.replace(/<script[\s\S]*?<\/script>/g,'').replace(/<style[\s\S]*?<\/style>/g,'').replace(/<svg[\s\S]*?<\/svg>/g,'').replace(/<nav[\s\S]*?<\/nav>/g,'').replace(/<header[\s\S]*?<\/header>/g,'');
const imgs = [...new Set([...h.matchAll(/(?:src|data-src)="([^"]+\.(?:jpe?g|png|webp))"/g)].map(m=>m[1]))];
const t = h.replace(/<br\s*\/?>/g,'\n').replace(/<\/(p|h\d|li|div|section|a)>/g,'\n').replace(/<(h\d)[^>]*>/g,'\n## ').replace(/<[^>]+>/g,'').replace(/&nbsp;/g,' ').replace(/&amp;/g,'&').replace(/&euro;/g,'€').replace(/&#8217;|&rsquo;/g,"'").replace(/&#8211;|&ndash;/g,'-').replace(/&#[0-9]+;/g, m=>String.fromCharCode(+m.slice(2,-1))).replace(/[ \t]+/g,' ').replace(/\n\s*\n+/g,'\n');
console.log(t.trim()); console.log('\nIMGS:\n'+imgs.join('\n'));
