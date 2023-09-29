//codewars.com/kata/5902bc7aba39542b4a00003d/train/javascript

var whoEatsWho = function (zoo) {
  let out = [zoo];
  let arr = zoo.split(",");
  const eats = [
    "antelope eats grass",
    "big-fish eats little-fish",
    "bug eats leaves",
    "bear eats big-fish",
    "bear eats bug",
    "bear eats chicken",
    "bear eats cow",
    "bear eats leaves",
    "bear eats sheep",
    "chicken eats bug",
    "cow eats grass",
    "fox eats chicken",
    "fox eats sheep",
    "giraffe eats leaves",
    "lion eats antelope",
    "lion eats cow",
    "panda eats leaves",
    "sheep eats grass",
  ];

  function eat(m) {
    // console.log(m);
    for (let i = 0; i < m.length; i++)
      if (i > 0 && eats.includes(`${m[i]} eats ${m[i - 1]}`)) {
        out.push(`${m[i]} eats ${m[i - 1]}`);
        m.splice(i - 1, 1);
        return eat(m);
      } else if (
        i < m.length - 1 &&
        eats.includes(`${m[i]} eats ${m[i + 1]}`)
      ) {
        out.push(`${m[i]} eats ${m[i + 1]}`);
        m.splice(i + 1, 1);
        return eat(m);
      }

    out.push(m.join(","));
    return;
  }
  eat(arr);
  return out;
};

console.log(whoEatsWho("fox,bug,chicken,grass,sheep"));
