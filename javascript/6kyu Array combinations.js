//https://www.codewars.com/kata/59e66e48fc3c499ec5000103/train/javascript
//ok

function solve(arr) {
  let out=new Set();

  function step(n=0,r=[]){
    //console.log(n, arr[n]);
    if(n>=arr.length) out.add(r.toString());
    else for(let i=0; i<arr[n].length; i++) step(n+1,[...r,arr[n][i]]);
  }

  step();
  
  return out.size;
}

console.log(solve([[1,2],[4,4],[5,6,6]]));

/*
Test.assertEquals(solve([[1,2],[4],[5,6]]),4);
Test.assertEquals(solve([[1,2],[4,4],[5,6,6]]),4);
Test.assertEquals(solve([[1,2],[3,4],[5,6]]),8);
Test.assertEquals(solve([[1,2,3],[3,4,6,6,7],[8,9,10,12,5,6]]),72);

*/
