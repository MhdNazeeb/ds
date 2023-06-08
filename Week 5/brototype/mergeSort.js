function mergeSort(arr){//descending order
    if(arr.length < 2){
        return arr;
    }
    const mid = Math.floor(arr.length/2);
    const leftArr = arr.slice(0,mid);
    const rightArr = arr.slice(mid);
    return merge(mergeSort(leftArr), mergeSort(rightArr))
}
function merge(leftArr , rightArr){
    sortedArr = []
    while(leftArr.length && rightArr.length){
       if(leftArr[0] < rightArr[0]){
        sortedArr.push(leftArr.shift())
       } else {
        sortedArr.push(rightArr.shift())
       }
    }

    return [ ...sortedArr, ...leftArr, ...rightArr]
}
let arr = [2,4,5,21,6,2,14,8,5,4,6];
let result = mergeSort(arr)
console.log(result);