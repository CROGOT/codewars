//https://www.codewars.com/kata/5416ce834c2460b4d300042d/train/javascript
// OK !!!

function bin2gray(bits){
  for (let i=bits.length-1; i>=0; i--)
    if(bits[i-1]) bits[i]=1-bits[i];
  return bits
}

function gray2bin(gray){
  for (let i=0; i<gray.length; i++)
  if(gray[i-1]) gray[i]=1-gray[i];
return gray
}

console.log(bin2gray([1,1]));
console.log(gray2bin([1,0]));