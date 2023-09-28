Array.prototype.sameStructureAs = function (m) {
  const r=JSON.stringify(this).replaceAll(/"."|\d+/g,'');
        m=JSON.stringify(m).replaceAll(/"."|\d+/g,'');
 console.log(r, m);
 return r===m;
};

//[1,[1,1]].sameStructureAs([2,[2,2]]);
[1,'[',']'].sameStructureAs(['[',']',1]);