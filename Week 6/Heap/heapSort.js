function heapSort(array) {
    buildMaxHeap(array);
    for (let i = array.length - 1; i > 0; i--) {
      [array[0], array[i]] = [array[i], array[0]];
      heapify(array, 0, i);
    }
    return array;
  }
  function buildMaxHeap(array) {
    const len = array.length;
    const startIndex = Math.floor(len / 2);
    for (let i = startIndex; i >= 0; i--) {
      heapify(array, i, len);
    }
  }
  function heapify(array, index, heapSize) {
    const leftIndex = 2 * index + 1;
    const rightIndex = 2 * index + 2;
    let largestIndex = index;
    if (leftIndex < heapSize && array[leftIndex] > array[largestIndex]) {
      largestIndex = leftIndex;
    }
    if (rightIndex < heapSize && array[rightIndex] > array[largestIndex]) {
      largestIndex = rightIndex;
    }
    if (largestIndex !== index) {
      [array[index], array[largestIndex]] = [array[largestIndex], array[index]];
      heapify(array, largestIndex, heapSize);
    }
  }
  const arr = [4, 1, 2, 7, 1, 10, 5, 100];
console.log(heapSort(arr)); // [1, 1, 2, 4, 5, 7, 10, 100]
