//https://www.codewars.com/kata/659af96994b858db10e1675f/train/javascript
//ok

function beginning(xs) {
  let len=0;
  while(len<10 && len<xs.length){
    len++;
    let n=+xs.substring(0,len);
    let s=''+n;
    for (let i=n+1; i<1000000001; i++){
     s+=i;
     if(xs.indexOf(s)!=0 || s.length>=xs.length) break;
    }
    if (xs==s) return n;
  }
 // console.log(len);
  return xs;
}

console.log(beginning("17181920"));

/*
"91011" -> [9, 10, 11] -> 9
"17181920" -> [17, 18, 19, 20] -> 17
"9899100" -> [98, 99, 100] -> 98
"121122123" -> [121, 122, 123] -> 121
"1235" -> [1235] -> 1235
*/