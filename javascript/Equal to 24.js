//https://www.codewars.com/kata/574be65a974b95eaf40008da/train/javascript
const hash={};

const formula =[
  (a,b,c,d,zn,z1,z2,z3)=>`${a}${zn[z1]}${b}${zn[z2]}${c}${zn[z3]}${d}`,     //abcd
  (a,b,c,d,zn,z1,z2,z3)=>`${a}${zn[z1]}(${b}${zn[z2]}${c})${zn[z3]}${d}`,   //a(bc)d
  (a,b,c,d,zn,z1,z2,z3)=>`(${a}${zn[z1]}${b})${zn[z2]}${c}${zn[z3]}${d}`,   //(ab)cd
  (a,b,c,d,zn,z1,z2,z3)=>`(${a}${zn[z1]}${b}${zn[z2]}${c})${zn[z3]}${d}`,   //(abc)d
  (a,b,c,d,zn,z1,z2,z3)=>`${a}${zn[z1]}${b}${zn[z2]}(${c}${zn[z3]}${d})`,   //ab(cd)
  (a,b,c,d,zn,z1,z2,z3)=>`(${a}${zn[z1]}${b})${zn[z2]}(${c}${zn[z3]}${d})`, //(ab)(cd)
  (a,b,c,d,zn,z1,z2,z3)=>`${a}${zn[z1]}(${b}${zn[z2]}${c}${zn[z3]}${d})`    //a(bcd)
  ];

function equalTo24(a1,b1,c1,d1){
  
  
  
    let abcd = [a1,b1,c1,d1];
    abcd.sort((a, b) => a - b);
    let index = abcd.toString();
    if (hash[index]) return hash[index];
    let results = [];

      function permute(arr, memo){
        var cur;
        var memo = memo || [];

        for (var i = 0; i < arr.length; i++) {
          cur = arr.splice(i, 1);
          if (arr.length === 0) {
            results.push(memo.concat(cur).toString());
          }
          permute(arr.slice(), memo.concat(cur));
          arr.splice(i, 0, cur[0]);
        }
        return results;
      }

      abcd = Array.from(new Set(permute(abcd))).map(r=>r.split(','));



      let zn=['+','-','*','/'];
      for(let i=0; i<7; i++){
        for(let k=0; k<abcd.length; k++){
          //let [a,b,c,d]=abcd[k];
          for(let z1=0; z1<4; z1++)
            for(let z2=0; z2<4; z2++)
              for(let z3=0; z3<4; z3++){
                // console.log(eq[i],'=',eval(eq[i]));
                let f=formula[i](...abcd[k],zn,z1,z2,z3); 
                if (eval(f)===24){
                  hash[index]=f;
                  return f;
                }
              }
        }
      }
      hash[index]="It's not possible!";
      return "It's not possible!"
  
}


var time = performance.now();

for (let i=0; i<10; i++)
//console.log(equalTo24(1,2,3,4));
equalTo24(~~(Math.random(1)*100)+1,~~(Math.random(1)*100)+1,~~(Math.random(1)*100)+1,~~(Math.random(1)*100)+1);
//console.log(hash);
time = performance.now() - time;

console.log('Время выполнения = ', (time/1000).toFixed(2));