import { createTests as _create } from '@bemedev/vitest-extended';
import type { Fc } from '@bemedev/vitest-extended/lib/types';
import { name } from './constants';
import { exclude } from './vitest';

const environment = 'node';
const enabled = true;
const enforce = 'pre';

const createTests = () => {
  const _f = async (...args: Parameters<typeof exclude>) => {
    const { name, enforce, config: c } = exclude(...args);
    const fn = c as Fc;
    const config = await fn({
      test: { environment, coverage: { enabled } },
    });
    return { config, name, enforce };
  };
  const useTests = _create(_f);
  return useTests;
};

const useTests = createTests();

useTests(
  [
    'No ignore',
    [],
    {
      name,
      enforce,
      config: {
        test: {
          include: ['src/vitest.test.ts'],
          environment,
          coverage: {
            enabled,
            include: [
              'src/vitest.utils.ts',
              'src/vitest.ts',
              'src/vitest.test.ts',
              'src/types.ts',
              'src/index.ts',
              'src/constants.ts',
            ],
          },
        },
      },
    },
  ],
  [
    'Ignore all test files in coverage',
    [{ ignoreCoverageFiles: ['**/*.test.ts'] }],
    {
      name,
      enforce,
      config: {
        test: {
          environment,
          include: ['src/vitest.test.ts'],

          coverage: {
            enabled,
            include: [
              'src/vitest.utils.ts',
              'src/vitest.ts',
              'src/types.ts',
              'src/index.ts',
              'src/constants.ts',
            ],
          },
        },
      },
    },
  ],
  [
    'Ignore all index files',
    [{ ignoreCoverageFiles: ['**/index.ts'] }],
    {
      name,
      enforce,
      config: {
        test: {
          environment,
          include: ['src/vitest.test.ts'],

          coverage: {
            enabled,
            include: [
              'src/vitest.utils.ts',
              'src/vitest.ts',
              'src/vitest.test.ts',
              'src/types.ts',
              'src/constants.ts',
            ],
          },
        },
      },
    },
  ],
);
