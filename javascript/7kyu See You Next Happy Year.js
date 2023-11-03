// https://www.codewars.com/kata/5ae7e3f068e6445bc8000046/train/javascript
// ok

function nextHappyYear(year){
  for (let i=year+1; i<9999; i++)
    if(new Set([...String(i)]).size===4) return i
}
console.log(nextHappyYear(1000));