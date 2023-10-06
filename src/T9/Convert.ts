function convert(num: number): number;

function convert(str: string): string;

function convert(args: any): any {
  if (typeof args === "number") {
    return args * 2;
  }
  if (typeof args === "string") {
    return args.toUpperCase() + "!";
  }
}

console.log(convert(10));
console.log(convert("hello"));
