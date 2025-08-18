//https://www.codewars.com/kata/5514e5b77e6b2f38e0000ca9/train/java
//ok

import java.util.Arrays;

public class Plus_One_Array {
public static void main(String[] args) {
  System.out.println(Arrays.toString(PlusOneArray.upArray(new int[]{9,9,9,9})));
}

public class PlusOneArray {
  public static int[] upArray(final int[] arr) {
    int len=arr.length;
    if (len==0) return null;
    int[] out = new int[len];
    boolean flag=true;// флаг переноса единицы в сделующий разряд
    for (int i=len-1; i>=0; i--){
      if (arr[i]<0 || arr[i]>9) return null;
      out[i]=arr[i]+(flag?1:0);// копируем в новый массив элемент + 1 (или +0)
      flag=out[i]>9?true:false;// флаг переноса единицы устанавливаем если нужно
      out[i]%=10;// обрезаем по остатку от деления на 10, чтобы не было превышения
    }
    if(flag){// если флаг переноса остался, а массив закончился
      int[] out1 = new int[len+1]; // тогда создаем массив большей длины
      System.arraycopy(out, 0, out1, 1, len);// копируем в новый массив старый со сдвигом
      out1[0]=1;// а первому элементу присваиваем 1
      return out1;
    }
    return out;
  }
}


}

// [4, 3, 2, 5] would return [4, 3, 2, 6] (4325 + 1 = 4326)
// [1, 2, 3, 9] would return [1, 2, 4, 0] (1239 + 1 = 1240)
// [9, 9, 9, 9] would return [1, 0, 0, 0, 0] (9999 + 1 = 10000)
// [0, 1, 3, 7] would return [0, 1, 3, 8] (0137 + 1 = 0138)
