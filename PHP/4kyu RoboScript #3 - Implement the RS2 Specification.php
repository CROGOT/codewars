<?php
//https://www.codewars.com/kata/58738d518ec3b4bf95000192/train/php
//ок

function execute(string $code): string {
  //echo json_encode($code),"\n";
  $v=[[1,0],[0,-1],[-1,0],[0,1]]; // циклический массив поворотов
  $out=[['*']]; //инициируем поле
  $x=$y=$vector=0; //начальные координаты и направление
  $xMin=$yMin=$xMax=$yMax=0;//начальные размеры будущего поля после окончания передвижения
  preg_match_all('/[\(\)FRL]\d*/',$code, $r);//разбиваем строку на массив символ_число
  //echo json_encode($r[0]),"\n";
  $stek=[];
  foreach($r[0] as $s){ //создаем коммандный стек, разворачивая скобки и повторяя (ААА)*N (польская запись)
    $step=substr($s,1)==''?1:+substr($s,1);
    switch ($s[0]) {
      case 'R':
      case 'F':
      case 'L':
        $stek[]=[$s[0],$step];
        break;
      case '(':
        $stek[]=[$s[0],0];
        break;
      case ')': //если ) - то достем все из стека во временный массив
        $temp=[];
        do{
          $el=array_pop($stek);
          if($el[0]!='(') array_unshift($temp, $el);
        }while($el[0]!='('); //пока не встретим ( 
        while($step>0){
          array_push($stek, ...$temp); // и содержимое временного массива потояем нужное кол-во раз помещяем обратно в стек
          $step--;
        }
        break;
    }
  }
  //echo json_encode($r[0]),"\n";
  // echo json_encode($stek),"\n";
  foreach($stek as $s)//пробегаемся по стеку комманд и выполняем их
    switch ($s[0]) {
      case 'R':
        $vector=($vector+$s[1])%4;
        break;
      case 'L':
        $vector-=$s[1];
        while($vector<0) $vector+=4;
        break;
      default:
        for($i=0; $i<$s[1]; $i++){
          $x+=$v[$vector][0];
          $y+=$v[$vector][1];
          $out[$y][$x]='*';
        }
        $xMin=min($xMin,$x);//расширяем границы поля 
        $yMin=min($yMin,$y);
        $xMax=max($xMax,$x);
        $yMax=max($yMax,$y);
        break;
    }
  //print_r($out);
  for($i=$xMin; $i<=$xMax; $i++)
    for($j=$yMin; $j<=$yMax; $j++)
      if(!array_key_exists($i, $out[$j])) $out[$j][$i]=' '; // заполняем остальные ячейки пробелами
  ksort($out);//сортируем по ключу, чтобы ячейки встали в правильнои порядке по возврастанию
  foreach($out as &$v) ksort($v);//сортируем строки
  $out=array_map(fn($v)=>join($v), $out); //переводим строки в строки
  $out=join("\r\n",array_reverse($out)); // переводим перевернутый(т.к. плюс идет вниз) массив в строку разделенный \r\n
 // echo json_encode($out),"\n";
  return $out;
}

//echo execute("FLF5RF3RF3RF7");
echo execute("LF5(RF3)(RF3R)F7");


/*
    $this->assertSame("    ****\r\n    *  *\r\n    *  *\r\n********\r\n    *   \r\n    *   ", execute("LF5(RF3)(RF3R)F7"));
    $this->assertSame("    ****\r\n    *  *\r\n    *  *\r\n********\r\n    *   \r\n    *   ", execute("(L(F5(RF3))(((R(F3R)F7))))"));

*/