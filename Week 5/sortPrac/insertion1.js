function insert(arr){
    for(i=1;i<arr.length;i++){
        let j=i-1
        let current=arr[i]
        while(arr[j]>current){
            arr[j+1]=arr[j]
            j--
        }
        arr[j+1]=current
    }
    return arr
}
console.log(insert([5,1,2,8,10,23,3]));
