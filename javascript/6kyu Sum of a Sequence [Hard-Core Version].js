//https://www.codewars.com/kata/587a88a208236efe8500008b/train/javascript
//ok
function sequenceSum(a1, end, d){
  if((a1>end && d>0) || (a1<end && d<0)) return 0;
  let n=Math.floor((end-a1)/d+1);
  let an=a1+d*(n-1);
  let sn=(a1+an)*n/2
  return sn;
}

console.log(sequenceSum(1,5,3));

/*

Test.assertEquals(sequenceSum(2, 6, 2), 12);
Test.assertEquals(sequenceSum(1, 5, 1), 15);
Test.assertEquals(sequenceSum(1, 5, 3), 5);
Test.assertEquals(sequenceSum(-1, -5, -3), -5);
Test.assertEquals(sequenceSum(16, 15, 3), 0); 
Test.assertEquals(sequenceSum(-24, -2, 22), -26);
Test.assertEquals(sequenceSum(-2, 4, 658), -2);
Test.assertEquals(sequenceSum(780, 68515438, 5), 469436517521190);
Test.assertEquals(sequenceSum(9383, 71418, 2), 1253127200);
Test.assertEquals(sequenceSum(20, 67338879, 5), 453452442295970);



*/