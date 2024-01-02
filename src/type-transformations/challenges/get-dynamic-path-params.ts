import { Equal, Expect } from "helpers/type-utils";
import {S} from 'ts-toolbelt'

type UserPath = "/users/:id";

type UserOrganisationPath = "/users/:id/organisations/:organisationId";

// type UnionOfParams<P extends string> = S.Split<P, '/'>[number]

// type TEST1 = UnionOfParams<UserPath>

type ExtractPathParams<TPath extends string> = {
  [K in S.Split<TPath, '/'>[number] as
   K extends `:${infer P}`
    ? P
    : never]: string;
}

type tests = [
  Expect<Equal<ExtractPathParams<UserPath>, { id: string }>>,
  Expect<
   Equal<
    ExtractPathParams<UserOrganisationPath>,
    { id: string; organisationId: string }
   >
  >,
];

export type {tests, ExtractPathParams};
