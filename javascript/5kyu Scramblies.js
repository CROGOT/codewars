//https://www.codewars.com/kata/55c04b4cc56a697bb0000048/train/javascript
//ok

function scramble(str1, str2) {

  function hash(s){
    let out = {};
    [...s].forEach(v=>{
      if (out[v]) out[v]++; else out[v]=1;
    })
    return out;
  }

  let h1=hash(str1), h2=hash(str2);
  for (key in h2) {
    if(!h1[key] || h1[key]<h2[key]) return false;
  }

  return true;
}

console.log(scramble('cedewaraaossoqqyt', 'codewars')); //true