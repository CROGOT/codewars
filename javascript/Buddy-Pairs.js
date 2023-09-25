// https://www.codewars.com/kata/59ccf051dcc4050f7800008f
// OK !!!!!
let memo=[0,1,1,1,2];

function sumDel(n){
  if (n===1) return 1;
  if(memo[n]) return memo[n];
  let s=1;
  for(let i=2;i<=Math.sqrt(n);i++)
    if(n%i==0) {
      if (i*i===n) s+=i;
      else {
        s+=i;
        s+=n/i;
      }
    }
    memo[n]=s;
    return s
}

function buddy(start,limit) {
  let a,b;
  for(let i=start;i<limit;i++){
    a=sumDel(i)-1;
    b=sumDel(a)-1;
    if (b==i) return [i,a];
  }
  return "Nothing"; 
}

//console.log(sumDel(48), sumDel(75));
console.log(buddy(2177, 4357));