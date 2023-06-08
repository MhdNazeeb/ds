function quickSort(arr,start=0,end=arr.length-1){
    if(end<=start)return 
    const pivot=arr[end]
    let i=start-1
    for(let j=start;j<=end-1;j++){
        if(arr[j]<pivot){
            i++
            [arr[i],arr[j]]=[arr[j],arr[i]]
        }
    }
    [arr[i+1],arr[end]]=[arr[end],arr[i+2]]
    quickSort(arr,start,i)
    quickSort(arr,i+2,end)
}
const arr=[5,2,7,1,2,3]
quickSort(arr)
console.log(arr);