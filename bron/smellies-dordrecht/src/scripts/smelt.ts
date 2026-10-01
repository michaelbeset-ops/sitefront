// Het smeltbeeld: een langzaam vloeiend wasoppervlak in de echte waskleuren van Smellies.
// WebGL1, op lage resolutie gerenderd (de wax is zacht, upscalen ziet niemand), max ~30 fps,
// pauzeert buiten beeld en in een verborgen tab. Bij prefers-reduced-motion: één stilstaand beeld.

const VERT = `attribute vec2 p;void main(){gl_Position=vec4(p,0.,1.);}`;

const FRAG = `
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
}`;

const hex = (h: string) => [1, 3, 5].map((i) => parseInt(h.slice(i, i + 2), 16) / 255);

export function smelt(canvas: HTMLCanvasElement, paletten: string[][], opPalet?: (i: number) => void) {
  const gl = canvas.getContext('webgl', { antialias: false, alpha: false, preserveDrawingBuffer: false, powerPreference: 'low-power' });
  if (!gl) return;
  const sh = (type: number, src: string) => { const s = gl.createShader(type)!; gl.shaderSource(s, src); gl.compileShader(s); return s; };
  const prog = gl.createProgram()!;
  gl.attachShader(prog, sh(gl.VERTEX_SHADER, VERT));
  gl.attachShader(prog, sh(gl.FRAGMENT_SHADER, FRAG));
  gl.linkProgram(prog);
  const par = gl.getExtension('KHR_parallel_shader_compile');
  const klaar = () => !par || gl.getProgramParameter(prog, par.COMPLETION_STATUS_KHR);
  const wacht = () => (klaar() ? verder() : setTimeout(wacht, 50));
  wacht();
  function verder() {
  if (!gl) return;
  if (!gl.getProgramParameter(prog, gl.LINK_STATUS)) return;
  gl.useProgram(prog);
  const buf = gl.createBuffer();
  gl.bindBuffer(gl.ARRAY_BUFFER, buf);
  gl.bufferData(gl.ARRAY_BUFFER, new Float32Array([-1, -1, 3, -1, -1, 3]), gl.STATIC_DRAW);
  const loc = gl.getAttribLocation(prog, 'p');
  gl.enableVertexAttribArray(loc);
  gl.vertexAttribPointer(loc, 2, gl.FLOAT, false, 0, 0);
  const uR = gl.getUniformLocation(prog, 'r'), uT = gl.getUniformLocation(prog, 't');
  const uC = [0, 1, 2, 3].map((i) => gl.getUniformLocation(prog, 'c' + i));

  const pal = paletten.map((p) => p.map(hex));
  let van = 0, naar = 0, overgang = 1;
  const zetKleur = () => {
    const e = overgang * overgang * (3 - 2 * overgang);
    uC.forEach((u, i) => {
      const a = pal[van][i], b = pal[naar][i];
      gl.uniform3f(u, a[0] + (b[0] - a[0]) * e, a[1] + (b[1] - a[1]) * e, a[2] + (b[2] - a[2]) * e);
    });
  };

  const maat = () => {
    const w = canvas.clientWidth, h = canvas.clientHeight;
    const schaal = Math.min(0.5, 600 / Math.max(w, 1));
    canvas.width = Math.max(2, Math.round(w * schaal));
    canvas.height = Math.max(2, Math.round(h * schaal));
    gl.viewport(0, 0, canvas.width, canvas.height);
    gl.uniform2f(uR, canvas.width, canvas.height);
  };
  maat();
  new ResizeObserver(maat).observe(canvas);

  const rustig = matchMedia('(prefers-reduced-motion: reduce)').matches;
  const teken = (sec: number) => { gl.uniform1f(uT, sec); zetKleur(); gl.drawArrays(gl.TRIANGLES, 0, 3); };

  if (rustig) { requestAnimationFrame(() => { teken(40); canvas.classList.add('aan'); }); return; }

  let zichtbaar = true, laatst = 0, tijd = 40, wissel = 0, frame = 0;
  const lus = (nu: number) => {
    frame = requestAnimationFrame(lus);
    if (!zichtbaar || document.hidden) { laatst = nu; return; }
    const dt = Math.min(0.1, (nu - laatst) / 1000);
    if (dt < 1 / 32) return;
    laatst = nu;
    tijd += dt;
    wissel += dt;
    if (overgang < 1) overgang = Math.min(1, overgang + dt / 3.2);
    if (wissel > 10 && pal.length > 1) {
      wissel = 0; van = naar; naar = (naar + 1) % pal.length; overgang = 0;
      opPalet?.(naar);
    }
    teken(tijd);
  };
  requestAnimationFrame(() => { teken(tijd); canvas.classList.add('aan'); frame = requestAnimationFrame(lus); });
  new IntersectionObserver((e) => { zichtbaar = e[0].isIntersecting; }).observe(canvas);
  }
}
