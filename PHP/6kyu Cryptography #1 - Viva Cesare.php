<?php
//https://www.codewars.com/kata/576fac714bc84c312c0000b7/train/php
//ok !!!


function CaesarCryptoEncode($text, $shift) {
  $shift%=52;
  $abc=array_merge(range('a','z'),range('A','Z'));
  $out=preg_replace_callback('/[a-z]/i', fn($c)=>$abc[(array_search($c[0],$abc)+52+$shift)%52], $text);
  return trim($out);
}

echo CaesarCryptoEncode("Hello world!", 127); //'eBIIL TLOIA!'