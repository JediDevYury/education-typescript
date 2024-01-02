import { Equal, Expect } from "@/helpers/type-utils.ts";

const makeQuery = (
 //@ts-expect-error
 url: string,
 //@ts-expect-error
 opts?: {
   method?: string;
   headers?: {
     [key: string]: string;
   };
   body?: string;
 },
) => {};

type MakeQueryParameters = Parameters<typeof makeQuery>;

type tests = [
  Expect<
   Equal<
    MakeQueryParameters,
    [
      url: string,
      opts?: {
        method?: string;
        headers?: {
          [key: string]: string;
        };
        body?: string;
      },
    ]
   >
  >,
];

export type { tests };

export { makeQuery };
