//https://www.codewars.com/kata/5848565e273af816fb000449/java
//ok

public class Encrypt_this {
  public static void main(String[] args) {
    System.out.println(Kata.encryptThis("The more he saw the less he spoke"));
    //"84eh 109ero 104e 115wa 116eh 108sse 104e 115eokp"
  }
  public class Kata {
    public static String encryptThis(String text) {
      if (text=="") return "";
      String[] words = text.split(" ");
      for(int i=0;i<words.length;i++){
        String s=""+(int)words[i].charAt(0);
        if (words[i].length()>1) s+=words[i].charAt(words[i].length()-1);
        if (words[i].length()>3) s+=words[i].substring(2,words[i].length()-1);
        if (words[i].length()>2) s+=words[i].charAt(1);
        words[i]=s;
      } 
      return String.join(" ",words);
    }
  }
}
/* Вариант 2
import java.util.Arrays;
import java.util.stream.Collectors;

public class Kata {
    public static String encryptThis(String text) {
        return Arrays.stream(text.split(" ")).map(Kata::encryptWord).collect(Collectors.joining(" "));
    }

    private static String encryptWord(String word) {
        if (word.equals("")) {
            return "";
        }
        StringBuilder result = new StringBuilder();
        if (word.length() > 2) {
            result.append(word.replaceFirst(".(.)(.*)(.)", "$3$2$1"));
        } else if (word.length() == 2) {
            result.append(word.charAt(1));
        }
        return result.insert(0, (int) word.charAt(0)).toString();
    }
}
 */

