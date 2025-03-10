import { aliasTs } from '@bemedev/vitest-alias';
import solid from 'vite-plugin-solid';
import { defineConfig } from 'vitest/config';
import { exclude } from './src/vitest';

import tsconfig from './tsconfig.json';

export default defineConfig({
  plugins: [
    aliasTs(tsconfig as any),
    exclude({
      ignoreCoverageFiles: ['**/index.ts', '**/types.ts'],
      ignoreTestFiles: [],
    }),
    solid(),
  ],
  resolve: {
    conditions: ['development', 'browser'],
  },
  test: {
    environment: 'jsdom',
    coverage: {
      enabled: true,
      extension: 'ts',
      reportsDirectory: '.coverage',
      all: true,
      provider: 'v8',
    },
  },
});
