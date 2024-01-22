//https://www.codewars.com/kata/5671d975d81d6c1c87000022/train/javascript
//ok !!!!

var clues =[0, 0, 1, 2,
            0, 2, 0, 0,
            0, 3, 0, 0,
            0, 1, 0, 0];
            var clues = [2, 2, 1, 3,
              2, 2, 3, 1,
              1, 2, 2, 3,
              3, 2, 1, 3];



function solvePuzzle(clues) {

  let m =[[ 0, 0, 0, 0],
          [ 0, 0, 0, 0],
          [ 0, 0, 0, 0],
          [ 0, 0, 0, 0]];
  //console.log(m[0].toString());
  let pr={up:[], right:[], down:[], left:[]};

  for(let i = 0; i < 4; i++) pr.up[i]=clues[i];
  for(let i = 0; i < 4; i++) pr.right[i]=clues[i+4];
  for(let i = 0; i < 4; i++) pr.down[i]=clues[11-i];
  for(let i = 0; i < 4; i++) pr.left[i]=clues[15-i];

  for(let k = 0; k < 4; k++){
    if (pr.up[k] === 4) for(let i = 0; i < 4; i++) m[i][k]=1+i;
    if (pr.up[k] === 1) m[0][k]=4;

    if (pr.right[k] === 4) for(let i = 0; i < 4; i++) m[k][3-i]=1+i;
    if (pr.right[k] === 1) m[k][3]=4;

    if (pr.down[k] === 4) for(let i = 0; i < 4; i++) m[3-i][k]=1+i;
    if (pr.down[k] === 1) m[3][k]=4;

    if (pr.left[k] === 4) for(let i = 0; i < 4; i++) m[k][i]=1+i;
    if (pr.left[k] === 1) m[k][0]=4;

  }

  let flag=false;

  function putNumber(n){
    if (n<0) return false;
    if (n>15) return true;

    let x = ~~(n/4), y = n%4;

    if (m[x][y]!==0 && okClues(x,y) && putNumber(n+1)) {
      flag = true; return true;
    }
    else { 
          let setNumber = [0,1,2,3,4];
          
          for(let i = 0; i < 4; i++) {
            setNumber[m[x][i]]=0;
            setNumber[m[i][y]]=0;
          }
          
          if (setNumber.toString()=='0,0,0,0,0') return false;
          for(let i = 4; i > 0; i--)
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
    return false;                      
  }

  function okClues(x,y){
    if (pr.up[y]!==0){
      let max=0, count=0;
      for(let i = 0; i < 4; i++)
        if (m[i][y] > max) {
          count++;
          if (count > pr.up[y]) return false;
          max = m[i][y];
        }
        if (x===3 && count !== pr.up[y]) return false;
    }
    if (pr.left[x]!=0){
      let max=0, count=0;
      for(let i = 0; i < 4; i++)
        if (m[x][i] > max) {
          count++;
          if (count > pr.left[x]) return false;
          max = m[x][i];
        }
        if (y===3 && count !== pr.left[x]) return false;
    }
    if (pr.down[y]!==0 && (x==3)){
      let max=0, count=0;
      for(let i = 3; i >= 0; i--)
        if (m[i][y] > max) {
          count++;
          if (count > pr.down[y]) return false;
          max = m[i][y];
        }
        if (count !== pr.down[y]) return false;
    }
    if (pr.right[x]!==0 && (y==3)){
      let max=0, count=0;
      for(let i = 3; i >= 0; i--)
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
