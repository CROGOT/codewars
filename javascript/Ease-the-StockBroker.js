//https://www.codewars.com/kata/54de3257f565801d96001200/train/javascript

function balanceStatements(list){
  if (list.length===0) return 'Buy: 0 Sell: 0';
  let BS={'B':0, 'S':0, err:[]};
  list.split(', ').forEach(s=>{
    let r=s.split(' ');
    if (String(parseInt(r[1])) === r[1] && r[2].search(/\./)!==-1 && r[3]){
      BS[r[3]]+=r[1]*r[2];
    } else BS.err.push(s+' ;');
  });
  let out = `Buy: ${Math.round(BS.B)} Sell: ${Math.round(BS.S)}`;
  if (BS.err.length>0) out+=`; Badly formed ${BS.err.length}: ${BS.err.join('')}`;
  return out;
}

/*
function balanceStatements(list){
  var bought = 0, sold = 0, bad = [];
  list = list.trim();
  list = list !== '' ? list.split(',') : [];
  for (var i in list) {
    if (!/^\s*[^\s]+ \d+ \d*\.\d+ (B|S)\s*$/.test(list[i])) 
      bad.push(list[i].trim());
    else { 
      var order = list[i].trim().split(' ');
      if (order[3] === 'B') bought += order[1]*order[2];
      if (order[3] === 'S') sold += order[1]*order[2];
    }
  }
  return 'Buy: ' + Math.round(bought) +
         ' Sell: ' + Math.round(sold) +
         (bad.length === 0 ? '' :
         '; Badly formed ' + bad.length + ': ' + bad.join(' ;') + ' ;');
}
*/


console.log(balanceStatements("GOOG 90 160.45 B, JPMC 67 12.8 S, MYSPACE 24.0 210 B, CITI 50 450 B, CSCO 100 55.5 S"));
//"Buy: 14440 Sell: 6408; Badly formed 2: MYSPACE 24.0 210 B ;CITI 50 450 B ;"