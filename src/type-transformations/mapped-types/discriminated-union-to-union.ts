import { Equal, Expect } from "helpers/type-utils";

type Fruit =
 | {
  name: "apple";
  color: "red";
}
 | {
  name: "banana";
  color: "yellow";
}
 | {
  name: "orange";
  color: "orange";
};

type UnionOfFruits = Fruit['name']

type TransformedFruit = {
  [K in Fruit as K['name']]: `${K['name']}:${K['color']}`;
}[UnionOfFruits];

type tests = [
  Expect<
   Equal<TransformedFruit, "apple:red" | "banana:yellow" | "orange:orange">
  >,
];

export type {tests, TransformedFruit}
