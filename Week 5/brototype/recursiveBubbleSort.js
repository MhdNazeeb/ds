//Recursive Bubble Sort
function recursiveBubbleSort(arr, n = arr.length) {
    if (n === 1) {
      return arr;
    }
    for (let i = 0; i < n - 1; i++) {
      if (arr[i] > arr[i + 1]) {
        [arr[i], arr[i + 1]] = [arr[i + 1], arr[i]];
      }
    }
    return recursiveBubbleSort(arr, n - 1);
  }
  let arr = [5, 3, 8, 4, 2];
  console.log(recursiveBubbleSort(arr));
  