export class MyArray extends Array {
  constructor(...args: any[]) {
    super(...args);
  }

  myForEach(
    callback: (value: any, index?: number, array?: any[]) => void
  ): void {
    for (let i = 0; i < this.length; ++i) {
      callback(this[i], i, this);
    }
  }

  myConcat(...args: any[]) {
    let result = new MyArray(...this);
    for (let arg of args) {
      if (Array.isArray(arg)) {
        result.push(...arg);
      } else {
        result.push(arg);
      }
    }
    return result;
  }

  myCopyWithin(target: number, start: number, end?: number) {
    let targetPosition =
      target < 0
        ? Math.max(this.length + target, 0)
        : Math.min(target, this.length);
    let startPosition =
      start < 0
        ? Math.max(this.length + start, 0)
        : Math.min(start, this.length);
    let endPosition = end;
    if (end === undefined) {
      endPosition = this.length;
    } else {
      endPosition =
        end < 0 ? Math.max(this.length + end, 0) : Math.min(end, this.length);
    }
    let count = Math.min(
      endPosition - startPosition,
      this.length - targetPosition
    );

    if (
      startPosition < targetPosition &&
      targetPosition < startPosition + count
    ) {
      for (let i = count - 1; i >= 0; i--) {
        this[targetPosition + i] = this[startPosition + i];
      }
    } else {
      for (let i = 0; i < count; i++) {
        this[targetPosition + i] = this[startPosition + i];
      }
    }
    return this;
  }

  myFilter(callback: (value: any, index: number, array: any[]) => boolean) {
    let result = new MyArray();
    for (let i = 0; i < this.length; ++i) {
      if (callback(this[i], i, this)) {
        result.push(this[i]);
      }
    }
    return result;
  }

  myMap(callback: (value: any, index: number, array: any[]) => any) {
    let result = new MyArray();
    for (let i = 0; i < this.length; ++i) {
      result.push(callback(this[i], i, this));
    }
    return result;
  }

  myShift() {
    let result = this[0];
    for (let i = 0; i < this.length; ++i) {
      this[i] = this[i + 1];
    }
    this.length--;
    return result;
  }

  myUnshift(...args: any[]) {
    let newArray = [...args, ...this];
    for (let i = 0; i < newArray.length; ++i) {
      this[i] = newArray[i];
    }
    this.length = newArray.length;
    return this.length;
  }

  myReduce(
    callback: (
      previousValue: any,
      currentValue: any,
      currentIndex?: number,
      array?: any[]
    ) => any,
    initialValue?: any
  ) {
    let accumulatorValue = initialValue ?? 0;
    for (let i = 0; i < this.length; ++i) {
      accumulatorValue = callback(accumulatorValue, this[i], i, this);
    }
    return accumulatorValue;
  }

  myReverse() {
    let start = 0;
    let end = this.length - 1;
    while (start < end) {
      let temp = this[start];
      this[start] = this[end];
      this[end] = temp;
      start++;
      end--;
    }
    return this;
  }

  myFindIndex(callback: (value: any, index: number, array: any[]) => boolean) {
    for (let i = 0; i < this.length; ++i) {
      if (callback(this[i], i, this)) {
        return i;
      }
    }
    return -1;
  }

  myFind(callback: (value: any, index: number, array: any[]) => boolean) {
    for (let i = 0; i < this.length; ++i) {
      if (callback(this[i], i, this)) {
        return this[i];
      }
    }
    return undefined;
  }

  mySome(callback: (value: any, index: number, array: any[]) => boolean) {
    for (let i = 0; i < this.length; ++i) {
      if (callback(this[i], i, this)) {
        return true;
      }
    }
    return false;
  }

  mySort(compare?: (a: any, b: any) => number) {
    for (let i = 0; i < this.length; i++) {
      for (let j = 0; j < this.length - i - 1; j++) {
        if (compare === undefined) {
          if (this[j] > this[j + 1]) {
            let temp = this[j];
            this[j] = this[j + 1];
            this[j + 1] = temp;
          }
        } else {
          if (compare(this[j], this[j + 1]) > 0) {
            let temp = this[j];
            this[j] = this[j + 1];
            this[j + 1] = temp;
          }
        }
      }
    }

    return this;
  }

  mySlice(start: number | undefined, end: number | undefined) {
    let length = this.length;
    start = start === undefined ? 0 : start;
    end = end === undefined ? length : end;

    start = start < 0 ? start + length : start;
    end = end < 0 ? end + length : end;

    start = Math.max(start, 0);
    end = Math.min(end, length);

    let sliceLength = Math.max(end - start, 0);
    let result = new MyArray();
    for (let i = 0; i < sliceLength; ++i) {
      result[i] = this[i + start];
    }
    return result;
  }

  mySplice(start: number, deleteCount: number, ...args: any[]) {
    let length = this.length;
    let leftArray = this.mySlice(0, start);
    let deleteArray = this.mySlice(start, start + deleteCount);
    let rightArray = this.mySlice(start + deleteCount, length);
    let newArray = new MyArray(...leftArray, ...args, ...rightArray);
    for (let i = 0; i < newArray.length; ++i) {
      this[i] = newArray[i];
    }
    this.length = newArray.length;
    return deleteArray;
  }
}

export function myFlat(array: any[]) {
  let result: any[] = [];

  for (let i = 0; i < array.length; i++) {
    if (Array.isArray(array[i])) {
      result = result.concat(myFlat(array[i]));
    } else {
      result.push(array[i]);
    }
  }

  return result;
}

export function keys<T, U>(map: Map<T, U>) {
  let result: T[] = [];
  map.forEach((_value, key) => {
    result.push(key);
  });
  return result;
}

export function values<T, U>(map: Map<T, U>) {
  let result: U[] = [];
  map.forEach((value, _key) => {
    result.push(value);
  });
  return result;
}
