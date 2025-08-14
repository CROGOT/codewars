//https://www.codewars.com/kata/52f78966747862fc9a0009ae/train/java
//ok

import java.util.Stack;

public class Reverse_polish_notation_calculator {
  

  public static void main(String[] args) {
    Calc calc = new Calc();
    System.out.println(calc.evaluate("4 2 /"));
  }
 
}

class Calc {
  public double evaluate(String expr) {
    Stack<Double> st = new Stack<Double>();
    String[] arr = expr.split(" ");
    for (String r: arr)
      switch (r) {
        case "+":st.push(st.pop()+st.pop()); break;
        case "-":st.push(st.pop()+st.pop()); break;
        case "*":st.push(st.pop()*st.pop()); break;
        case "/":st.push(1/st.pop()*st.pop()); break;
        default: st.push(Double.parseDouble(r)); break;
      }
    return st.pop();
  }
}