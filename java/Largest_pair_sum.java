//https://www.codewars.com/kata/556196a6091a7e7f58000018/solutions/java
//ok

import java.util.Arrays;
public class Largest_pair_sum {
  public static void main(String[] args) {
    System.out.println(Solution.largestPairSum(new int[]{-10,-8,-16,-18,-19}));
  }

  // моя версия 
public class Solution{
    public static int largestPairSum(int[] numbers){
       Arrays.sort(numbers);
        return numbers[numbers.length-1]+numbers[numbers.length-2];
    }
}

// еще одна версия 

// import java.util.Comparator;
// import java.util.stream.IntStream;

// public class Solution{
//     public static int largestPairSum(int[] numbers){
// 		return IntStream.of(numbers)
//                     .boxed()
//                     .sorted(Comparator.reverseOrder())
//                     .limit(2)
//                     .mapToInt(Integer::intValue)
//                     .sum();
//     }
// }

}



