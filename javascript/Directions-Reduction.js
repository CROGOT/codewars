//https://www.codewars.com/kata/550f22f4d758534c1100025a/train/javascript
// OK !!!

// function dirReduc(arr){
// 	var opposite = { "SOUTH":"NORTH", "NORTH":"SOUTH", "WEST":"EAST", "EAST":"WEST"}
// 	return arr.reduce(function (a, b, i) {
//   	opposite[a.slice(-1)] === b ? a.pop() : a.push(b)
//   	return a
//   }, [])
// }


function dirReduc(r){
  r=r.toString();
  let l;
  do{
    l = r.length;
    r=r.replaceAll(/NORTH,SOUTH|SOUTH,NORTH|WEST,EAST|EAST,WEST|(?<=,),|^,|,$/g,'');
    console.log(r);
  } while(l>r.length);
  return r?r.split(','):[];
}


console.log(dirReduc(["NORTH", "SOUTH", "SOUTH", "EAST", "WEST", "NORTH", "WEST"]));  //["WEST"]