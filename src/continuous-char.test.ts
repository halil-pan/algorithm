import {strict as assert} from 'node:assert';
import {findContinousChar} from './continuous-char';

export function test() {
  assert.deepEqual(findContinousChar('aaabbbbbcc'), ['b', 5]);
  assert.deepEqual(findContinousChar('aaabbbbbcccccccc'), ['c', 8]);
  assert.deepEqual(findContinousChar(''), ['', 0]);
}
