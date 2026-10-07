// node tools/tekst.mjs <html...>: zichtbare tekst + afbeeldingen van een opgehaalde pagina
import fs from 'node:fs';
for (const f of process.argv.slice(2)) {
  let h = fs.readFileSync(f, 'utf8');
  const m = h.match(/<body[\s\S]*<\/body>/i); h = m ? m[0] : h;
  h = h.replace(/<script[\s\S]*?<\/script>/gi, '').replace(/<style[\s\S]*?<\/style>/gi, '');
  const imgs = [...h.matchAll(/(?:src|href)="([^"]+\.(?:jpe?g|png|gif)[^"]*)"/gi)].map((x) => x[1]);
  const t = h.replace(/<br\s*\/?>/gi, '\n').replace(/<\/(p|div|h\d|li|tr)>/gi, '\n').replace(/<[^>]+>/g, ' ').replace(/&nbsp;/g, ' ').replace(/&amp;/g, '&').replace(/&quot;/g, '"').replace(/&#39;/g, "'").replace(/[ \t]+/g, ' ').split('\n').map((s) => s.trim()).filter(Boolean).join('\n');
  console.log('=====', f, '\n' + t + '\n--- imgs:\n' + [...new Set(imgs)].join('\n'));
}
