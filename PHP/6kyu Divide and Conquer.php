<?php
//https://www.codewars.com/kata/64d482b76fad180017ecef0a/train/php
// ок
function consecutiveNums(array $arr, int $groupLen): bool {
  sort($arr); //сортиурум массив, т.к. нужны числа по порядку
  $count_numbers=array_count_values($arr); //считаем количество каждого числа
  $numbers=array_keys($count_numbers);  //отдельно получаем числа без повторений
  for($i=0, $len=count($numbers); $i<$len; $i++)
    while($count_numbers[$numbers[$i]]>0){  //пока количество больше ноля заносим числа во временный массив
      $r=[];
      for($j=$i; $j<$i+$groupLen; $j++)
        if(array_key_exists($j, $numbers)){ // проверяем, чтобы не уйти за край массива
          if($count_numbers[$numbers[$j]]==0) return false; // если следующие числа кончились, то не получилось
          $r[]=$numbers[$j];
          $count_numbers[$numbers[$j]]--; // число занесли в массив, уменьшаем количество оставшегося числа
        }
      if(count($r)!=$groupLen || $groupLen!=(end($r)-$r[0]+1)) return false;
    } //если массив получился меньше или разнца между первым и последним числом получилась не та, то ошибка
  return true;
}

print( consecutiveNums([1, 2, 3, 4, 5], 4)   );

/*

consecutiveNums([5, 6, 3, 4], 2) ➞ true
// Two groups of length 2: [3, 4], [5, 6]

    $this->assertTrue(consecutiveNums([1, 3, 5], 1));
    $this->assertTrue(consecutiveNums([5, 6, 3, 4], 2));
    $this->assertFalse(consecutiveNums([1, 3, 4, 5], 2));
    $this->assertTrue(consecutiveNums([1, 2, 3, 6, 2, 3, 4, 7, 8], 3));
    $this->assertFalse(consecutiveNums([1, 2, 3, 4, 5], 4));
*/