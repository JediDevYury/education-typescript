//ts-
import { Equal, Expect } from "helpers/type-utils";

interface MyComplexInterface<Event, Context, Name, Point> {
  getEvent: () => Event;
  getContext: () => Context;
  getName: () => Name;
  getPoint: () => Point;
}

type Example = MyComplexInterface<
 "click",
 "window",
 "my-event",
 { x: 12; y: 14 }
>;

type GetPoint<E> = E extends {
  getPoint: () => infer K
}  ? K : never;

// infer TEvent, infer TContext, infer TName,
type GetPoint2<T> = T extends MyComplexInterface<never, never, never, infer TPoint> ? TPoint : never;

type tests = [Expect<Equal<GetPoint<Example>, { x: 12; y: 14 }>>];

export type {tests, GetPoint2}
