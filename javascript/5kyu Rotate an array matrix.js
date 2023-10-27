//https://www.codewars.com/kata/525a566985a9a47bc8000670/train/javascript
//ok

// function rotate(mat, dir) {
//   return dir === "clockwise" ?
//     mat[0].map((_, i) => mat.map(row => row[i]).reverse()) :
//     mat[0].map((_, i) => mat.map(row => row[i])).reverse()
// }

function rotate(matrix, direction) {
  console.log(matrix)
  let out=Array.from({length: matrix[0].length},_=>[]);
  for (let x=0; x<matrix.length; x++)
    for (let y=0; y<matrix[0].length; y++)
      if (direction=='clockwise') out[y][matrix.length-x-1]=matrix[x][y];
      else  out[matrix[0].length-y-1][x]=matrix[x][y];
  return out;
}

console.log(rotate([ [ 1, 2, 3 ], [ 4, 5, 6 ], [ 7, 8, 9 ], [ 10, 11, 12 ] ],'clockwise'));