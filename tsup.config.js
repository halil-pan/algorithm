import {defineConfig} from 'tsup';

export default defineConfig({
  sourcemap: false,
  clean: true,
  entryPoints: [
    'src/rotate-array.ts',
    'src/rotate-array.test.ts',
    'src/match-brackets.ts',
    'src/match-brackets.test.ts',
    'src/two-stacks-one-queue.ts',
    'src/two-stacks-one-queue.test.ts',
    'src/reverse-link-list.ts',
    'src/reverse-link-list.test.ts',
    'src/binary-search.ts',
    'src/binary-search.test.ts',
    'src/two-numbers-sum.ts',
    'src/two-numbers-sum.test.ts',
    'src/binary-search-tree-k-value.ts',
    'src/binary-search-tree-k-value.test.ts',
    'src/fibonacci.ts',
    'src/fibonacci.test.ts',
  ],
  format: ['cjs'],
  dts: false,
});
