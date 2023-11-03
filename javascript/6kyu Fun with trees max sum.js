//https://www.codewars.com/kata/57e5279b7cf1aea5cf000359/train/javascript


class TreeNode {
  constructor(value, left = null, right = null) {
      this.value = value;
      this.left = left;
      this.right = right;
  }
}

function maxSum(root) {
  if(!root) return -Infinity;
  let max=Math.max(maxSum(root.left), maxSum(root.right));
  return root.value+(max==-Infinity?0:max);
} 

console.log(maxSum(new TreeNode(5,
  new TreeNode(4,
      new TreeNode(-80),
      new TreeNode(-60)
  ),
  new TreeNode(10,
      new TreeNode(-90)
  )
))); // -51