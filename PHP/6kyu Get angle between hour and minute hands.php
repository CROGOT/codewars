<?php
//https://www.codewars.com/kata/582f70bcfd25e93719000371/train/php
//ok

function get_angle($t) {
  if(!preg_match('/^([2][0-3]|[0-1]\d|\d):([0-5]\d|\d)$/',$t,$r)) return 'Invalid input';
  $h=360/12*(intval($r[1])%12)+360/12/60*intval($r[2]);
  $m=360/60*intval($r[2]);
  echo $h,' ', $m, "\n";
  var_dump($r);
  return abs($h-$m);
}

echo get_angle('15:15');