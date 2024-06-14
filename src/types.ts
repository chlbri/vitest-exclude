import type { UserConfig } from 'vitest/config';

export type Define<T> = Exclude<T, undefined>;

export type Plugin = Exclude<
  Define<UserConfig['plugins']>[number],
  Promise<any> | null | undefined | false | Array<any>
>;

export type Args = [
  pattern: string | string[],
  {
    ignoreTestFiles?: string[];
    ignoreCoverageFiles?: string[];
  },
];

export type WithPattern = (...args: Args) => Plugin;
