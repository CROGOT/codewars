//https://www.codewars.com/kata/52423db9add6f6fc39000354/train/java
//ok

import java.util.Arrays;

public class Conways_Game_of_Life_Unlimited_Edition {
  public static void main(String[] args) {
    // int[][] gliders = {
    //   {1,0,0},
    //   {0,1,1},
    //   {1,1,0}};

    // int[][] gliders = {
    //   {0,0,0,0,0},
    //   {0,1,0,0,0},
    //   {0,0,1,1,0},
    //   {0,1,1,0,0},
    //   {0,0,0,0,0}};
    int[][] gliders={
      {1, 1, 1, 0, 0, 0, 1, 0},
      {1, 0, 0, 0, 0, 0, 0, 1},
      {0, 1, 0, 0, 0, 1, 1, 1},
    };
    Arrays.stream(ConwayLife.getGeneration(gliders, 16)).map(Arrays::toString).forEach(System.out::println);
    
    
  }
 public class ConwayLife {

  public static int[][] getGeneration(int[][] cells, int generations) {
   Arrays.stream(cells).map(Arrays::toString).forEach(System.out::println);
    int[][][] life=new int[generations+1][cells.length+generations*2][cells[0].length+generations*2];
    for (int i=0; i<cells.length; i++)
      for (int j=0; j<cells[0].length; j++)
        life[0][i+generations][j+generations]=cells[i][j];
   // life[0]=cells;
    final int[][] dx={{-1,1}, {0,1}, {1,1}, {1,0}, {1,-1}, {0,-1}, {-1,-1}, {-1,0}};
    for (int k=1; k<=generations; k++){
      //life[k]=new int[cells.length][];
      for (int i=0; i<life[0].length; i++){
       // life[k][i]=new int[cells[0].length];
        for (int j=0; j<life[0][0].length; j++){
          int count=0;
          for(int[] d: dx) count+=(i+d[0]>=0 && i+d[0]<life[0].length && j+d[1]>=0 && j+d[1]<life[0][0].length)?life[k-1][i+d[0]][j+d[1]]:0;
          if (life[k-1][i][j]==0) life[k][i][j]=count==3?1:0;
          else life[k][i][j]=(count==2 || count==3)?1:0;
        }
      }
      // System.out.println("k="+k+" ====>");
      // Arrays.stream(life[k]).map(Arrays::toString).forEach(System.out::println);
    }
    int imax=0,jmax=0, imin=life[0].length, jmin=life[0][0].length;
    for (int i=0; i<life[0].length; i++)
      for (int j=0; j<life[0][0].length; j++)
        if (life[generations][i][j]==1){
          imax=i; 
          jmax=Math.max(j, jmax);
          imin=Math.min(i, imin);
          jmin=Math.min(j, jmin);
        }
    int[][] out=new int[imax-imin+1][jmax-jmin+1];
    for (int i=0; i<out.length; i++)
      for (int j=0; j<out[0].length; j++) 
        out[i][j]=life[generations][i+imin][j+jmin];
    
    System.out.println(imin+" "+jmin+" "+imax+" "+jmax);
    Arrays.stream(life[generations]).map(Arrays::toString).forEach(System.out::println);
    return out;
  }
}








}
