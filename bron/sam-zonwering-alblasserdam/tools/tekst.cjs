const fs=require('fs');const dir=process.argv[2];
const ent=s=>s.replace(/&#8217;|&rsquo;/g,"'").replace(/&nbsp;|&#160;/g,' ').replace(/&amp;|&#038;/g,'&').replace(/&#8211;/g,'-').replace(/&euml;/g,'ë').replace(/&eacute;/g,'é').replace(/&#8230;/g,'...').replace(/&#82\d\d;/g,'"');
for(const f of fs.readdirSync(dir)){let h=fs.readFileSync(dir+'/'+f,'utf8');
h=h.replace(/<script[\s\S]*?<\/script>/g,'').replace(/<style[\s\S]*?<\/style>/g,'').replace(/<noscript[\s\S]*?<\/noscript>/g,'');
const imgs=[...h.matchAll(/<img[^>]*src="([^"]+)"[^>]*>/g)].map(m=>m[1].split('/').pop());
const bg=[...h.matchAll(/url\(([^)]+)\)/g)].map(m=>m[1].split('/').pop());
let t=ent(h.replace(/<br\s*\/?>/g,'\n').replace(/<\/(p|h\d|li|div|tr)>/g,'\n').replace(/<[^>]+>/g,' ')).split('\n').map(l=>l.replace(/\s+/g,' ').trim()).filter(Boolean);
console.log('########',f,'\n'+t.join('\n'),'\nIMG:',[...new Set(imgs)].join(' '),'\nBG:',[...new Set(bg)].join(' '));}
