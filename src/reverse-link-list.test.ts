import {strict as assert} from 'node:assert';
import {createLinkList, reverseLinkList} from './reverse-link-list';

export function test() {
  const linkList = createLinkList([1, 2, 3]);

  assert.deepEqual(linkList, {
    value: 1,
    next: {
      value: 2,
      next: {
        value: 3,
      },
    },
  });

  assert.deepEqual(reverseLinkList(linkList), {
    value: 3,
    next: {
      value: 2,
      next: {
        value: 1,
      },
    },
  });
}
