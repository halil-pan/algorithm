import {strict as assert} from 'node:assert';
import {MyQueue} from './two-stacks-one-queue';

export function test() {
  const queue = new MyQueue();
  queue.push(1);
  assert.equal(queue.size, 1);
  queue.push(2);
  assert.equal(queue.size, 2);
  queue.unshift();
  assert.equal(queue.size, 1);
}
