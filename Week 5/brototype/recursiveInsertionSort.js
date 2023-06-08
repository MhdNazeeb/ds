function recursiveInsertionSort(arr, n = arr.length) {
    if (n <= 1) {
      return arr;
    }
    recursiveInsertionSort(arr, n - 1);
    let last = arr[n - 1];
    let j = n - 2;
  
    while (j >= 0 && arr[j] > last) {
      arr[j + 1] = arr[j];
      j--;
    }
    arr[j + 1] = last;
  
    return arr;
  }
  let arr = [3, 1, 4, 1, 5, 9, 2, 6, 5, 3, 5];
  console.log(recursiveInsertionSort(arr));
  