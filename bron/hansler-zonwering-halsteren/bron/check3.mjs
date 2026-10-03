import { chromium } from 'playwright';
const b = await chromium.launch(); const p = await b.newPage({viewport:{width:1440,height:900}});
await p.goto('https://hansler.nl/',{waitUntil:'networkidle'});
for (let y=0;y<5000;y+=300){await p.evaluate(y=>scrollTo(0,y),y);await p.waitForTimeout(250);}
const r = await p.evaluate(()=>[...document.querySelectorAll('body *')].filter(e=>e.childElementCount===0&&/Mike Sendler|Onze klanten|Justo vestibulum|Follow @hansler|Montage$/.test(e.textContent.trim())).map(e=>{const b=e.getBoundingClientRect();let hid='';for(let x=e;x;x=x.parentElement){const s=getComputedStyle(x);if(s.display==='none'||s.visibility==='hidden'||s.opacity==='0'){hid=x.className.toString().slice(0,50)+' '+s.display+s.visibility+s.opacity;break;}}return e.textContent.trim().slice(0,20)+' y='+Math.round(b.top+scrollY)+' h='+Math.round(b.height)+' hid='+hid}));
console.log(r.join('\n'));
await b.close();
