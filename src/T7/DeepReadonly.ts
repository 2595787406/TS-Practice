export type DeepReadonly<T> = {
  readonly [K in keyof T]: T[K] extends Object ? DeepReadonly<T[K]> : T[K];
};

interface Person {
  name: string;
  address: {
    city: string;
  };
}

let personA: DeepReadonly<Person> = {
  name: "aaa",
  address: { city: "bbb" },
};
personA.name = "xxx";
personA.address.city = "xxxx";
