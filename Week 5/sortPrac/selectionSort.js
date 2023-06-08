function selection(arr){
for(i=0;i<arr.length-1;i++){
    let min=i
    for(let j=i+1;j<arr.length;j++){
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
console.log(selection([3,1,19,4,0]));