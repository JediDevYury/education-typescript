type NonEmptyArray<T> = [T, ...T[]];
type NonEmptyArray2<T> = [T, ...Array<T>];
export const makeEnum = (values: NonEmptyArray<string>) => {
  return values;
};

makeEnum(["a"]);
makeEnum(["a", "b", "c"]);

// @ts-expect-error
makeEnum([]);

export type { NonEmptyArray, NonEmptyArray2 };
