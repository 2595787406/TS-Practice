function createArray<T, U>(arr1: T[], arr2: U[]): (T | U)[];
function createArray<T, U, V>(
  item1: T,
  item2: U,
  item3: V
): (num: number) => (T | U | V)[];

function createArray(...args: any[]) {
  if (args.length === 2) {
    return [...args[0], ...args[1]];
  }

  if (args.length === 3) {
    return function (num: number) {
      let newArr: any[] = [];
      for (let i = 0; i < num; ++i) {
        newArr = newArr.concat(...args);
      }
      return newArr;
    };
  }
}

const arr1 = [1, 2, 3];
const arr2 = ["a", "b", "c"];

const newArr1 = createArray(arr1, arr2);
console.log(newArr1);

const newArr2 = createArray(1, "a", true)(3);
console.log(newArr2);
