//https://www.codewars.com/kata/5679d5a3f2272011d700000d/train/javascript
var expected = [[ 5, 2, 6, 1, 4, 3 ], 
                [ 6, 4, 3, 2, 5, 1 ], 
                [ 3, 1, 5, 4, 6, 2 ], 
                [ 2, 6, 1, 5, 3, 4 ], 
                [ 4, 3, 2, 6, 1, 5 ], 
                [ 1, 5, 4, 3, 2, 6 ]];

    var clues = [ 0, 3, 0, 5, 3, 4, 
                  0, 0, 0, 0, 0, 1,
                  0, 3, 0, 3, 2, 3,
                  3, 2, 0, 3, 1, 0];

    // var clues = [ 0, 0, 0, 2, 2, 0,
    //   0, 0, 0, 6, 3, 0,
    //   0, 4, 0, 0, 0, 0,
    //   4, 4, 0, 3, 0, 0];



function solvePuzzle(clues) {

  let m =[[ 0, 0, 0, 0, 0, 0],
          [ 0, 0, 0, 0, 0, 0],
          [ 0, 0, 0, 0, 0, 0],
          [ 0, 0, 0, 0, 0, 0],
          [ 0, 0, 0, 0, 0, 0],
          [ 0, 0, 0, 0, 0, 0]];
  //console.log(m[0].toString());
  let pr={up:[], right:[], down:[], left:[]};

  for(let i = 0; i < 6; i++) pr.up[i]=clues[i];
  for(let i = 0; i < 6; i++) pr.right[i]=clues[i+6];
  for(let i = 0; i < 6; i++) pr.down[i]=clues[17-i];
  for(let i = 0; i < 6; i++) pr.left[i]=clues[23-i];

  for(let k = 0; k < 6; k++){
    if (pr.up[k] === 6) for(let i = 0; i < 6; i++) m[i][k]=1+i;
    if (pr.up[k] === 1) m[0][k]=6;

    if (pr.right[k] === 6) for(let i = 0; i < 6; i++) m[k][5-i]=1+i;
    if (pr.right[k] === 1) m[k][5]=6;

    if (pr.down[k] === 6) for(let i = 0; i < 6; i++) m[5-i][k]=1+i;
    if (pr.down[k] === 1) m[5][k]=6;

    if (pr.left[k] === 6) for(let i = 0; i < 6; i++) m[k][i]=1+i;
    if (pr.left[k] === 1) m[k][0]=6;

  }
  //console.log(m);

  let flag=false;

  function putNumber(n){
    if (n<0) return false;
    if (n>35) return true;

    let x = ~~(n/6), y = n%6;

    if (m[x][y]!==0 && okClues(x,y) && putNumber(n+1)) {
      flag = true; return true;
    }
    else { 
          let setNumber = [0,1,2,3,4,5,6];
          
          for(let i = 0; i < 6; i++) {
            setNumber[m[x][i]]=0;
            setNumber[m[i][y]]=0;
          }
          
          if (setNumber.toString()=='0,0,0,0,0,0,0') return false;
          for(let i = 6; i > 0; i--)
            if(setNumber[i] && flag==false){
              m[x][y] = setNumber[i];
              if (okClues(x,y) && putNumber(n+1)) {
                flag = true;
                return true;
              }
              else m[x][y] = 0;
            }
    } //end else

    if (flag) return true;
    //m[x][y] = 0;    
    return false;                      
  }

  function okClues(x,y){
    if (pr.up[y]!==0){
      let max=0, count=0;
      for(let i = 0; i < 6; i++)
        if (m[i][y] > max) {
          count++;
          if (count > pr.up[y]) return false;
          max = m[i][y];
        }
        if (x===5 && count !== pr.up[y]) return false;
    }
    if (pr.left[x]!=0){
      let max=0, count=0;
      for(let i = 0; i < 6; i++)
        if (m[x][i] > max) {
          count++;
          if (count > pr.left[x]) return false;
          max = m[x][i];
        }
        if (y===5 && count !== pr.left[x]) return false;
    }
    if (pr.down[y]!==0 && (x==5)){
      let max=0, count=0;
      for(let i = 5; i >= 0; i--)
        if (m[i][y] > max) {
          count++;
          if (count > pr.down[y]) return false;
          max = m[i][y];
        }
        if (count !== pr.down[y]) return false;
    }
    if (pr.right[x]!==0 && (y==5)){
      let max=0, count=0;
      for(let i = 5; i >= 0; i--)
        if (m[x][i] > max) {
          count++;
          if (count > pr.right[x]) return false;
          max = m[x][i];
        }
        if (count !== pr.right[x]) return false;
    }
    return true;
  }

  putNumber(0);
  return m;
}

var time = performance.now();

console.log(solvePuzzle(clues));

time = performance.now() - time;

console.log('Время выполнения = ', (time/1000).toFixed(2));
