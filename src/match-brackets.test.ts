import {strict as assert} from 'node:assert';
import {matchBrackets} from './match-brackets';

export function test() {
  assert.equal(matchBrackets('1{2[3(4)5]6}7'), true);
  assert.equal(matchBrackets('1{2[3(4]5)6}7'), false);
  assert.equal(matchBrackets('1{2[3(4)5]67'), false);
  assert.equal(matchBrackets(''), true);
}
