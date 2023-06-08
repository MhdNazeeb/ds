// const arr=[1,2,3,4,4,5]
// for(i=0;i<arr.length;i++){
//     let flag=0
//     for(j=0;j<arr.length;j++){
//         if(arr[i]===arr[j] && i!=j){
//             flag=1
//             break
//         }
//     }
//     if(flag==0){
//         console.log(arr[i]);
//     }
// }

function rec(n){
if(n===1){
    return 1
}
return n+rec(n-1)
}
console.log(rec(5));
