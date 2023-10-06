export function hasWithTypes(obj: any, key: string, type: any): boolean {
  return Reflect.get(obj, key).constructor === type;
}

export class Example {
  public name: string = "";
  public age: string = "11";
}

const example = new Example();

console.debug(hasWithTypes(example, "name", String));
console.debug(hasWithTypes(example, "name", Number));
console.debug(hasWithTypes(example, "age", Number));
