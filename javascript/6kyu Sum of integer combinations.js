//https://www.codewars.com/kata/59f3178e3640cef6d90000d5/train/javascript
//ok

function find(arr, n){
  let out=0, len=arr.length;
  function sum(i,r,k){
    if(r.length>len) return false;
    if(k==n) return ++out;
    if(i<len) for (let j=i; j<len; j++) sum(j,[...r,arr[j]],k+arr[j]);
  }
  sum(0,[],0);
  return out;
};

console.log(find([3,6,9,12],12));


/*
Test.assertEquals(find([1,2,3],10),0)
Test.assertEquals(find([1,2,3],7),2)
Test.assertEquals(find([1,2,3],5),3)
Test.assertEquals(find([3,6,9,12],12),5)
Test.assertEquals(find([1,4,5,8],8),3)
Test.assertEquals(find([3,6,9,12],15),5)
Test.assertEquals(find([3,6,9,12,14,18],30),21)
*/