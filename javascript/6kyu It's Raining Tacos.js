//https://www.codewars.com/kata/64f4ef596f222e004b877272/train/javascript
//ok
function rainTacos(s) {
  s=s.split('\n').map(v=>v.split(''));
  let T='TACO'.repeat(Math.ceil(s[0].length/4)).split('');
  //T.length=s[0].length;
  //s=[T,...s];
  for (let i=s.length-1; i>=0; i--)
    for (let j=0; j<s[0].length; j++){
      let space=true;
      for (let k=0; k<=i; k++)
        if(s[k][j]!=' ') space=false;
      if(space){
        s[i][j]=T[j];
        T[j]=' ';
      }
    }
  return s.map(v=>v.join('')).join('\n');
}

// console.log(rainTacos("     \n     \nOOOOO"));
// console.log(rainTacos('* *\n* *\n* *\n* *\n* *\n* *\n* *\n* *\n* *\n* *'));
console.log(rainTacos('          \n    ==    \n          \n          \n          '));
/*
  assert.deepEqual(rainTacos("     \n     \nOOOOO"), "     \nTACOT\nOOOOO");
  });
  it("No Tacos", function() {
    assert.deepEqual(rainTacos("OOOOO\nOOOOO\nOOOOO"), "OOOOO\nOOOOO\nOOOOO");
  });
  it("Taco Island", function() {
    assert.deepEqual(rainTacos("       \n       \n   O   \n  OOO  \n TACOS "), "       \n   O   \n  COT  \n AOOOA \nTTACOSC");
  });
  it("Deep Trench", function() {
    assert.deepEqual(rainTacos("* *\n* *\n* *\n* *\n* *\n* *\n* *\n* *\n* *\n* *"), "* *\n* *\n* *\n* *\n* *\n* *\n* *\n* *\n* *\n*A*");
  });
  it("Long Landscape", function() {
    assert.deepEqual(rainTacos("              \n--------------"), "TACOTACOTACOTA\n--------------");
  });
  it("Floating Island", function() {
   

*/