precision highp float;

uniform sampler2D texA;
uniform sampler2D texB;

varying vec2 uv;


void main() {
    vec3 a  = texture2D(texA,uv).rgb; 
    vec3 b = texture2D(texB,uv).rgb; 
    vec3 c = (a.xxx - b.xxx );

    gl_FragColor = vec4(c,1.0);
}


