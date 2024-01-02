import { Equal, Expect } from "helpers/type-utils";

interface Example {
  name: string;
  age: number;
  id: string;
  organisationId: string;
  groupId: string;
}

// type SearchForId = `${string}${'id' | "Id"}${string}`;

type ExcludedKeys = Exclude<keyof Example, 'name' | 'age'>;

type OnlyIdKeys<T> = {
  [K in keyof T as K extends ExcludedKeys ? K : never]: T[K]
};

type tests = [
  Expect<
   Equal<
    OnlyIdKeys<Example>,
    {
      id: string;
      organisationId: string;
      groupId: string;
    }
   >
  >,
  Expect<Equal<OnlyIdKeys<{}>, {}>>
];

export type {tests}
