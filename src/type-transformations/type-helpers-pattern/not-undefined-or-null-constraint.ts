// every type that extends object is not undefined or null
export type Maybe1<T extends object> = T | null | undefined;
export type Maybe<T extends string | boolean | number> = T | null | undefined;

type tests = [
  // @ts-expect-error
  Maybe1<null>,
  // @ts-expect-error
  Maybe1<undefined>,

  Maybe<string>,
  Maybe<false>,
  Maybe<0>,
  Maybe<"">,
];

export type { tests };
