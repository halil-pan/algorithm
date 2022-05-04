import {strict as assert} from 'node:assert';
import {rotateArray} from './rotate-array';

export function test() {
  assert.deepEqual(rotateArray([1, 2, 3, 4, 5], 3), [3, 4, 5, 1, 2]);

  assert.deepEqual(rotateArray([1, 2, 3, 4, 5], 8), [1, 2, 3, 4, 5]);

  assert.deepEqual(rotateArray([1, 2, 3, 4, 5], -1), [1, 2, 3, 4, 5]);
}
