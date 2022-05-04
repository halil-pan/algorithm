import {strict as assert} from 'node:assert';
import {fibonacci} from './fibonacci';

export function test() {
  assert.equal(fibonacci(0), 0);
  assert.equal(fibonacci(1), 1);
  assert.equal(fibonacci(2), 1);
  assert.equal(fibonacci(3), 2);
  assert.equal(fibonacci(6), 8);
}
