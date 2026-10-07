import fs from 'node:fs';
const p=[...JSON.parse(fs.readFileSync('pages.json')),...JSON.parse(fs.readFileSync('pages2.json'))];
const t=h=>h.replace(/[\s\S]*?<body/i,'<body').replace(/<script[\s\S]*?<\/script>/gi,'').replace(/<style[\s\S]*?<\/style>/gi,'').replace(/<noscript[\s\S]*?<\/noscript>/gi,'').replace(/<br\s*\/?>/gi,'\n').replace(/<\/(p|div|h\d|li|tr|a|span|label|button)>/gi,'\n').replace(/<[^>]+>/g,' ').replace(/&nbsp;|&#160;/g,' ').replace(/&amp;/g,'&').replace(/&#8217;|&#8216;/g,"'").replace(/&#8211;/g,'-').replace(/&#8220;|&#8221;/g,'"').replace(/&#8230;/g,'...').replace(/&euro;|&#8364;/g,'€').replace(/[ \t\r]+/g,' ').replace(/\n\s*\n+/g,'\n').trim();
const imgs=new Set();
for(const x of p){
  const r=await fetch(x.link,{headers:{'user-agent':'Mozilla/5.0'}}); const h=await r.text();
  fs.writeFileSync(`site/${x.slug}.html`,h); fs.writeFileSync(`site/${x.slug}.txt`,t(h));
  for(const m of h.matchAll(/https?:\/\/stassenzonwering\.nl\/wp-content\/uploads\/[^"'\s)]+?\.(?:jpe?g|png|webp|gif|mp4)/gi)) imgs.add(m[0]);
  process.stdout.write('.');
}
fs.writeFileSync('imgs.txt',[...imgs].join('\n')); console.log(imgs.size);
