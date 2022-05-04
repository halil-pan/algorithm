import {strict as assert} from 'node:assert';
import {findPalindromeNumbers} from './palindrome-number';

export function test() {
  assert.deepEqual(findPalindromeNumbers(102), [1, 2, 3, 4, 5, 6, 7, 8, 9, 11, 22, 33, 44, 55, 66, 77, 88, 99, 101]);
}
