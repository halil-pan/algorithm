/**
 * 一个二叉搜索树，求其中的第 K 小的节点的值。
 * 如下图，第 3 小的节点是 4
 * 二叉搜索树特点：中序遍历的结果，正好是按照从小到大排序的结果
 */

export interface BinarySearchTree {
  value: number;
  left?: BinarySearchTree;
  right?: BinarySearchTree;
}

const inOrderTraverse = (tree: BinarySearchTree, cb: (treeNode: BinarySearchTree) => void): void => {
  if (tree.left) {
    inOrderTraverse(tree.left, cb);
  }

  cb(tree);

  if (tree.right) {
    inOrderTraverse(tree.right, cb);
  }
};

export const getKthValueInTree = (tree: BinarySearchTree, k: number): number | null => {
  const sortedArray: number[] = [];
  inOrderTraverse(tree, (treeNode: BinarySearchTree) => {
    sortedArray.push(treeNode.value);
  });
  return sortedArray[k - 1] || null;
};
