function select(arr){
    for(i=0;i<arr.length-1;i++){
        let min=i
        for(j=i+1;j<arr.length;j++){
            if(arr[j]<arr[min]){
                min=j
            }
        }
        temp=arr[i]
        arr[i]=arr[min]
        arr[min]=temp
    }
    return arr
}
console.log(select([6,1,2,0,13,10]));