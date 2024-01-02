import { Equal, Expect } from "helpers/type-utils";

const fruits = ["apple", "banana", "orange"] as const;

// type AppleOrBanana = Exclude<typeof fruits[number], 'orange'>;
type AppleOrBanana1 = typeof fruits[0 | 1];
type Fruit = typeof fruits[number];

type tests = [
  Expect<Equal<AppleOrBanana1, "apple" | "banana">>,
  Expect<Equal<Fruit, "apple" | "banana" | "orange">>,
];

export type { tests };
