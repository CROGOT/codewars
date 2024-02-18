<?php
//https://www.codewars.com/kata/5c2d8ff035d2910009761227/train/php
//

function getNetworkAndBroadcast($ipWithCIDR) {
  $ones = arr_to_ip(255,255,255,255);
  preg_match_all('/(\d+)/', $ipWithCIDR, $out);
  $out=$out[0];
  if($out[0]>255 || $out[1]>255 || $out[2]>255 || $out[3]>255 || $out[4]>32) return false;
  $ip=arr_to_ip(...$out);
  $network_mask=$ones<<(32-$out[4]) & $ones;
  $broadcast_mask= $ones>>$out[4];
  echo json_encode($out),"\n";
  echo decbin($ones), "\n", decbin($ip), "\n", decbin($network_mask),"\n" ,decbin($broadcast_mask),"\n";
  echo ip_to_string($ones),"\n",ip_to_string($ip),"\n";

  return [ip_to_string($network_mask & $ip), ip_to_string($broadcast_mask | $ip)];
}
function arr_to_ip(...$ip){
  //print_r($ip);
  return $ip[0]<<24 | $ip[1]<<16 | $ip[2]<<8 | $ip[3];
}
function ip_to_string($ip){
  return ($ip>>24).'.'.($ip>>16&255).'.'.($ip>>8&255).'.'.($ip&255);
}

echo json_encode(getNetworkAndBroadcast("10.10.10.10/10"));
// echo json_encode(getNetworkAndBroadcast("192.168.1.101/24"));


/*
      $this->assertSame(["192.168.1.0", "192.168.1.255"], getNetworkAndBroadcast("192.168.1.101/24"));
      $this->assertSame(["10.0.0.0", "10.255.255.255"], getNetworkAndBroadcast("10.1.32.128/8"));
      $this->assertSame(["172.16.0.0", "172.31.255.255"], getNetworkAndBroadcast("172.20.45.11/12"));
      ) is identical to Array &0 (
    0 => '0.0.0.0'
    1 => '0.63.255.255'

*/