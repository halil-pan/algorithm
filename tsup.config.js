import {defineConfig} from 'tsup';

export default defineConfig({
  sourcemap: true,
  clean: true,
  entryPoints: ['src/index.ts', 'src/index.test.ts'],
  format: ['cjs', 'esm'],
  dts: true,
});
