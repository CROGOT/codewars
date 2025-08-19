//https://www.codewars.com/kata/51b66044bce5799a7f000003/train/java
//ok

public class Roman_Numerals_Helper {
  public static void main(String[] args) {
    System.out.println(RomanNumerals.toRoman(2008));
    System.out.println(RomanNumerals.fromRoman("MMVIII"));
  }

  public class RomanNumerals {
    record Rec(String s, int i){};
    static Rec[] rec={ 
      new Rec("M", 1000),
      new Rec("CM", 900), 
      new Rec("D", 500), 
      new Rec("CD", 400),
      new Rec("C", 100),
      new Rec("XC", 90),
      new Rec("L", 50),
      new Rec("XL", 40),
      new Rec("X", 10),
      new Rec("IX", 9),
      new Rec("V", 5),
      new Rec("IV", 4),
      new Rec("I", 1)
    };
 
    public static String toRoman(int n) {
      String out="";
      for (Rec r:rec) 
        while (r.i<=n){
          out+=r.s;
          n-=r.i;
        }
      return out;
    }
    
    public static int fromRoman(String romanNumeral) {
      int out=0, i=0;
      for (Rec r:rec)
        while(i<romanNumeral.length() && romanNumeral.startsWith(r.s, i)){
          out+=r.i;
          i+=r.s.length();
        }
      return out;
    }
  }
}
