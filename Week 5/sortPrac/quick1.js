
function quick(arr,start=0,end=arr.length-1){
    if(end<=start){
        return
    }
    const pivot=arr[end]
    let i=start-1
    for(j=start;j<=end-1;j++){
        if(arr[j]<pivot){
            i++
            [arr[i],arr[j]]=[arr[j],arr[i]]
        }
    }
    [arr[i+1],arr[end]]=[arr[end],arr[i+1]]
    quick(arr,start,i)
    quick(arr,i+2,end)
}
const arr=[5,1,3,8,2,9]
quick(arr)
console.log(arr);