//https://www.codewars.com/kata/55eeddff3f64c954c2000059/train/javascript
//ok
const sumConsecutives=(s,r=[])=>{s.forEach((v,i,m)=>v===m[i-1]?r[r.length-1]+=v:r.push(v));return r};

console.log(sumConsecutives([1,4,4,4,0,4,3,3,1]));
/*
sumConsecutives([1,4,4,4,0,4,3,3,1]),[1,12,0,4,6,1], "on list [1,4,4,0,4,3,3,1] you get ")
sumConsecutives([1,1,7,7,3]),[2,14,3], "on list [1,1,7,7,3] you get ")
sumConsecutives([-5,-5,7,7,12,0]),[-10,14,12,0], "on list [-5,-5,7,7,12,0] you get ")
sumConsecutives([3,3,3,3,1]),[12, 1], "on list [3,3,3,3,1] you get " )

*/