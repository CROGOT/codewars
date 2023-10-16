//https://www.codewars.com/kata/58a3a735cebc0630830000c0/train/javascript

function stringConstructing(a, s) {
  let out=0, i=0;
  while (i<s.length){
    out++;
    for (let j=0; j<a.length; j++)
      if (i<s.length && s[i]==a[j]) {
        i++;
        continue;
      } 
      else out++;
  }
  return out;
}

console.log(stringConstructing( "aba","abbabba")) // 9
