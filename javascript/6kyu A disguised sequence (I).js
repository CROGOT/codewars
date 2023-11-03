//https://www.codewars.com/kata/563f0c54a22b9345bf000053/train/javascript
//  Given u0 = 1, u1 = 2 and the relation 6unun+1-5unun+2+un+1un+2 = 0 calculate un for any integer n >= 0.
// const hash=[1,2];
// function fcn(n) {
//   if(n<2) return hash[n];
//   if(hash[n]) return hash[n];
//   hash[n]=(6*fcn(n-2)*fcn(n-1))/(5*fcn(n-2)-fcn(n-1));
//   return hash[n]
// }
const fcn=n=>parseInt('1'.padEnd(n+1,'0'),2);

console.log(fcn(43));
//console.log(hash);