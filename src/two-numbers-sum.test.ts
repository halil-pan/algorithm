import {strict as assert} from 'node:assert';
import {twoNumbersSum} from './two-numbers-sum';

export function test() {
  assert.deepEqual(twoNumbersSum([1, 2, 3, 4, 5], 3), [1, 2]);
  assert.deepEqual(twoNumbersSum([1, 2, 3, 4, 5], 9), [4, 5]);
  assert.deepEqual(twoNumbersSum([1, 2, 3, 4, 5], 100), []);
}
