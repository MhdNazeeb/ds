function bubbleSort(arr){
    for(i=0;i<arr.length-1;i++){
        for(j=0;j<arr.length-i-1;j++){
            if(arr[j]>arr[j+1]){
                temp=arr[j]
            arr[j]=arr[j+1]
            arr[j+1]=temp
            }
        }
    }
    return arr
}
console.log(bubbleSort([5,1,3,7,2]));