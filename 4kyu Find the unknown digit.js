//https://www.codewars.com/kata/546d15cebed2e10334000ed9/train/javascript
//

function solveExpression(exp) {
  var [e,a]=exp.split('=');
  let e1,a1;
  let noZero=e.match(/\D*\?{2,}\D/g)||a.match(/\D*\?{2,}\D/g);
  console.log(noZero);
  for(let i=0; i<10; i++){
    if(!i && noZero) continue;
    try {
      e1=eval(e.replaceAll('?',i));
    } catch (err) {
      continue;
    }
    a1=+a.replaceAll('?',i);
    //console.log(e1,a1);
    if(e1===a1) return i
  }
  return -1
  //console.log(e,a);
}


console.log(solveExpression('1?*1?=1??'));