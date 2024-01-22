//https://www.codewars.com/kata/5653d33e78e3d9dfe600004e/train/javascript
//ok

function telephoneWords (d) {
  const num=['0','1','ABC','DEF','GHI','JKL','MNO','PQRS','TUV','WXYZ'];
  let out=[];
  d=d.split('').map(v=>+v);
  function rec(i,s=''){
    if(i>=d.length) {
      out.push(s);
      return;
    }
    for (let j=0; j<num[d[i]].length; j++) rec(i+1,s+num[d[i]][j]);
  }
  rec(0);
  return out;
}

console.log(telephoneWords("0002"));
/*
telephoneWords("0002"), ["000A","000B","000C"]);
*/