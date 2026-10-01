var e=e=>[1,3,5].map(t=>parseInt(e.slice(t,t+2),16)/255);function t(t,n,r){let i=t.getContext(`webgl`,{antialias:!1,alpha:!1,preserveDrawingBuffer:!1,powerPreference:`low-power`});if(!i)return;let a=(e,t)=>{let n=i.createShader(e);return i.shaderSource(n,t),i.compileShader(n),n},o=i.createProgram();i.attachShader(o,a(i.VERTEX_SHADER,`attribute vec2 p;void main(){gl_Position=vec4(p,0.,1.);}`)),i.attachShader(o,a(i.FRAGMENT_SHADER,`
precision highp float;
uniform vec2 r; uniform float t;
uniform vec3 c0; uniform vec3 c1; uniform vec3 c2; uniform vec3 c3;
vec3 m289(vec3 x){return x-floor(x*(1./289.))*289.;}
vec2 m289(vec2 x){return x-floor(x*(1./289.))*289.;}
vec3 perm(vec3 x){return m289(((x*34.)+1.)*x);}
float sn(vec2 v){
  const vec4 C=vec4(.211324865405187,.366025403784439,-.577350269189626,.024390243902439);
  vec2 i=floor(v+dot(v,C.yy)); vec2 x0=v-i+dot(i,C.xx);
  vec2 i1=(x0.x>x0.y)?vec2(1.,0.):vec2(0.,1.);
  vec4 x12=x0.xyxy+C.xxzz; x12.xy-=i1; i=m289(i);
  vec3 p=perm(perm(i.y+vec3(0.,i1.y,1.))+i.x+vec3(0.,i1.x,1.));
  vec3 m=max(.5-vec3(dot(x0,x0),dot(x12.xy,x12.xy),dot(x12.zw,x12.zw)),0.); m=m*m; m=m*m;
  vec3 x=2.*fract(p*C.www)-1.; vec3 h=abs(x)-.5; vec3 ox=floor(x+.5); vec3 a0=x-ox;
  m*=1.79284291400159-.85373472095314*(a0*a0+h*h);
  vec3 g; g.x=a0.x*x0.x+h.x*x0.y; g.yz=a0.yz*x12.xz+h.yz*x12.yw;
  return 130.*dot(m,g);
}
float fbm(vec2 p){float s=0.,a=.55;for(int i=0;i<3;i++){s+=a*sn(p);p=p*1.85+vec2(3.1,1.7);a*=.42;}return s*.55+.5;}
void main(){
  vec2 p=(gl_FragCoord.xy-.5*r)/sqrt(r.x*r.y)*.8;
  float T=t*.03;
  vec2 q=vec2(fbm(p+vec2(0.,T)),fbm(p+vec2(5.2,1.3)-T*.8));
  vec2 s=vec2(fbm(p+1.7*q+vec2(1.7,9.2)+T*.5),fbm(p+1.7*q+vec2(8.3,2.8)-T*.4));
  vec2 w=p+1.5*s;
  float h=fbm(w);
  float e=.012;
  float hx=fbm(w+vec2(e,0.)), hy=fbm(w+vec2(0.,e));
  vec3 col=mix(c0,c1,smoothstep(.45,.53,h));
  col=mix(col,c2,smoothstep(.54,.62,s.y));
  col=mix(col,c3,smoothstep(.58,.66,q.x*1.15-s.x*.25+h*.2));
  vec3 n=normalize(vec3(-(hx-h)/e*.22,-(hy-h)/e*.22,1.));
  vec3 L=normalize(vec3(-.4,.55,.8));
  float dif=.84+.16*dot(n,L);
  float sp=pow(max(dot(reflect(-L,n),vec3(0.,0.,1.)),0.),40.)*.22;
  col=col*dif+sp;
  float g=fract(sin(dot(gl_FragCoord.xy,vec2(12.9898,78.233)))*43758.5453);
  col+=(g-.5)*.012;
  gl_FragColor=vec4(col,1.);
}`)),i.linkProgram(o);let s=i.getExtension(`KHR_parallel_shader_compile`),c=()=>!s||i.getProgramParameter(o,s.COMPLETION_STATUS_KHR),l=()=>c()?u():setTimeout(l,50);l();function u(){if(!i||!i.getProgramParameter(o,i.LINK_STATUS))return;i.useProgram(o);let a=i.createBuffer();i.bindBuffer(i.ARRAY_BUFFER,a),i.bufferData(i.ARRAY_BUFFER,new Float32Array([-1,-1,3,-1,-1,3]),i.STATIC_DRAW);let s=i.getAttribLocation(o,`p`);i.enableVertexAttribArray(s),i.vertexAttribPointer(s,2,i.FLOAT,!1,0,0);let c=i.getUniformLocation(o,`r`),l=i.getUniformLocation(o,`t`),u=[0,1,2,3].map(e=>i.getUniformLocation(o,`c`+e)),d=n.map(t=>t.map(e)),f=0,p=0,m=1,h=()=>{let e=m*m*(3-2*m);u.forEach((t,n)=>{let r=d[f][n],a=d[p][n];i.uniform3f(t,r[0]+(a[0]-r[0])*e,r[1]+(a[1]-r[1])*e,r[2]+(a[2]-r[2])*e)})},g=()=>{let e=t.clientWidth,n=t.clientHeight,r=Math.min(.5,600/Math.max(e,1));t.width=Math.max(2,Math.round(e*r)),t.height=Math.max(2,Math.round(n*r)),i.viewport(0,0,t.width,t.height),i.uniform2f(c,t.width,t.height)};g(),new ResizeObserver(g).observe(t);let _=matchMedia(`(prefers-reduced-motion: reduce)`).matches,v=e=>{i.uniform1f(l,e),h(),i.drawArrays(i.TRIANGLES,0,3)};if(_){requestAnimationFrame(()=>{v(40),t.classList.add(`aan`)});return}let y=!0,b=0,x=40,S=0,C=e=>{if(requestAnimationFrame(C),!y||document.hidden){b=e;return}let t=Math.min(.1,(e-b)/1e3);t<1/32||(b=e,x+=t,S+=t,m<1&&(m=Math.min(1,m+t/3.2)),S>10&&d.length>1&&(S=0,f=p,p=(p+1)%d.length,m=0,r?.(p)),v(x))};requestAnimationFrame(()=>{v(x),t.classList.add(`aan`),requestAnimationFrame(C)}),new IntersectionObserver(e=>{y=e[0].isIntersecting}).observe(t)}}var n=document.querySelector(`[data-smelt]`),r=document.querySelector(`[data-namen-uit]`);if(n){let e=JSON.parse(n.dataset.paletten),i=JSON.parse(n.dataset.namen),a=()=>t(n,e,e=>{r&&(r.textContent=i[e].join(`, `))}),o=()=>`requestIdleCallback`in window?requestIdleCallback(a,{timeout:1500}):setTimeout(a,300);document.readyState===`complete`?o():addEventListener(`load`,o,{once:!0})}var i=matchMedia(`(prefers-reduced-motion: reduce)`).matches,a=[...document.querySelectorAll(`[data-parallax]`)];if(!i&&a.length){let e=!1,t=()=>{e=!1;let t=innerHeight;a.forEach(e=>{let n=e.parentElement.getBoundingClientRect();if(n.bottom<0||n.top>t)return;let r=(n.top+n.height/2-t/2)*Number(e.dataset.parallax);e.style.transform=`translate3d(0, ${r.toFixed(1)}px, 0) scale(1.12)`})};addEventListener(`scroll`,()=>{e||(e=!0,requestAnimationFrame(t))},{passive:!0}),t()}var o=[...document.querySelectorAll(`.kaart`)],s=document.querySelector(`[data-teller]`),c=[...document.querySelectorAll(`.filter`)];c.forEach(e=>e.addEventListener(`click`,()=>{let t=e.dataset.fam;c.forEach(t=>t.setAttribute(`aria-pressed`,String(t===e)));let n=o.filter(e=>t===`alles`||e.dataset.fams.split(` `).includes(t));o.forEach(e=>e.classList.add(`weg`)),setTimeout(()=>{o.forEach(e=>e.classList.toggle(`uit`,!n.includes(e))),requestAnimationFrame(()=>n.forEach((e,t)=>setTimeout(()=>e.classList.remove(`weg`),Math.min(t,12)*35))),s&&(s.textContent=String(n.length)),document.querySelector(`[data-kiezer]`).getBoundingClientRect().top<70&&document.getElementById(`geuren`).querySelector(`[data-grid]`).scrollIntoView({block:`start`,behavior:i?`auto`:`smooth`})},i?0:220)}));var l=document.querySelector(`[data-tekening]`),u=[...document.querySelectorAll(`[data-stap-tekst]`)];if(l&&u.length){u[0].classList.add(`actief`);let e=new IntersectionObserver(e=>e.forEach(e=>{e.isIntersecting&&(u.forEach(t=>t.classList.toggle(`actief`,t===e.target)),l.dataset.stap=e.target.dataset.stapTekst)}),{rootMargin:`-40% 0px -40% 0px`});u.forEach(t=>e.observe(t))}