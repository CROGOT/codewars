//https://codewars.com/kata/58aa6141c9eb047fec000133/train/javascript


//https://oeis.org/A000960
const n = 5000
const d=Array.from({length: n}).fill(1);

function survivor(p) {
  for(let k=2; k<n; k++){
    let s=0
    for(let i=1; i<n; i++)
      if(d[i]) {
        s++;
        if(s==k) {
          d[i]=0;
          s=0;
        }
      }
  }
  out = d.map((v,i)=>v?i:0).filter(k=>k>0);
  console.log(out);
  return out.map((_,i)=>out[i]-out[i-1])
}

console.log(survivor());