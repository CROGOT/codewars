//https://www.codewars.com/kata/58c5577d61aefcf3ff000081/train/javascript
// не завершено !!!!!
function encodeRailFenceCipher(string, n) {
  const m = (new Array(n)).fill('');
  for(let i=0; i*(n-1)*2 < string.length+n;i++){
    const b=i*(n-1)*2;
    if(string[b]) m[0]+=string[b];
    for(let j=1; j<n-1; j++){
      const k=i*(n-1)*2;
      if (string[k-j]) m[j]+=string[k-j];
      if (string[k+j]) m[j]+=string[k+j];
    }
    const k=i*(n-1)*2+n-1;
    if (string[k]) m[n-1]+=string[k];
  }
  console.log(m);
  return m.join('');
}

function decodeRailFenceCipher(string, n) {
  const m = (new Array(n)).fill('');
  let out='';
  let x=~~(string.length/(2*n-2)+1);
  let xk=~~((string.length-n+1)/(2*n-2)+1);
  m[0]=string.substring(0,x);
  for (let k=0; k<n-2; k++) m[k+1]=string.substring(x+(2*x-2)*k,x+(2*x-2)*(k+1));
  //m[n-1]=string.substring(x+(2*x-2)*(n-2));
  m[n-1]=string.substring(string.length-xk);

  for(let i=0; i < x; i++){
    out+=m[0][i];
    let t='';
    if (i<m[n-1].length) t=m[n-1][i];

    for(let j=n-2; j>0; j--){
      if (2*i<m[j].length) t= m[j][2*i]+t;
      if (2*i+1<m[j].length) t+=m[j][2*i+1];
    }
    out+=t;
  }
  console.log(m, x, n)
  return out;
}
//console.log(encodeRailFenceCipher("0123456", 3));
console.clear();
console.log(decodeRailFenceCipher(encodeRailFenceCipher("01234567890abcde", 4),4));
console.log(decodeRailFenceCipher(encodeRailFenceCipher("01234567890abcd", 4),4));
console.log(decodeRailFenceCipher(encodeRailFenceCipher("01234567890abc", 4),4));
console.log(decodeRailFenceCipher(encodeRailFenceCipher("01234567890ab", 4),4));
//console.log(decodeRailFenceCipher("01234567", 3));
                                                                      
//console.log(encodeRailFenceCipher("WEAREDISCOVEREDFLEEATONCE", 3)); //WECRLTEERDSOEEFEAOCAIVDEN
//console.log(encodeRailFenceCipher("Hello, World!", 3)); //Hoo!el,Wrdl l

