import { Equal, Expect } from "helpers/type-utils";

type TemplateLiteralKey = `${"user" | "post" | "comment"}${"Id" | "Name"}`;

type ObjectOfKeys2 = Record<TemplateLiteralKey, string>;

type ObjectOfKeys = {
  [K in TemplateLiteralKey]: string;
};

type tests = [
  Expect<
   Equal<
    ObjectOfKeys2,
    {
      userId: string;
      userName: string;
      postId: string;
      postName: string;
      commentId: string;
      commentName: string;
    }
   >
  >,
];

export type { tests, TemplateLiteralKey, ObjectOfKeys };
