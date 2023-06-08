function quickSort(arr) {
    if (arr.length <= 1) {
      return arr;
    }
    
    const pivot = arr[Math.floor(Math.random() * arr.length)];
    const less = [];
    const equal = [];
    const greater = [];
    
    for (let element of arr) {
      if (element < pivot) {
        less.push(element);
      } else if (element === pivot) {
        equal.push(element);
      } else {
        greater.push(element);
      }
    }
    
    return [...quickSort(less), ...equal, ...quickSort(greater)];
  }
  const arr = [3, 1, 4, 1, 5, 9, 2, 6, 5, 3, 5];
  const sortedArr = quickSort(arr);
  console.log(sortedArr);
    