//https://www.codewars.com/kata/556e0fccc392c527f20000c5/train/java
//ok

import java.util.Arrays;

public class Fibonacci_Tribonacci_and_friends {
  
  public static void main(String[] args) {
    Xbonacci variabonacci = new Xbonacci();
    System.out.println(Arrays.toString(variabonacci.xbonacci(new double []{1,0,0,0,0,0,1},10)));
  }
public static class Xbonacci {

  public double[] xbonacci(double[] signature, int n) {
      double[] out = new double[n];
      for (int i=0; i<n; i++)
        if (i<signature.length) out[i]=signature[i];
        else for(int j=0; j<signature.length; j++) out[i]+=out[i-j-1];
      return out;
  }
} 
}

