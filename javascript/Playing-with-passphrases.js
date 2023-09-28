function playPass(s, n) {
  s=s.replace(/\w/g, (c,i)=>{
    if(parseInt(c)>=0) return 9-c;
    let d = c.charCodeAt(0)+n;
    d = d>90?d-26:d;
    c = String.fromCharCode(d);
    c = i%2? c.toLowerCase(): c;
    return c;
  });
  return s.split('').reverse().join('');
}


console.log(playPass('ABC123XYZ',1));
console.log(playPass("I LOVE YOU!!!", 1)) // "!!!vPz fWpM J"
console.log(playPass("MY GRANMA CAME FROM NY ON THE 23RD OF APRIL 2015", 2)) // "4897 NkTrC Hq fT67 GjV Pq aP OqTh gOcE CoPcTi aO"