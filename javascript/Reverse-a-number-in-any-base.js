function reverseNumber(n, b){
  if (b===1n) return n;
  const d = [];
  while (n>0){
    let o = n%b;
    n = (n-o)/b;
    d.push(o);
  }
  return d.reverse().reduce((a,v,i)=>a+v*b**BigInt(i),0n)
}


console.log(reverseNumber(12n, 2n)); //