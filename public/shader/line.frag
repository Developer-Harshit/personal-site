precision highp float;

uniform sampler2D utex_0;
uniform float usize;
uniform vec2 ures;
uniform vec2 upos_0;
uniform vec2 upos_1;

varying vec2 uv;
float line (vec2 p1, vec2 p2, vec2 uv, float a){
    float r = 0.0;
    float thickness = a / max(ures.x,ures.y); //not really one px
    // get dist between points
    float d = distance(p1, p2);
    // get dist between current pixel and p1
    float duv = distance(p1, uv);
    //if point is on line, according to dist, it should match current uv 
    r = 1.0-floor(1.0-thickness + distance(mix(p1, p2, clamp(duv/d, 0.0, 1.0)),  uv));
        
    return r;
}

vec4 blur(){
    vec2 off = 1.0 / ures.xy;
    vec4 a0  = texture2D(utex_0,uv); 

    // right
    vec4 a1  = texture2D(utex_0,uv + vec2(off.x,0.0)); 
    // left
    vec4 a2  = texture2D(utex_0,uv - vec2(off.x,0.0)); 
    // top
    vec4 a3  = texture2D(utex_0,uv + vec2(0.0,off.y)); 
    // bottom
    vec4 a4  = texture2D(utex_0,uv - vec2(0.0,off.y)); 

    a0 = (a0+a1+a2+a3+a4)/5.2 ;
    return a0;
}


void main() {
    
    vec4 a0  = blur();
    vec2 pos_0 = upos_0 / ures;
    vec2 pos_1 = upos_1 / ures;
    float lineData = line(pos_0,pos_1,uv,usize);
    gl_FragColor = max(a0 , vec4(lineData,lineData/2.0,0.1,1.0));
}

