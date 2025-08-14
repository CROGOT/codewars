//https://www.codewars.com/kata/581e014b55f2c52bb00000f8/train/javascript
//ok нет заданиия на java

import java.util.regex.*;
public class Decipher_this {
  public static void main(String[] args) {
    System.out.println(Kata.decipherThis("72olle 103doo 100ya"));
  }
  public class Kata {
    public static String decipherThis(String text) {
      if (text=="") return "";
      String[] words = text.split(" ");
      Pattern r = Pattern.compile("(\\d+)(.)(.*)(.)");
      for(int i=0;i<words.length;i++){
        Matcher m = r.matcher(words[i]);
        if (m.find()) words[i]=(char)Integer.parseInt(m.group(1))+m.group(4)+m.group(3)+m.group(2);
      } 
      return String.join(" ",words);
    }
  }
}
