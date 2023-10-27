//https://www.codewars.com/kata/5a1ebe0d46d843454100004c/train/javascript
//ok

function toDayOfYear([d,m,y]) {
  const oneDay = 1000 * 60 * 60 * 24; 
  return (new Date(y,m-1,d) - new Date(y,0,1)) / oneDay + 1;
}

console.log(toDayOfYear([25, 12, 2017])); //359