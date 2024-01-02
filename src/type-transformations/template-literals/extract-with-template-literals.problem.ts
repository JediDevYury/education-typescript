import { Equal, Expect } from "@/helpers/type-utils.ts";

type Routes = "/users" | "/users/:id" | "/posts" | "/posts/:id";

type DynamicRoutes = Extract<Routes, `${string}:id`>;
type DynamicRoutes2 = Extract<Routes, `${string}:${string}`>;

type tests = [Expect<Equal<DynamicRoutes2, "/users/:id" | "/posts/:id">>];

export type { tests, DynamicRoutes, DynamicRoutes2 };
