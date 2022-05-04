import {strict as assert} from 'node:assert';
import {switchCase} from './switch-case';

export function test() {
  assert.equal(switchCase('aBcD'), 'AbCd');
}
