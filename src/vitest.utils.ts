import { existsSync } from 'fs';
import { glob } from 'glob';
import { join } from 'node:path';

export const hasSrc = () => {
  return existsSync(join(process.cwd(), 'src'));
};

export const defaultCovPattern = () => {
  const _src = hasSrc();
  /* v8 ignore next */
  return `${_src ? 'src/' : ''}**/*.t{s,sx}`;
};

export const buildInclude = (
  pattern: string | string[],
  ignore?: string[],
) => {
  const include = glob(pattern, {
    ignore,
    cwd: process.cwd(),
  });

  return include;
};

export const testPattern = () => {
  const _src = hasSrc();
  /* v8 ignore next */
  return `${_src ? 'src/' : ''}**/*.{test,spec}.{ts,js,tsx,jsx}`;
};
