//https://www.codewars.com/kata/64b771989416793927fbd2bf/train/javascript
// timeout!!!!!

// function closedBrackets(s) {
//   //   console.log(s)
//     function test(i=0, k=0){
//       if (k<0 || k>s.length-i) return false;
//       if (i>=s.length) return k==0;
//       while (i<s.length){
//         if (s[i]=='(' && ++k>s.length-i) return false;
//         if (s[i]==')' && --k<0) return false;
//         if (s[i]=='J') return (test(i+1,k) || test(i+1,k+1) || (k>=0 && test(i+1,k-1)));
//         i++;
//       }
//       return k==0;
//     }
//     return test();
//   }

function closedBrackets(s) {
  let j = 0, k=0, ot=0, otj=0;
  //   console.log(s)
    for (let i=0; i<s.length; i++){
      if (s[i]=='('){
        if (++k>s.length-i+j) return false;
        ot++;
        otj=0; 
      }
      if (s[i]==')') {
        if (--k==-1 && k+j>=0) {
          k++; j--; ot=0;
        } 
        if (k<0) return false;
      }
      if (s[i]=='J') {
        j++; otj++;
      }
    }
    return k-j<=0 && otj>=ot;
  }





console.log(closedBrackets("()(JJ(((JJ"));
console.log(closedBrackets(")JJJ)(J))(J))(((J))JJJ)())(JJ))J(J())(J"));
console.log(closedBrackets("J)(J"));
// console.time('=>');
// console.log(closedBrackets(")J)(J(J(JJ())(()(((())J()JJ()J)))J)(()))((((J(((J()J)J(JJ(J)JJ((())))J()J(())))J)()J))(JJJ(()J(J)((J(())J)(J(J())((()(()\
// (J((J)J()))(((J)()()()((JJ)J)J)()()((J)JJJ)()(J)J)((J))(J)(J())J((J)JJ((J(JJJ(())JJ))J(JJ(J)J(JJ)((J()))J(J)())J)J)))J(J(((((J()J)))(J(JJ)()((J(())\
// JJ(J))JJJ)())((JJ)(J()((()J(JJJJ))))(()JJ)J)(J(()())JJ)J((()J)J)())))JJ))J)J((JJJ)J()((((JJ)JJJJ((J))(J))J))(JJJ(JJ)()(()()J)((()JJ(J()J))J\
// ))())J))))JJJJJJ)((J(JJJ)J)J))J()J())))J)J((())(JJ((JJ)()J))(JJ)J(()))J)J(J)J(J()J)J((J)J())JJ())(()JJ(J)((((J(JJ))J())JJ(J(())(J)(((JJ(J))JJ("));
// console.timeEnd('=>');