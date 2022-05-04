import {strict as assert} from 'node:assert';
import {moveZero} from './move-zero';

export function test() {
  assert.deepEqual(moveZero([1, 0, 2, 0, 3, 4, 0]), [1, 2, 3, 4, 0, 0, 0]);
}
