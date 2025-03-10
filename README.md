## A simple lib to Exclude files for test and coverage

### More dev-friendly

### Usage

To use this library, follow the steps below:

1. Install the package:

```sh
pnpm install @bemedev/vitest-exclude
```

2. Import the necessary functions in your test files:

```typescript
import { exclude } from '@bemedev/vitest-exclude';
```

3. Configure your tests:

```typescript
import { exclude } from '@bemedev/vitest-exclude';
import { defineConfig } from 'vitest/config';

export default defineConfig({
  plugins: [
    exclude({
      // Exclude these files from coverage because they are not relevant
      ignoreCoverageFiles: ['**/index.ts', '**/types.ts'],
      ignoreTestFiles: ['./path/to/your/test/file.ts'],
    }),
  ],
});
```

4. Run your tests:

```sh
pnpm run test
```

This will exclude the specified files from test and coverage.
