//https://www.codewars.com/kata/54a2e93b22d236498400134b/train/java
//ok

import java.util.HashMap;
import java.util.Map;

public class Multi_tap_Keypad_Text_Entry_on_an_Old_Mobile_Phone {
  public static void main(String[] args) {
    System.out.println(Keypad.presses("HOW r U"));
  }
  public class Keypad {
    public static int presses(String phrase) {
      System.out.println(phrase);
      int out=0;
      Map<Character, Integer> map = new HashMap<>();
      map.putAll(Map.of(
      'A',1,'B',2,'C',3,
      'D',1,'E',2,'F',3,
      'G',1,'H',2,'I',3));
      map.putAll(Map.of(
      'J',1,'K',2,'L',3,
      'M',1,'N',2,'O',3,
      'P',1,'Q',2,'R',3,'S',4));
      map.putAll(Map.of(
      'T',1,'U',2,'V',3,
      'W',1,'X',2,'Y',3,'Z',4,
      ' ',1,'*',1,'#',1));
      map.putAll(Map.of(
      '1',1,'2',4,'3',4,
      '4',4,'5',4,'6',4,
      '7',5,'8',4,'9',5,'0',2));
      for (char c: phrase.toUpperCase().toCharArray())
        out+=map.get(c);
      return out;
    }
  }
}

// import java.util.Arrays;
// import java.util.List;

// public class Keypad {

//     private static final List<String> KEYS = Arrays.asList(
//             "1", "ABC2", "DEF3", "GHI4", "JKL5", "MNO6", "PQRS7", "TUV8", "WXYZ9", "*", " 0", "#");

//     public static int presses(String phrase) {
//         return phrase.toUpperCase().chars()
//                 .flatMap(c -> KEYS.stream().mapToInt(k -> k.indexOf(c) + 1))
//                 .filter(i -> i > 0)
//                 .sum();
//     }
// }

// ------- ------- -------
// |     | | ABC | | DEF |
// |  1  | |  2  | |  3  |
// ------- ------- -------
// ------- ------- -------
// | GHI | | JKL | | MNO |
// |  4  | |  5  | |  6  |
// ------- ------- -------
// ------- ------- -------
// |PQRS | | TUV | | WXYZ|
// |  7  | |  8  | |  9  |
// ------- ------- -------
// ------- ------- -------
// |  *  | |space| |  #  |
// |     | |  0  | |     |
// ------- ------- -------