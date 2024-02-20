<?php
//https://www.codewars.com/kata/594b898169c1d644f900002e/train/php
//ok

global $out, $stek, $branch_stek, $v, $vector, $x, $y, $xMin, $yMin, $xMax, $yMax;
function execute(string $code): string {
  global $out, $stek, $branch_stek, $v, $vector, $x, $y, $xMin, $yMin, $xMax, $yMax;

  $v=[[1,0],[0,-1],[-1,0],[0,1]]; // циклический массив поворотов
  $out=[['*']]; //инициируем поле
  $x=$y=$vector=0; //начальные координаты и направление
  $xMin=$yMin=$xMax=$yMax=0;//начальные размеры будущего поля после окончания передвижения
  $stek=['main'=>[]];
  $branch_stek=['main'];
  echo json_encode($code),"\n";
  preg_match_all('/[\(\)FRLpqP]\d*/',$code, $arr);//разбиваем строку на массив символ_число
  echo json_encode($arr[0]),"\n";

  foreach($arr[0] as $s){ //создаем коммандный стек, разворачивая скобки и повторяя (ААА)*N (польская запись)
    $number=substr($s,1)==''?1:+substr($s,1);
    $branch=end($branch_stek);
    switch ($s[0]) {
      case 'R':
      case 'F':
      case 'L': $stek[$branch][]=[$s[0],$number]; break;
      case '(': $stek[$branch][]=[$s[0],0];       break;
      case 'p':
        if(array_key_exists('P'.$number, $stek)) throw new ParseError('InvalidDefinitionOverwrite');
        $branch_stek[]='P'.$number;
        $stek['P'.$number]=[]; // созаем подмассив под новую функцию
       // var_dump($branch_stek);
        break;  
      case 'q': array_pop($branch_stek); break;   
      case 'P':
        if(in_array($s, $branch_stek)) throw new ParseError('InfiniteRecursion');
        $stek[$branch][]=[$s,$number];
        break;   
      case ')': //если ) - то достем все из стека во временный массив
        $temp=[];
        do{
          $el=array_pop($stek[$branch]);
          if($el[0]!='(') array_unshift($temp, $el);
        }while($el[0]!='('); //пока не встретим ( 
        while($number>0){
          array_push($stek[$branch], ...$temp); // и содержимое временного массива потояем нужное кол-во раз помещяем обратно в стек
          $number--;
        }
        break;
    }
  }
  //  echo json_encode($stek),"\n";

  $branch_stek=[];// обнуляем стек
  do_commands('main');//заполняем поле

  for($i=$xMin; $i<=$xMax; $i++)
    for($j=$yMin; $j<=$yMax; $j++)
      if(!array_key_exists($i, $out[$j])) $out[$j][$i]=' '; // заполняем остальные ячейки пробелами
  ksort($out);//сортируем по ключу, чтобы ячейки встали в правильнои порядке по возврастанию
  foreach($out as &$v) ksort($v);//сортируем строки
  $out=array_map(function($v){return join($v);}, $out); //переводим строки в строки
  $out=join("\r\n",array_reverse($out)); // переводим перевернутый(т.к. плюс идет вниз) массив в строку разделенный \r\n
  // echo json_encode($out),"\n";
  return $out;
}
function do_commands($branch){
  global $out, $stek, $branch_stek, $v, $vector, $x, $y, $xMin, $yMin, $xMax, $yMax;
  $branch_stek[]=$branch;//добавляем выполнение ветки (функции)  в стек выполнения (для проверок на рекурсию)
  if(!array_key_exists($branch, $stek)) throw new ParseError('InvalidInvocation1');
  foreach($stek[$branch] as $s)//пробегаемся по стеку комманд и выполняем их
    switch ($s[0]) {
      case 'R': $vector=($vector+$s[1])%4; break;
      case 'L':
        $vector-=$s[1];
        while($vector<0) $vector+=4;
        break;
      case 'F':
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
      //case 'P':
      default:
        if(in_array($s[0],$branch_stek)) throw new ParseError('InfiniteMutualRecursion');//если в стеке уже есть она же, то ошибка
        do_commands($s[0]);//если функция запускаем
        break; 
    }
  array_pop($branch_stek);
}

//echo execute("FLF5RF3RF3RF7");
echo execute("p312(F2LF2R)2q");


/*
    $this->assertSame("    *\r\n    *\r\n  ***\r\n  *  \r\n***  ", execute('p0(F2LF2R)2qP0'));
    $this->assertSame("    *\r\n    *\r\n  ***\r\n  *  \r\n***  ", execute('p312(F2LF2R)2qP312'));


    $this->assertSame("    ****\r\n    *  *\r\n    *  *\r\n********\r\n    *   \r\n    *   ", execute("LF5(RF3)(RF3R)F7"));
    $this->assertSame("    ****\r\n    *  *\r\n    *  *\r\n********\r\n    *   \r\n    *   ", execute("(L(F5(RF3))(((R(F3R)F7))))"));

*/