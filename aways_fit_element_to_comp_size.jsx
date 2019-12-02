// CODE BY Djame Goldston 2011
transform.scale
w = thisLayer.width;
h = thisLayer.height;

compW = thisComp.width;
compH = thisComp.height;

p = thisComp.pixelAspect;

s1 = (compW / w ) * 100;
s2 = (compH / h ) * 100;

if ( s1 > s2 ){ //test size difference
[ s2 * p , s2 * p ]
}else{
[ s1 * p , s1 * p ]
}