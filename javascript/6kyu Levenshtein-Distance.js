//https://www.codewars.com/kata/545cdb4f61778e52810003a2/train/javascript
//OK !!!

function levenshtein (a,b){
  let m = a.length;
  let n = b.length;
  let arr = Array(m+1).fill().map(r=> Array(n+1).fill(0));

  for (let i=1; i <= m; i++) arr[i][0]=i;
  for (let j=1; j <= n; j++) arr[0][j]=j;  

  for (let i=1; i <= m; i++){
    for (let j=1; j <= n; j++){
      let cost=1;
      if (a[i-1] == b[j-1]) cost=0;
      arr[i][j] = Math.min(arr[i-1][j]+1, arr[i][j-1]+1, arr[i-1][j-1]+cost);
    }
  }
  return arr[m][n];
}

console.log(levenshtein("nscfwsu", "uefwqai"));