<?php
//https://www.codewars.com/kata/5a045fee46d843effa000070/train/php
//ok

function decomp($n) {
  $prime=[2=>0,3=>0,5=>0,7=>0,11=>0,13=>0,17=>0,19=>0,23=>0,29=>0,31=>0,37=>0,41=>0,43=>0,47=>0,53=>0,59=>0,61=>0,67=>0,71=>0,73=>0,79=>0,83=>0,89=>0,97=>0,101=>0,103=>0,107=>0,109=>0,113=>0,127=>0,131=>0,137=>0,139=>0,149=>0,151=>0,157=>0,163=>0,167=>0,173=>0,179=>0,181=>0,191=>0,193=>0,197=>0,199=>0,211=>0,223=>0,227=>0,229=>0,233=>0,239=>0,241=>0,251=>0,257=>0,263=>0,269=>0,271=>0,277=>0,281=>0,283=>0,293=>0,307=>0,311=>0,313=>0,317=>0,331=>0,337=>0,347=>0,349=>0,353=>0,359=>0,367=>0,373=>0,379=>0,383=>0,389=>0,397=>0,401=>0,409=>0,419=>0,421=>0,431=>0,433=>0,439=>0,443=>0,449=>0,457=>0,461=>0,463=>0,467=>0,479=>0,487=>0,491=>0,499=>0,503=>0,509=>0,521=>0,523=>0,541=>0,547=>0,557=>0,563=>0,569=>0,571=>0,577=>0,587=>0,593=>0,599=>0,601=>0,607=>0,613=>0,617=>0,619=>0,631=>0,641=>0,643=>0,647=>0,653=>0,659=>0,661=>0,673=>0,677=>0,683=>0,691=>0,701=>0,709=>0,719=>0,727=>0,733=>0,739=>0,743=>0,751=>0,757=>0,761=>0,769=>0,773=>0,787=>0,797=>0,809=>0,811=>0,821=>0,823=>0,827=>0,829=>0,839=>0,853=>0,857=>0,859=>0,863=>0,877=>0,881=>0,883=>0,887=>0,907=>0,911=>0,919=>0,929=>0,937=>0,941=>0,947=>0,953=>0,967=>0,971=>0,977=>0,983=>0,991=>0,997=>0,1009=>0,1013=>0,1019=>0,1021=>0,1031=>0,1033=>0,1039=>0,1049=>0,1051=>0,1061=>0,1063=>0,1069=>0,1087=>0,1091=>0,1093=>0,1097=>0,1103=>0,1109=>0,1117=>0,1123=>0,1129=>0,1151=>0,1153=>0,1163=>0,1171=>0,1181=>0,1187=>0,1193=>0,1201=>0,1213=>0,1217=>0,1223=>0,1229=>0,1231=>0,1237=>0,1249=>0,1259=>0,1277=>0,1279=>0,1283=>0,1289=>0,1291=>0,1297=>0,1301=>0,1303=>0,1307=>0,1319=>0,1321=>0,1327=>0,1361=>0,1367=>0,1373=>0,1381=>0,1399=>0,1409=>0,1423=>0,1427=>0,1429=>0,1433=>0,1439=>0,1447=>0,1451=>0,1453=>0,1459=>0,1471=>0,1481=>0,1483=>0,1487=>0,1489=>0,1493=>0,1499=>0,1511=>0,1523=>0,1531=>0,1543=>0,1549=>0,1553=>0,1559=>0,1567=>0,1571=>0,1579=>0,1583=>0,1597=>0,1601=>0,1607=>0,1609=>0,1613=>0,1619=>0,1621=>0,1627=>0,1637=>0,1657=>0,1663=>0,1667=>0,1669=>0,1693=>0,1697=>0,1699=>0,1709=>0,1721=>0,1723=>0,1733=>0,1741=>0,1747=>0,1753=>0,1759=>0,1777=>0,1783=>0,1787=>0,1789=>0,1801=>0,1811=>0,1823=>0,1831=>0,1847=>0,1861=>0,1867=>0,1871=>0,1873=>0,1877=>0,1879=>0,1889=>0,1901=>0,1907=>0,1913=>0,1931=>0,1933=>0,1949=>0,1951=>0,1973=>0,1979=>0,1987=>0,1993=>0,1997=>0,1999=>0,2003=>0,2011=>0,2017=>0,2027=>0,2029=>0,2039=>0,2053=>0,2063=>0,2069=>0,2081=>0,2083=>0,2087=>0,2089=>0,2099=>0,2111=>0,2113=>0,2129=>0,2131=>0,2137=>0,2141=>0,2143=>0,2153=>0,2161=>0,2179=>0,2203=>0,2207=>0,2213=>0,2221=>0,2237=>0,2239=>0,2243=>0,2251=>0,2267=>0,2269=>0,2273=>0,2281=>0,2287=>0,2293=>0,2297=>0,2309=>0,2311=>0,2333=>0,2339=>0,2341=>0,2347=>0,2351=>0,2357=>0,2371=>0,2377=>0,2381=>0,2383=>0,2389=>0,2393=>0,2399=>0,2411=>0,2417=>0,2423=>0,2437=>0,2441=>0,2447=>0,2459=>0,2467=>0,2473=>0,2477=>0,2503=>0,2521=>0,2531=>0,2539=>0,2543=>0,2549=>0,2551=>0,2557=>0,2579=>0,2591=>0,2593=>0,2609=>0,2617=>0,2621=>0,2633=>0,2647=>0,2657=>0,2659=>0,2663=>0,2671=>0,2677=>0,2683=>0,2687=>0,2689=>0,2693=>0,2699=>0,2707=>0,2711=>0,2713=>0,2719=>0,2729=>0,2731=>0,2741=>0,2749=>0,2753=>0,2767=>0,2777=>0,2789=>0,2791=>0,2797=>0,2801=>0,2803=>0,2819=>0,2833=>0,2837=>0,2843=>0,2851=>0,2857=>0,2861=>0,2879=>0,2887=>0,2897=>0,2903=>0,2909=>0,2917=>0,2927=>0,2939=>0,2953=>0,2957=>0,2963=>0,2969=>0,2971=>0,2999=>0,3001=>0,3011=>0,3019=>0,3023=>0,3037=>0,3041=>0,3049=>0,3061=>0,3067=>0,3079=>0,3083=>0,3089=>0,3109=>0,3119=>0,3121=>0,3137=>0,3163=>0,3167=>0,3169=>0,3181=>0,3187=>0,3191=>0,3203=>0,3209=>0,3217=>0,3221=>0,3229=>0,3251=>0,3253=>0,3257=>0,3259=>0,3271=>0,3299=>0,3301=>0,3307=>0,3313=>0,3319=>0,3323=>0,3329=>0,3331=>0,3343=>0,3347=>0,3359=>0,3361=>0,3371=>0,3373=>0,3389=>0,3391=>0,3407=>0,3413=>0,3433=>0,3449=>0,3457=>0,3461=>0,3463=>0,3467=>0,3469=>0,3491=>0,3499=>0,3511=>0,3517=>0,3527=>0,3529=>0,3533=>0,3539=>0,3541=>0,3547=>0,3557=>0,3559=>0,3571=>0,3581=>0,3583=>0,3593=>0,3607=>0,3613=>0,3617=>0,3623=>0,3631=>0,3637=>0,3643=>0,3659=>0,3671=>0,3673=>0,3677=>0,3691=>0,3697=>0,3701=>0,3709=>0,3719=>0,3727=>0,3733=>0,3739=>0,3761=>0,3767=>0,3769=>0,3779=>0,3793=>0,3797=>0,3803=>0,3821=>0,3823=>0,3833=>0,3847=>0,3851=>0,3853=>0,3863=>0,3877=>0,3881=>0,3889=>0,3907=>0,3911=>0,3917=>0,3919=>0,3923=>0,3929=>0,3931=>0,3943=>0,3947=>0,3967=>0,3989=>0,4001=>0];
  for($f=2; $f<=$n; $f++){
    $fact=$f;
    foreach($prime as $p=>&$count){
      if($fact<2) break;
      while($p<=$fact && $fact%$p==0) {
        $fact=intdiv($fact,$p);
        $count++;
      }
    }
  }
  $prime=array_filter($prime, function($v){return $v>0;});
  foreach($prime as $p=>&$count) $count=$count>1?$p.'^'.$count:$p;
  return join(' * ',$prime);
}

echo decomp(17);

/*
dotest(17, "2^15 * 3^6 * 5^3 * 7^2 * 11 * 13 * 17");
dotest(5, "2^3 * 3 * 5");
dotest(22, "2^19 * 3^9 * 5^4 * 7^3 * 11^2 * 13 * 17 * 19");

n = 12; decomp(12) -> "2^10 * 3^5 * 5^2 * 7 * 11"
n = 22; decomp(22) -> "2^19 * 3^9 * 5^4 * 7^3 * 11^2 * 13 * 17 * 19"
n = 25; decomp(25) -> 2^22 * 3^10 * 5^6 * 7^3 * 11^2 * 13 * 17 * 19 * 23
*/