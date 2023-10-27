//https://www.codewars.com/kata/589a9792ea93aae1bf00001c/train/javascript
//ok

function isThueMorse(seq) {
  let b=[0];
  for (let i=0; i<=Math.ceil(Math.log2(seq.length)); i++)
   b.push(...b.map(i=>Number(!i)));
  return b.toString().indexOf(seq.toString())==0?true:false;
}

console.log(isThueMorse([0, 1, 1, 0,]));