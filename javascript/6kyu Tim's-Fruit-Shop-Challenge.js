//https://www.codewars.com/kata/652643925c042100247fffc6/train/javascript
// OK !!!


function fruitPack(orders) {
  let out=[];
  let r=orders.map(s=>s.match(/\d+\D/g).map(v=>[+v.match(/\d+/),v.at(-1)]))
  r.forEach((v,idx)=>{
    let s=['','',''];
    v.forEach(i=>{
      let k50 = Math.floor(i[0]/50); i[0]%=50;
      if (k50) s[2]+=`[${i[1]}]`.repeat(k50);
      let k10 = Math.floor(i[0]/10); i[0]%=10;
      if (k10) s[1]+=`{${i[1]}}`.repeat(k10);
      if (i[0]) s[0]+=`(${''.padEnd(i[0],i[1])})`;
    });
    let max=s.reduce((a,e)=>Math.max(a,e.length),0);
    s=s.map(e=>e.padStart(max,'-'));
    out.push(s)
  }
  );
  return out
}

console.log(fruitPack(['10a3b', '64j1k92i']));

/*
[
  '(bbb)',
  '--{a}',
  '-----'
],
[
  '--(jjjj)(k)(ii)',
  '{j}{i}{i}{i}{i}',
  '---------[j][i]'
]

*/