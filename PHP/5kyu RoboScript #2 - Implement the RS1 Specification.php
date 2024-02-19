<?php
//https://www.codewars.com/kata/5870fa11aa0428da750000da/train/php
//ok

function execute(string $code): string {
  //echo json_encode($code),"\n";
  $v=[[1,0],[0,-1],[-1,0],[0,1]];
  $out=[['*']];
  $x=$y=$vector=0;
  $xMin=$yMin=$xMax=$yMax=0;
  preg_match_all('/\w\d*/',$code, $r);
  //echo json_encode($r[0]),"\n";
  foreach($r[0] as $s)
    switch ($s[0]) {
      case 'R':
        $step=substr($s,1)==''?1:+substr($s,1);
        $vector=($vector+$step)%4;
        break;
      case 'L':
        $vector+=substr($s,1)==''?-1:-substr($s,1);
        while($vector<0) $vector+=4;
        break;
      default:
        $step=substr($s,1)==''?1:+substr($s,1);
        for($i=0; $i<$step; $i++){
          $x+=$v[$vector][0];
          $y+=$v[$vector][1];
          $out[$y][$x]='*';
         // echo "x=",$x," y=",$y," ",$vector,"\n";
        }
        $xMin=min($xMin,$x);
        $yMin=min($yMin,$y);
        $xMax=max($xMax,$x);
        $yMax=max($yMax,$y);
        //print($step.' ');
        break;
    }
  //print_r($out);
  for($i=$xMin; $i<=$xMax; $i++)
    for($j=$yMin; $j<=$yMax; $j++)
      if(!array_key_exists($i, $out[$j])) $out[$j][$i]=' ';
  ksort($out);   
  foreach($out as &$v) ksort($v);
  $out=array_map(fn($v)=>join($v), $out);
  $out=join("\r\n",array_reverse($out));
 // echo json_encode($out),"\n";
  return $out;
}

//echo execute("FLF5RF3RF3RF7");
// echo execute("F3L2F6R2F3LF3R2F8");
echo execute("L63L88RFRLF74LFFLL27L8RFFL42R49RL44R44L12LL53R83F52R77L82R81R23F13FRRFLL60FR59L5LLL5RRF93FLRRL3LF59L29L4L53R49L82R87RR25R7F17FF34L77R27FRFFF64RRLRL83R14F46FF18R29R58F7F52FRR31LFRRLFLRLFR39R85");


/*
    $this->assertSame("*", execute(""));
    $this->assertSame("******", execute("FFFFF"));
    $this->assertSame("******\r\n*    *\r\n*    *\r\n*    *\r\n*    *\r\n******", execute("FFFFFLFFFFFLFFFFFLFFFFFL"));
    $this->assertSame("    ****\r\n    *  *\r\n    *  *\r\n********\r\n    *   \r\n    *   ", execute("LFFFFFRFFFRFFFRFFFFFFF"));
    $this->assertSame("    ****\r\n    *  *\r\n    *  *\r\n********\r\n    *   \r\n    *   ", execute("LF5RF3RF3RF7"));

*/