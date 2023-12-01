varying vec2 vUv;
uniform sampler2D u_texture;    
uniform vec2 u_mouse;
uniform vec2 u_prevMouse;
uniform float u_aberrationIntensity;
uniform vec2 u_res;
vec4 gaussionBlur(vec2 res,sampler2D tex_0,vec2 uv){
    vec3 row1 = vec3(1.0,2.0,1.0)/16.0;
    vec3 row2 = vec3(2.0,4.0,2.0)/16.0;
    vec3 row3 = vec3(1.0,2.0,1.0)/16.0;


    vec2 off = 1.0 / res.xy;
    vec4 a1  = texture2D(tex_0,uv - off) * row1.x; 
    vec4 a2  = texture2D(tex_0,uv + vec2(0,-off.y)) * row1.y; 
    vec4 a3  = texture2D(tex_0,uv + vec2(off.x,-off.y)) * row1.z; 

    vec4 a4  = texture2D(tex_0,uv + vec2(-off.x,0)) * row2.x;
    vec4 a5  = texture2D(tex_0,uv) * row2.y; 
    vec4 a6  = texture2D(tex_0,uv + vec2(off.x,0)) * row2.z;

    vec4 a7  = texture2D(tex_0,uv + vec2(-off.x,off.y)) * row3.x; 
    vec4 a8  = texture2D(tex_0,uv + vec2(0,off.y)) * row3.y; 
    vec4 a9  = texture2D(tex_0,uv + off) * row3.z; 


    return a1+a2+a3+a4+a5+a6+a7+a8+a9;
}
vec4 blur(vec2 res,sampler2D tex_0,vec2 uv){
    vec2 off = 1.0 / res.xy;
    vec4 a0  = texture2D(tex_0,uv); 

    // right
    vec4 a1  = texture2D(tex_0,uv + vec2(off.x,0.0)); 
    // left
    vec4 a2  = texture2D(tex_0,uv - vec2(off.x,0.0)); 
    // top
    vec4 a3  = texture2D(tex_0,uv + vec2(0.0,off.y)); 
    // bottom
    vec4 a4  = texture2D(tex_0,uv - vec2(0.0,off.y)); 

    a0 = (a0+a1+a2+a3+a4)/4.0 ;
    return a0;
}
void main() {
    vec2 gridUV = floor(vUv * vec2(20.0, 20.0)) / vec2(20.0, 20.0);
    vec2 centerOfPixel = gridUV + vec2(1.0/20.0, 1.0/20.0);
    
    vec2 mouseDirection = u_mouse - u_prevMouse;
    
    vec2 pixelToMouseDirection = centerOfPixel - u_mouse;
    float pixelDistanceToMouse = length(pixelToMouseDirection);
    float strength = smoothstep(0.3, 0.0, pixelDistanceToMouse);

    vec2 uvOffset = strength * - mouseDirection * 0.2;
    vec2 uv = vUv - uvOffset;

    vec4 c0 = gaussionBlur(u_res,u_texture,vUv);
    vec4 c1 = blur(u_res,u_texture,vUv);
    vec4 c3 = texture2D(u_texture,vUv);
    // vec4 colorR = texture2D(u_texture, uv + vec2(strength * u_aberrationIntensity * 0.01, 0.0));
    // vec4 colorG = texture2D(u_texture, uv);
    // vec4 colorB = texture2D(u_texture, uv - vec2(strength * u_aberrationIntensity * 0.01, 0.0));
    
    
    gl_FragColor = (c1+c0)/2.0;
    // gl_FragColor = vec4(colorR.r, colorG.g, colorB.b, 1.0);
}