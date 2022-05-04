import {strict as assert} from 'node:assert';
import {thousandsFormat} from './thousands-format';

export function test() {
  assert.deepEqual(thousandsFormat(12_345_678), '12,345,678');
}
