import { aliasTs } from '@bemedev/vitest-alias';
import { defineConfig } from 'vitest/config';
import { exclude } from './src/vitest';
import tsconfig from './tsconfig.json';

export default defineConfig({
  plugins: [
    aliasTs(tsconfig as any),
    exclude({ ignoreCoverageFiles: ['**/index.ts'], ignoreTestFiles: [] }),
  ],
  test: {
    environment: 'node',

    coverage: {
      enabled: true,
      extension: 'ts',
      reportsDirectory: '.coverage',
      all: true,
      provider: 'v8',
    },
  },
});
