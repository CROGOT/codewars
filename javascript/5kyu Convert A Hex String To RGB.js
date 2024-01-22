//https://www.codewars.com/kata/5282b48bb70058e4c4000fa7/train/javascript
//ok

function hexStringToRGB(hex) {
  let [out,R,G,B]=hex.match(/#(..)(..)(..)/);
  //console.log(parseInt(R,16),G,B);
  return {r:parseInt(R,16), g:parseInt(G,16), b:parseInt(B,16)};
}

console.log(hexStringToRGB('#FF9933'));

/*
    doTest('#FF9933', {r:255, g:153, b:51})
    doTest('#beaded', {r:190, g:173, b:237})
    doTest('#000000', {r:0, g:0, b:0})
    doTest('#111111', {r:17, g:17, b:17})
    doTest('#Fa3456', {r:250, g:52, b:86})
*/