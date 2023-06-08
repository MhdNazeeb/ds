function binarySearchSmallest(arr) {
    let left = 0;
    let right = arr.length - 1;
    while (left < right) {
      let mid = Math.floor((left + right) / 2);
      if (arr[mid] > arr[right]) {
        left = mid + 1;
      } else {
        right = mid;
      }
    }
    return arr[left];
  }
  const sortedArray = [4, 5, 6, 7, 0, 1, 2];
  const smallestElement = binarySearchSmallest(sortedArray);
  console.log(`The smallest element in the array is: ${smallestElement}`);
  