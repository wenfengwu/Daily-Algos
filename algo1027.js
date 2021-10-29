const myArr = [3, 2, 9, 5, 1, 4, 8];

function selectionSort(arr) {
  for (i = 0; i < arr.length - 1; i++) {
    let minNum = arr[i];
    let minIndex = i;
    for (j = i; j < arr.length; j++) {
      if (arr[j] < minNum) {
        minIndex = j;
        minNum = arr[j];
      }
    }
    let temp = arr[i];
    arr[i] = arr[minIndex];
    arr[minIndex] = temp;
  }
  return arr;
}

console.log(selectionSort(myArr));
