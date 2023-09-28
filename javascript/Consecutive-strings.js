//https://www.codewars.com/kata/56a5d994ac971f1ac500003e/train/javascript
// OK !!!
function longestConsec(s, k) {
  if (s.length === 0 || k > s.length || k <= 0) return '';
  if (s.length===k) s.join('');
  let maxSum=0, step=0;
  for (let i=0; i<k; i++) maxSum+=s[i].length;
  let sum=maxSum;
  for (let i=k; i<s.length; i++) {
    sum = sum + s[i].length - s[i-k].length;
    if (maxSum<sum) {
      step=i-k+1;
      maxSum=sum;
    }
  }
  return s.slice(step,step+k).join('');
}


console.log(longestConsec(["zone", "abigail", "theta", "form", "libe", "zas"], 2)) // "abigailtheta")
//console.log(longestConsec(["it","wkppv","ixoyx", "3452", "zzzzzzzzzzzz"], 3)); // "ixoyx3452zzzzzzzzzzzz")