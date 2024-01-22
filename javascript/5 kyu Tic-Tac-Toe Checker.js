//https://www.codewars.com/kata/525caa5c1bf619d28c000335/train/javascript
//ok

function isSolved(b) {
  function win(n){
    const w=[7,56,448,73,146,292,273,84];
    for (let i=0; i<w.length; i++)
      if((n&w[i])==w[i]) return true;
    return false;
  }
  let x=0, o=0, zero=false;
  for (let i=0; i<3; i++)
    for (let j=0; j<3; j++){
      if(b[i][j]==1) x+=1<<(i*3+j);
      if(b[i][j]==2) o+=1<<(i*3+j);
      if(!b[i][j]) zero=true;
    }
   // console.log(x.toString(2),x, o.toString(2),o, win(x));
  if(win(x)) return 1;
  if(win(o)) return 2;
  if(zero) return -1;
  return 0;

}

// console.log(isSolved([[1,0,1],
//                       [0,1,0],
//                       [1,0,0]]));

console.log(isSolved([[0,0,1],
                      [0,1,2],
                      [2,1,0]]));


/*
-1  если доска еще не закончена И еще никто не выиграл (есть пустые места),
1   если бы «X» выиграл,
2   если бы «О» выиграло,
0   если это кошачья игра (т.е. ничья).

function isSolved(board) {
   board = board.join('-').replace(/,/g,'');
   if(/222|2...2...2|2....2....2|2..2..2/.test(board)) return 2;
   if(/111|1...1...1|1....1....1|1..1..1/.test(board)) return 1;
   if(/0/.test(board)) return -1;
   return 0;
}

*/