function findLargestElement(arr) {
    let left = 0;
    let right = arr.length - 1;
    while (left < right) {
      const mid = Math.floor((left + right) / 2);
      if (arr[mid] < arr[right]) {
        left = mid + 1;
      } else {
        right = mid;
      }
    }
    return arr[left];
  }
  const sortedArray = [2, 5, 8, 12, 16, 23, 38, 56, 72, 91];
  const largestElement = findLargestElement(sortedArray);
  console.log("Largest element:", largestElement);
  