//https://www.codewars.com/kata/5711fc7c159cde6ac70003e2/train/javascript
//в тесте №3 отсутствуют ответы [-2, 1, 1], [-1, -1, 2]]

function findZeroSumGroups(arr, n){
  if(!arr.length) return 'No elements to combine';
  
 // console.log(arr);
  const subArr = Array(n).fill(0);
  let out=[];

  function find(i, k, sum){
    if(k>=n) {
      if(sum==0){
        out.push([...subArr]);
        return true;
      }
    } else for (let j=i; j<arr.length-n+k+1; j++){
      subArr[k]=arr[j];
      find(j+1,k+1,sum+arr[j])
    }
  }

  for (let i=0; i<arr.length-n+1; i++){
    subArr[0]=arr[i];
    find(i+1,1,arr[i])
  }
 
  out=Array.from(new Set(out.map(v=>v.sort((a,b)=>a-b)).sort((a,b)=>{
    for (let i=0; i<a.length; i++) if (a[i]!==b[i]) return a[i]-b[i];
    return 0;
  }).map(v=>v.join())
  )).map(v=>v.split(',').map(a=>+a));

  if(!out.length) return 'No combinations';
  return out.length==1?out[0]:out;
}   

console.log(findZeroSumGroups([1, -1, 2, 3, -2, 4, 5, -3 ],3)); //[[-3, -2, 5], [-3, -1, 4], [-3, 1, 2], [-2, -1, 3]]);
console.log(findZeroSumGroups([1, -1, 2, 3, -2, 4, 5, -3, -3, -1, 2, 1, 4, 5, -3 ],3)); //[[-3, -2, 5], [-3, -1, 4], [-3, 1, 2], [-2, -1, 3], [-2, 1, 1 ], [ -1, -1, 2 ]]