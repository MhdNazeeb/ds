function findSmallest(arr) {
    if (arr.length === 0) {
      return null;
    }
  
    let smallest = arr[0];
    for (let i = 1; i < arr.length; i++) {
      if (arr[i] < smallest) {
        smallest = arr[i];
      }
    }
    return smallest;
  }
  console.log(findSmallest([4,1,6,2,4]));

  
  