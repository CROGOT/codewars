// codewars.com/kata/5c09ccc9b48e912946000157/train/javascript
// OK !!!!
var mountain = [
  "^^^^^^        ".split(''),
  " ^^^^^^^^     ".split(''),
  "  ^^^^^^^     ".split(''),
  "  ^^^^^       ".split(''),
  "  ^^^^^^^^^^^ ".split(''),
  "  ^^^^^^      ".split(''),
  "  ^^^^        ".split('')
];

var peakHeight = function(m) {
  m=m.map(arr => arr.map(item =>item==='^'?1:0));
  const sum = m.reduce((ac,item)=>ac+item.reduce((a, v)=>a+v,0), 0);
  if (!sum) return 0;
  let flag, k=0;
  do {
    k++;
    flag=false
    for(let i=0;i<m.length; i++)
      for(let j=0;j<m[i].length; j++)
        if (i-1>=0 && j-1>=0 && i+1<m.length && j+1<m[i].length && m[i][j]===k && k<=m[i-1][j] && k<=m[i+1][j] && k<=m[i][j-1] && k<=m[i][j+1]) {
          m[i][j]=k+1;
          flag=true;
        }
  
  } while  (flag) ;
  //console.dir(m.map(arr=>arr.join('').replaceAll('0',' ')));
  return k;
}

console.log(peakHeight(mountain));



