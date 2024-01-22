//https://www.codewars.com/kata/55983863da40caa2c900004e/train/javascript
//ok


function nextBigger(number){
  
  let array=number.toString().split('').map(v=>+v); // переводим число в массив цифр

  function nextDigit(di,k,r, fl=false){ // di-сверяемая цифра k-набираемое число по цифрам, r-остаашийся массив цифр, fl-превышение цифры
    if(di>array.length || !r.length) return k; // превысили длину возвращаем полученное число
    for (let i=0; i<r.length; i++){
      if(array[di]<=r[i] || fl){ // если цифра подходит, запускам итерацию на следующую цифру
        if(array[di]<r[i]) fl=true; // устанавливаем флаг, что последующие цифры могут быть меньше
        let k1=[...r]; // копируем массив
        k1.splice(i,1); //удаляем из него очередную цифру
        let out=nextDigit(di+1,k*10+r[i],k1,fl); // запускаем рекурсию на проверку следующей цифры
        if(out>number) return out; // если получаенное число удовлетворяет выходим из рекурсии
      }
    }
    return false; // иначе нет решения
  }
  
  return nextDigit(0,0,[...array].sort((a,b)=>a-b))||-1; //сортируем цифры, чтобы получить минимальное число из большого
}

//console.log(nextBigger(317152190045)); //317152190054
// console.log(nextBigger(1234567890)); //1234567908
//console.log(nextBigger(1234)); //
console.log(nextBigger(7991)); //9179


/*
Test.assertEquals(nextBigger(12),21)
Test.assertEquals(nextBigger(513),531)
Test.assertEquals(nextBigger(2017),2071)
Test.assertEquals(nextBigger(414),441)
Test.assertEquals(nextBigger(144),414)

*/