<?php
//https://www.codewars.com/kata/63c05c1aeffe877458a15994/train/php
//ok

function polynomial_product($polynomial1, $polynomial2){

  decode_polynomial($polynomial1);
  decode_polynomial($polynomial2);
  
  $out=[];
  foreach($polynomial1 as $a)
    foreach($polynomial2 as $b){
      $v=$a;
      $v['n']*=$b['n'];
      $v['v']=$v['v']?$v['v']:$b['v'];
      $v['p']+=$b['p'];
      if(key_exists($v['p'], $out)) $out[$v['p']]['n']+=$v['n'];
      else $out[$v['p']]=$v;
    }
  unset($polynomial1); unset($polynomial2);
  krsort($out);
  $out=array_values($out);

  return polynomial_to_string($out);
}

function decode_polynomial(&$polynomial){ // декодируем в массив чисел, переменной и степени
  $polynomial=str_replace(' ','', $polynomial);
  preg_match_all("/([+-]?[^+-]+)/", $polynomial, $arr);
  foreach($arr[0] as &$v){
    preg_match_all('/([+-]?)(\d*)(\w?)\^?(\d*)/', $v, $a);
    $v=['n'=>$a[2][0], 'v'=>$a[3][0], 'p'=>$a[4][0]];
    if($v['n']=='') $v['n']=1;
    $v['n']=$a[1][0]=='-'?-$v['n']:+$v['n'];
    $v['v']=$v['v']==''?null:$v['v'];
    $v['p']=$v['p']==''?0:+$v['p'];
    $v['p']=$v['v'] && $v['p']==0?1:$v['p'];
  }
  $polynomial=$arr[0];
}

function polynomial_to_string(&$polynomial){ // из массмва в строку
  $out=''; 
  foreach($polynomial as $i=>$v){
    $out.=$v['n']>0 && $i>0?'+':'';
    $out.=$v['n']<0?'-':'';
    if($v['n']!=0){
      $out.=abs($v['n'])==1 && $v['v']?'':abs($v['n']);
      $out.=$v['v'] && $v['n']=1?'':$v['n'];
      $out.=$v['v']?$v['v']:'';
      $out.=$v['p']>1?'^'.$v['p']:'';
    } else if($i==count($polynomial)-1) $out.='0';
  }
  return $out;
}

// ****** END

echo polynomial_product("u^2 + 2u+1", "u + 1"); //"u^3+3u^2+3u+1"
// echo polynomial_product("v^2 - 1+3v^3", "1+v^2"); //"3v^5+v^4+3v^3-1"
//echo polynomial_product("x^2", "3x - 1"); //"3x^3-x^2"
//echo polynomial_product("2M", "M-7M^3+4M^2"); //"0"
/*
    $this->assertSame(polynomial_product("u^2 + 2u+1", "u + 1"), "u^3+3u^2+3u+1", "Testing: u^2 + 2u+1 and u + 1");
    $this->assertSame(polynomial_product("x^2", "3x - 1"), "3x^3-x^2", "Testing: x^2 and 3x - 1");
    $this->assertSame(polynomial_product("2", "4y - 4"), "8y-8", "Testing: 2 and 4y - 4");
    $this->assertSame(polynomial_product("-4r^2 + 1", "-1"), "4r^2-1", "Testing: -4r^2 + 1 and -1");
    $this->assertSame(polynomial_product("1", "p^3"), "p^3", "Testing: 1 and p^3");
    $this->assertSame(polynomial_product("1", "-1"), "-1", "Testing: 1 and -1");
    $this->assertSame(polynomial_product("0", "2 - x"), "0", "Testing: 0 and 2 - x");
    $this->assertSame(polynomial_product("-1", "0"), "0", "Testing: -1 and 0");
 */