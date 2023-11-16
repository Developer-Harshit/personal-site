precision highp float;



uniform sampler2D texA;
uniform sampler2D texB;

uniform vec2 resolution;
uniform float dB;
uniform float rate;


varying vec2 uv;
 vec2 off = 1.0 / resolution;

vec3 laplace(in vec3 state){

    vec3 result = -1.0 * state;

    vec3 c1 = texture2D(texB,uv + vec2(-off.x,-off.y) ).rgb * 0.05; 
    vec3 c2 = texture2D(texB,uv + vec2(0.0,-off.y)).rgb * 0.2; 
    vec3 c3 = texture2D(texB,uv + vec2(off.x,-off.y)).rgb * 0.05; 
    vec3 c4 = texture2D(texB,uv + vec2(-off.x,0.0)).rgb * 0.2; 
    vec3 c5 = texture2D(texB,uv + vec2(off.x,0.0)).rgb * 0.2; 
    vec3 c6 = texture2D(texB,uv + vec2(-off.x,off.y)).rgb * 0.05; 
    vec3 c7 = texture2D(texB,uv + vec2(0.0,off.y)).rgb * 0.2; 
    vec3 c8 = texture2D(texB,uv + vec2(off.x,off.y)).rgb * 0.05; 
    result = result + c1 + c2 + c3 + c4 + c5 + c6 + c7 + c8;
    return result;

}
void main() {
    vec3 a = texture2D(texA,uv).rgb; 
    vec3 b  = texture2D(texB,uv).rgb; 
    vec3 newB = vec3(0.0);

    newB.x = b.x + (dB * laplace(b).x + a.x * b.x * b.x - (rate)*b.x);
    newB.x = clamp(newB.x,0.0,1.0);
    newB.xyz = newB.xxx;
    gl_FragColor = vec4(newB,1.0);
}


