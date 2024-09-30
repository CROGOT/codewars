//https://www.codewars.com/kata/51675d17e0c1bed195000001/train/java
//ok

public class Largest_5_digit_number_in_a_series {
  public static int solve(final String digits) {
    String out = "00000";
    for(int i=0; i<digits.length()-4; i++)
      if(out.compareTo(digits.substring(i,i+5))<0) out=digits.substring(i,i+5);
    return Integer.parseInt(out);
  }
  
}
