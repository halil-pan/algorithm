import {strict as assert} from 'node:assert';
import {BinarySearchTree, getKthValueInTree} from './binary-search-tree-k-value';

export function test() {
  const bst: BinarySearchTree = {
    value: 500,
    left: {
      value: 300,
      left: {
        value: 200,
        left: {
          value: 100,
        },
      },
      right: {
        value: 400,
      },
    },
    right: {
      value: 700,
      left: {
        value: 600,
      },
      right: {
        value: 800,
      },
    },
  };
  assert.equal(getKthValueInTree(bst, 3), 300);
  assert.equal(getKthValueInTree(bst, 5), 500);
  assert.equal(getKthValueInTree(bst, 100), null);
  assert.equal(getKthValueInTree(bst, -1), null);
}
