//https://www.codewars.com/kata/5716a4c2794d305f4900156b/train/javascript
//

function findPartMaxProd(n){
  let out=[];
  function step(r=[], k){
    if(k<=0){
      out.push(r);
      return;
    }
    if(k<=1){
      out.push([...r,k]);
      return;
    }
    for(let i=k; i>=1; i--) step ([...r,i], i)
    //out.push(r);
  }
  step([],n)
  return out;
}
console.log(findPartMaxProd(8));