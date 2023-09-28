//https://www.codewars.com/kata/56dbe7f113c2f63570000b86
function rot(s) {
  return s.split('\n').reverse().map(c=>c.split('').reverse().join('')).join('\n');
}
function selfieAndRot(s) {
  let out = s.split('\n').map(c=>c.padEnd(c.length*2,'.')).join('\n');
  return out+'\n'+rot(out);
}

function oper(fct, s) {
  return fct(s)
}

// console.log(oper(rot, "rkKv\ncofM\nzXkh\nflCB")); // "BClf\nhkXz\nMfoc\nvKkr"
console.log(oper(selfieAndRot, "xZBV\njsbS\nJcpN\nfVnP")); // "xZBV....\njsbS....\nJcpN....\nfVnP....\n....PnVf\n....NpcJ\n....Sbsj\n....VBZx"