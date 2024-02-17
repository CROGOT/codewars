<?php
//https://www.codewars.com/kata/58e24788e24ddee28e000053/train/php
//ok

function simple_assembler($program){
  $out=[];
	$program=array_map(function($v){return explode(' ',$v);},$program);
  // echo json_encode($program),"\n";
  $i=0;
  while($i<count($program)){
    // echo $i,' ',json_encode($program[$i])," ";
    switch ($program[$i][0]) {
      case 'mov':
        if(!array_key_exists($program[$i][0],$out)) $out[$program[$i][1]]=0;
        $a=&$out[$program[$i][1]];
        if(!is_numeric($program[$i][2])) $b=$out[$program[$i][2]];
        else $b=+$program[$i][2];
        $a+=$b;
        unset($a);
        $i++;
        break;
      case 'inc':
        $out[$program[$i][1]]++;
        $i++;
        break;
      case 'dec':
        $out[$program[$i][1]]--;
        $i++;
        break;
      case 'jnz':
        if(!is_numeric($program[$i][1])) $a=$out[$program[$i][1]];
        else $a=+$program[$i][1];
        // echo $a,' ', $program[$i][2], " ";
        if ($a==0) $i++;
        else $i+=$program[$i][2];
        break;
      default:
        $i=count($program)+1;
        break;
    }
    //echo json_encode($out),"\n";
  }
	return $out;
}

// echo json_encode(simple_assembler(['mov a -10','mov b a','inc a','dec b','jnz a -2']));// ( 'a' => 0, 'b' => -20 )
echo json_encode(simple_assembler(["mov a 1","mov b 1","mov c 0","mov d 26","jnz c 2","jnz 1 5","mov c 7","inc d","dec c","jnz c -2","mov c a","inc a","dec b","jnz b -2","mov b c","dec d","jnz d -6","mov c 18","mov d 11","inc a","dec d","jnz d -2","dec c","jnz c -5"]));// 
/*

mov x y- копирует y(либо постоянное значение, либо содержимое регистра) в регистрx
inc x- увеличивает содержимое реестра xна единицу
dec x- уменьшает содержимое регистра xна единицу
jnz x y- переходит к инструкции yна шаг вперед 
(положительное значение означает вперед, отрицательное означает назад, 
y может быть регистром или константой), 
но только если x(константа или регистр) не равна нулю
*/