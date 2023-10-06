function catchError(target: any) {
  Object.getOwnPropertyNames(target.prototype).forEach((methodNames) => {
    if (target.prototype[methodNames] instanceof Function) {
      let originalMethod = target.prototype[methodNames];
      target.prototype[methodNames] = function (...args: any[]) {
        try {
          return originalMethod.apply(this, args);
        } catch (error) {
          console.error(`Error called by Function ${methodNames}.`);
          return;
        }
      };
    }
  });
}

@catchError
export class Calculator {
  public constructor() {}

  public add(a: number, b: number) {
    if (typeof a !== "number" || typeof b !== "number") {
      throw new Error();
    }
    return a + b;
  }
}

let dec = new Calculator();
console.log(dec.add("sada", -2));
