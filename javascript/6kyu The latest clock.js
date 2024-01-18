//https://www.codewars.com/kata/58925dcb71f43f30cd00005f/train/javascript
//

function latestClock(a, b, c, d) {
  var results = [];
  function permute(arr, memo) {
    var cur;
    var memo = memo || [];
    for (var i = 0; i < arr.length; i++) {
      cur = arr.splice(i, 1);
      if (arr.length === 0) {
        results.push(memo.concat(cur));
      }
      permute(arr.slice(), memo.concat(cur));
      arr.splice(i, 0, cur[0]);
    }
    return results;
  }
  let hh=0, mm=0, fl=false, r=permute([a,b,c,d]);
  r.forEach(([a,b,c,d])=>{
    console.log(a,b,c,d);
    if(a*10+b < 24 && c*10+d < 60 && a*1000+b*100+c*10+d >= hh*100+mm) {
      hh=a*10+b;
      mm=c*10+d;
    }
  })
  
  return String(hh).padStart(2,'0')+':'+String(mm).padStart(2,'0')
}

console.log(latestClock(9, 1, 2, 5));


//digits: 1, 9, 8, 3 => result: "19:38"
//digits: 9, 1, 2, 5 => result: "21:59" ("19:25" is also a valid time, but 21:59 is later)