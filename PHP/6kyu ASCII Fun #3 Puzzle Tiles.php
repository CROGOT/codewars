<?php
//https://www.codewars.com/kata/5947d86e07693bcf000000c4/train/php
//ok


function puzzleTiles(int $n, int $m): string {
  $st=fn($a,$b,$c) => $a.str_repeat($b,$n).$c;
  $out='';
  for($y=0; $y<$m; $y++){
    if($y==0) $out.=$st("  "," _( )__","\n");
    else $out.=$st(" ", "|__( )_", "|\n");
    if($y%2==0) {
      $out.=$st(" ", "_|     ", "_|\n");
      $out.=$st("", "(_   _ ", "(_\n");
    } else {
      $out.=$st(" ", "|_     ", "|_\n");
      $out.=$st(" ", " _) _  ", " _)\n");
    }
  }
  return $out.$st(" ", "|__( )_", "|");
}

echo puzzleTiles(4,3);
//2754

/*

   _( )__ _( )__ _( )__ _( )__
 _|     _|     _|     _|     _|
(_   _ (_   _ (_   _ (_   _ (_
 |__( )_|__( )_|__( )_|__( )_|
 |_     |_     |_     |_     |_
  _) _   _) _   _) _   _) _   _)
 |__( )_|__( )_|__( )_|__( )_|
 _|     _|     _|     _|     _|
(_   _ (_   _ (_   _ (_   _ (_
 |__( )_|__( )_|__( )_|__( )_|


*/