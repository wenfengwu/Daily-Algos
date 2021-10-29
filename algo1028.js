// insertionSort2([3, 5, 2, 1, 0]);
// insertionSort2([3, 0]);
// insertionSort2([0]);
// insertionSort2([]);
// insertionSort2([1, 2, 3, 4, 5]);
// insertionSort2([5, 4, 3, 2, 1]);
// insertionSort2([5, 4, 0, 2, 1]);

function insertionSort2(arr) {
  if (arr == null || arr.length <= 0) {
    return;
  }
  for (let i = 1; i < arr.length; i++) {
    let temp = arr[i];
    let j = i - 1;
    for (j; j >= 0; j--) {
      if (arr[j] > temp) {
        arr[j + 1] = arr[j];
      } else {
        break;
      }
    }
    arr[j + 1] = temp;
  }
  return arr;
}

console.log(insertionSort2([3, 5, 2, 1, 0]));
console.log(insertionSort2([3, 0]));
console.log(insertionSort2([0]));
console.log(insertionSort2([]));
console.log(insertionSort2([1, 2, 3, 4, 5]));
console.log(insertionSort2([5, 4, 3, 2, 1]));
console.log(insertionSort2([5, 4, 0, 2, 1]));
