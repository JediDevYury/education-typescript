import { expect, it } from "vitest";
import { Equal, Expect } from "helpers/type-utils";

type UPhrases = "hello" | "goodbye";

type GreetingResult<T> = T extends "goodbye" ? "hello" : "goodbye";

function youSayGoodbyeISayHello<TGreeting extends UPhrases>(greeting: TGreeting){
  return (greeting === "goodbye" ? "hello" : "goodbye") as GreetingResult<TGreeting>;
}

it("Should return goodbye when hello is passed in", () => {
  const result = youSayGoodbyeISayHello("hello");

  type test = [Expect<Equal<typeof result, "goodbye">>];

  expect(result).toEqual("goodbye");
});

it("Should return hello when goodbye is passed in", () => {
  const result = youSayGoodbyeISayHello("goodbye");

  type test = [Expect<Equal<typeof result, "hello">>];

  expect(result).toEqual("hello");
});
