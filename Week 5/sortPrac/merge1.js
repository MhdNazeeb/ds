function mergeSort(arr){
if(arr.length<2){
    return arr
}
const mid =Math.floor(arr.length/2)
const left=arr.slice(0,mid)
const right=arr.slice(mid)
return merge(mergeSort(left),mergeSort(right))
}
function merge(left,right){
    const sort=[]
    while(left.length && right.length){
        if(left[0]<=right[0]){
            sort.push(left.shift())
        }else{
            sort.push(right.shift())
        }
    }
    return [...sort,...left,...right]
}
console.log(mergeSort([7,1,3,0,16]));
