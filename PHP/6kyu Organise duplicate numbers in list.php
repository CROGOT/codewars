<?php

//https://www.codewars.com/kata/5884b6550785f7c58f000047/train/php
//ok

function group(array $arr) {
  $out=[];
  while(count($arr)>0){
    $n=current($arr);
    $r=[];
    while (($i=array_search($n, $arr))!==false){
      $r[]=$n;
      unset($arr[$i]);
    }
    $out[]=$r;
  }
  return $out;
}

print_r(group([3, 2, 6, 2, 1, 3]));
//group([3, 2, 6, 2, 1, 3])
// [[3, 3], [2, 2], [6], [1]]