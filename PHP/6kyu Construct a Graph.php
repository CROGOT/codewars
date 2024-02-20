<?php

//https://www.codewars.com/kata/630649f46a30e8004b01b3a3/train/php
//ок
function constructGraph(array $points): array {
  if(!count($points)) return [['+']];

  $xMin=$xMax=$yMin=$yMax=0;  //инициализируеи размеры поля по умолчанию

  foreach($points as ['x'=>$x, 'y'=>$y]){ //узнаем максимальные размеры поля
    $xMin=min($x,$xMin); $yMin=min($y,$yMin);
    $xMax=max($x,$xMax); $yMax=max($y,$yMax);
  }

  $polex=array_fill_keys(range($xMin,$xMax),' ');
  $polex[0]='|';  //создаем горизонтальный массив и задаем вертикальную линию по нолю
  
  $pole=array_fill_keys(range($yMin,$yMax), $polex); //создаем горизонтальную линию
  for($i=$xMin; $i<=$xMax; $i++) $pole[0][$i]='-'; // у нолевой линии чертим линию
  $pole[0][0]='+'; // нолевая координата присваиваем +
  
  foreach($points as ['x'=>$x, 'y'=>$y]) $pole[$y][$x]='*'; //расставляем точки
  
  $pole=array_reverse([...array_map(fn($v)=>[...$v], $pole)]); //сбрасываем индексы массивов и перевовачиваем по горизонтали

  return $pole;
}

function show($test){
  $test=join("\n",array_map(fn($v)=>join('',$v), $test));
  print_r($test);
}



constructGraph([["x" => 1, "y" => 1], ["x" => 3, "y" => 2]]);

/*

 $this->assertSame([
        ['|', ' ', ' ', '*'],
        ['|', '*', ' ', ' '],
        ['+', '-', '-', '-']
      ], constructGraph([["x" => 1, "y" => 1], ["x" => 3, "y" => 2]]));
      
      $this->assertSame([
        ['*', ' ', ' ', '|'],
        [' ', ' ', '*', '|'],
        ['-', '-', '-', '+']
      ], constructGraph([["x" => -1, "y" => 1], ["x" => -3, "y" => 2]]));
      
      $this->assertSame([
        ['|', ' ', '*'],
        ['|', ' ', ' '],
        ['|', '*', ' '],
        ['+', '-', '-']
      ], constructGraph([["x" => 1, "y" => 1], ["x" => 2, "y" => 3]]));
      
      $this->assertSame([
        ['-', '-', '+'],
        [' ', '*', '|'],
        [' ', ' ', '|'],
        ['*', ' ', '|']
      ], constructGraph([["x" => -1, "y" => -1], ["x" => -2, "y" => -3]]));
      
      $this->assertSame([['+']], constructGraph([]));
      $this->assertSame([['*']], constructGraph([["x" => 0, "y" => 0]]));




*/