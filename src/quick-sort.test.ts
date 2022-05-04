import {strict as assert} from 'node:assert';
import {quickSort} from './quick-sort';

export function test() {
  assert.deepEqual(quickSort([1, 5, 3, 2, 4]), [1, 2, 3, 4, 5]);
}
