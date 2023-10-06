export type Filter_Iteration<T, U> = {
  [K in keyof T]: T[K] extends U ? T[K] : never;
};

export type Filter_Traversal<T, U> = T extends U
  ? T
  : T extends object
  ? { [K in keyof T]: Filter_Traversal<T[K], U> }
  : never;

type Fruit = "apple" | "banana" | "orange";
type Fruits = ["apple", "banana", "orange", "cherry"];
type OnlyFruitsIteration = Filter_Iteration<Fruits, Fruit>;
type OnlyFruitsTraversal = Filter_Traversal<Fruits, Fruit>;
