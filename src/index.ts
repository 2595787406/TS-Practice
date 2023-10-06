import { MyArray, myFlat } from "./T2/ArrayAndMap";

let a = new MyArray(1, 2, 3);
console.log(a.mySort());

let b = [1, 2, [1, 2]];

//   b = a.myReverse();
//   console.log(b);

let d = new MyArray(1, 2, 3, [1, 2, 3]);
console.log(myFlat(b));

b.sort();
b.reverse();
let [x, ...y] = b;
console.log(b.flat());

a.myCopyWithin(0, 2, 4);
// a.mySplice(1,2,10,20);
// b.splice(1,2,10,20);

console.log(a);
// a.myForEach((key) => {
//   console.log(key);
// });
// let b = new MyArray(5, 6);
// let d = b.myMap((value) => {
//   return value * 10;
// });
// let c = a.myConcat(b, d);
// console.log(c);
