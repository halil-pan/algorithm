import {strict as assert} from 'node:assert';
import {binarySearch} from './binary-search';

export function test() {
  assert.equal(binarySearch([1, 2, 3, 4, 5], 3), 2);
  assert.equal(binarySearch([1, 2, 3, 4, 5], 4), 3);
  assert.equal(binarySearch([1, 2, 3, 4, 5], -1), -1);
  assert.equal(binarySearch([1, 2, 3, 4, 5], 100), -1);
}
