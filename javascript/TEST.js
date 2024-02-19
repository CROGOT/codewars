const fact=(function () {
  let r=[0n,1n,2n,6n];
  return function(n){
    if(n<2n) return 1n;
    if(!r[n]) r[n]=BigInt(n)*fact(n-1);
    return r[n];
  }
}());

console.log(fact(35));