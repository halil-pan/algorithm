import {defineConfig} from 'tsup';

export default defineConfig({
  sourcemap: true,
  clean: true,
  entryPoints: [
    'src/rotate-array.ts',
    'src/rotate-array.test.ts',
  ],
  format: ['cjs', 'esm'],
  dts: true,
});
