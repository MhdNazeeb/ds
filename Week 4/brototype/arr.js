let arr=[10,20,30,40,50,10,30]
let len=arr.length
if(len%2==0){
    for(i=0;i<Math.floor(arr.length/2);i++){
        var b=arr[i]+arr[len-1-i]
        console.log(b);
        }
}else{
    for(i=0;i<Math.floor(arr.length/2);i++){
        var b=arr[i]+arr[len-1-i]
        console.log(b);
        }
        console.log(arr[Math.floor(arr.length/2)])
}





