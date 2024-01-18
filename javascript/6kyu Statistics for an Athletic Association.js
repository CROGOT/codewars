//https://www.codewars.com/kata/55b3425df71c1201a800009c/train/javascript
//ok

function stat(s) {
  if (!s.length) return '';
  
  const NN=n=>Math.floor(n).toString().padStart(2,'0');
  const toTime=n=>NN(n/3600)+'|'+NN(n%3600/60)+'|'+NN(n%60);
  const avg=r=>r.reduce((a,v,_,m)=>a+v/m.length,0);
  
  let r=s.split(", ").map(v=>v.split("|")).map(([h,m,s])=>h*3600+m*60+ +s).sort((a,b)=>b-a);
  let range=toTime(r[0]-r[r.length-1]);
  let average=toTime(avg(r))
  let median=toTime(r.length%2?r[Math.floor(r.length/2)]:avg([r[r.length/2],r[r.length/2-1]]));
  
  return  `Range: ${range} Average: ${average} Median: ${median}`;
}

console.log(stat("01|15|59, 1|47|16, 01|17|20, 1|32|34, 2|17|17"));

//"Range: 01|01|18 Average: 01|38|05 Median: 01|32|34"