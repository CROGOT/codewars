//https://www.codewars.com/kata/5886e082a836a691340000c3/train/javascript
// таймаут

//https://dzen.ru/a/XL_gTVaa9gCzO1Yv
//https://ru.stackoverflow.com/questions/796551/c-%D0%92%D1%85%D0%BE%D0%B4%D0%B8%D1%82-%D0%BB%D0%B8-%D1%82%D0%BE%D1%87%D0%BA%D0%B0-%D0%B2-%D0%BF%D1%80%D1%8F%D0%BC%D0%BE%D1%83%D0%B3%D0%BE%D0%BB%D1%8C%D0%BD%D0%B8%D0%BA

// function rectangleRotation(a, b) {
//   let out=0;
//   const set45=(x,y)=>[Math.sqrt(2)/2*(x-y), Math.sqrt(2)/2*(x+y)]
//   const sign=(x,y,x1,y1,x2,y2)=>(x2-x1)*(y-y1)-(y2-y1)*(x-x1);
  
//   let [x1,y1]=set45(-a/2, b/2);
//   let [x2,y2]=set45(-a/2, -b/2);
//   let [x3,y3]=set45(a/2, -b/2);
//   let [x4,y4]=set45(a/2, b/2);

//   for(let x=Math.ceil(Math.min(x1,x2,x3,x4)); x<Math.max(x1,x2,x3,x4); x++)
//     for(let y=Math.ceil(Math.min(y1,y2,y3,y4)); y<Math.max(y1,y2,y3,y4); y++){
//       let p1 = sign(x, y, x1, y1, x2, y2),
//           p2 = sign(x, y, x2, y2, x3, y3),
//           p3 = sign(x, y, x3, y3, x4, y4),
//           p4 = sign(x, y, x4, y4, x1, y1);

//       if ((p1<0 && p2<0 && p3<0 && p4<0) || (p1>0 && p2>0 && p3>0 && p4>0)) out++;
//     }

//   return out;
// }

function rectangleRotation(a, b) {
  return Math.min(a,b)>2?(a-1)*(b-1)+(a-2)*(b-2):(a-1)*(b-1);
}

console.log(rectangleRotation(16,20));

/*
Test.assertEquals( rectangleRotation(6,4),23)
Test.assertEquals( rectangleRotation(30,2),65)
Test.assertEquals( rectangleRotation(8,6),49)
Test.assertEquals( rectangleRotation(16,20),333)
*/