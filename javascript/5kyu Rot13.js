//https://www.codewars.com/kata/530e15517bc88ac656000716/train/javascript
//ok
function rot13(s){
  s=s.replace(/[a-z]/g,c=>String.fromCharCode((c.charCodeAt(0)-'a'.charCodeAt(0)+13)%26+'a'.charCodeAt(0)));
  s=s.replace(/[A-Z]/g,c=>String.fromCharCode((c.charCodeAt(0)-'A'.charCodeAt(0)+13)%26+'A'.charCodeAt(0)));
  return s;
}

console.log(rot13("Test"));
/*
["test", "grfg"], ["Test", "Grfg"]
*/