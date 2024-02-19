<?php
//https://www.codewars.com/kata/55c6126177c9441a570000cc/train/php
//ok

function orderWeight($str) {
  $nums = explode(" ", $str);
  usort($nums, function($a,$b){
    $a1=array_sum(str_split($a));
    $b1=array_sum(str_split($b));
    if($a1!=$b1) return $a1<=>$b1;
    return strcasecmp($a,$b);
  });
  return implode(' ', $nums);
}

echo orderWeight("2000 10003 1234000 44444444 9999 11 11 22 123"); //"11 11 2000 10003 22 123 1234000 44444444 9999"