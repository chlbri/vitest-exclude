import { existsSync } from 'fs';
import { glob } from 'glob';
import { join } from 'node:path';

export const hasSrc = () => {
  return existsSync(join(process.cwd(), 'src'));
};

export const defaultPattern = () => {
  const _src = hasSrc();
  return `${_src ? 'src/' : ''}**/*.ts`;
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
  return `${_src ? 'src/' : ''}**/*.{test,spec}.{ts,js}`;
};
