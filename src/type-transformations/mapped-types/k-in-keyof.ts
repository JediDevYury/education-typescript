import { Equal, Expect } from "helpers/type-utils";

interface Attributes {
  firstName: string;
  lastName: string;
  age: number;
}

type UnionKeysOf<T> = keyof T;

type AttributeGetters = {
  [K in UnionKeysOf<Attributes>]: () => Attributes[K];
};

type tests = [
  Expect<
   Equal<
    AttributeGetters,
    {
      firstName: () => string;
      lastName: () => string;
      age: () => number;
    }
   >
  >,
];

export type {tests}
