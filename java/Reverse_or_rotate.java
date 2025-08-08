//https://www.codewars.com/kata/56b5afb4ed1f6d5fb0000991/train/java
//ok

import java.util.Arrays;

public class Reverse_or_rotate {
  public static void main(String[] args) {
    System.out.println(RevRot.revRot("733049910872815764", 5));
  }
  class RevRot {
    
    public static String revRot(String strng, int sz) {
      if (sz==0 || strng =="" || strng.length() < sz) return "";
      String out="";
      for (int i=0; i<strng.length()-sz; i+=sz)
        out+=reverseOrRotateString(strng.substring(i,i+sz));
      return out;
    }

    public static String reverseOrRotateString(String s){
      if (Arrays.stream(s.split("")).mapToInt(Integer::parseInt).sum()%2 == 0)
        return new StringBuilder(s).reverse().toString();
      return s.substring(1)+s.substring(0,1);
    }
  }
}
/*
 
("123456987654", 6) --> "234561876549"
("123456987653", 6) --> "234561356789"
("66443875", 4) --> "44668753"
("66443875", 8) --> "64438756"
("664438769", 8) --> "67834466"
("123456779", 8) --> "23456771"
("", 8) --> ""
("123456779", 0) --> "" 
("563000655734469485", 4) --> "0365065073456944"

Вариант 2

class RevRot {

    public static String revRot(String nums, int sz) {
        StringBuffer groups = new StringBuffer();
        for (int i = 0, len = nums.length(); i + sz <= len && sz > 0; i += sz) {
            String group = nums.substring(i, i + sz);
            groups.append(isDivisible(group) ? new StringBuffer(group).reverse() : group.substring(1) + group.charAt(0));
        }
        return groups.toString();  
    }
    
    public static boolean isDivisible(String group) {
        int sum = 0;
        for (char num : group.toCharArray()) {
            sum += Character.getNumericValue(num);
        }
        return sum % 2 == 0;
    }

}


 */
