//recursive selection sort
function recursiveSelectionSort(arr, n = arr.length) {
    if (n === 1) {
      return arr;
    }
    let maxIdx = 0;
    for (let i = 1; i < n; i++) {
      if (arr[i] > arr[maxIdx]) {
        maxIdx = i;
      }
    }
    let temp = arr[n - 1];
    arr[n - 1] = arr[maxIdx];
    arr[maxIdx] = temp;
  
    recursiveSelectionSort(arr, n - 1);
    return arr;
  }
  console.log(recursiveSelectionSort([4,2,5,7,1]));
  